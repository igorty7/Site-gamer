import { useEffect, useMemo, useRef, useState } from 'react'
import { CartContext } from './cart-context.js'

const storageKey = 'nexus-cart'

function getStoredCart() {
  try {
    const stored = window.localStorage.getItem(storageKey)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(getStoredCart)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [toast, setToast] = useState(null)
  const toastTimer = useRef(null)

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(items))
  }, [items])

  useEffect(() => {
    return () => window.clearTimeout(toastTimer.current)
  }, [])

  const showToast = (productName) => {
    window.clearTimeout(toastTimer.current)
    setToast({
      id: Date.now(),
      message: `${productName} adicionado ao carrinho`,
    })
    toastTimer.current = window.setTimeout(() => setToast(null), 2600)
  }

  const addToCart = (product) => {
    setItems((currentItems) => {
      const item = currentItems.find((cartItem) => cartItem.id === product.id)

      if (item) {
        return currentItems.map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        )
      }

      return [...currentItems, { ...product, quantity: 1 }]
    })
    showToast(product.name)
  }

  const decreaseItem = (productId) => {
    setItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const removeFromCart = (productId) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== productId))
  }

  const clearCart = () => {
    setItems([])
  }

  const totals = useMemo(() => {
    return items.reduce(
      (acc, item) => ({
        quantity: acc.quantity + item.quantity,
        total: acc.total + item.price * item.quantity,
      }),
      { quantity: 0, total: 0 },
    )
  }, [items])

  const value = {
    items,
    isCartOpen,
    toast,
    totalItems: totals.quantity,
    totalPrice: totals.total,
    addToCart,
    decreaseItem,
    removeFromCart,
    clearCart,
    openCart: () => setIsCartOpen(true),
    closeCart: () => setIsCartOpen(false),
    toggleCart: () => setIsCartOpen((current) => !current),
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
