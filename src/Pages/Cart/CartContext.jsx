import { createContext, useContext, useState, useMemo } from "react";

// Contexto de carrito
const CartContext = createContext();

// Hook para usar el contexto
export const useCart = () => {
    return useContext(CartContext);
};

// Componente del proveedor del carrito
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [extraCosts, setExtraCosts] = useState(0);

    // Función para agregar al carrito
    const addToCart = (product) => {
        setCart((prevCart) => {
            // Verificamos si el producto ya está en el carrito usando su ID
            const existingProduct = prevCart.find((item) => item.id === product.id);

            if (existingProduct) {
                // Si ya está, aumentamos la cantidad
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 } // Aumenta la cantidad
                        : item
                );
            } else {
                // Si no está, lo agregamos al carrito con cantidad 1
                return [...prevCart, { ...product, quantity: 1, selectedExtras: [] }];
            }
        });
    };

    // Función para eliminar del carrito
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    // Función para actualizar la cantidad de un producto
    const updateCartItemQuantity = (id, quantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
            )
        );
    };

    // Función para limpiar el carrito
    const clearCart = () => setCart([]);

    const updateCartExtras = (id, extra, isChecked) => {
        setCart((prevCart) =>
          prevCart.map((item) => {
            if (item.id === id) {
              const updatedExtras = isChecked
                ? [...item.selectedExtras, extra]
                : item.selectedExtras.filter((e) => e.name !== extra.name);
              return { ...item, selectedExtras: updatedExtras };
            }
            return item;
          })
        );
      };      

    // Calcular el total del precio
    // const totalPrice = useMemo(() => {
    //     return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    // }, [cart]);
    const totalPrice = useMemo(() => {
        return cart.reduce(
          (total, item) =>
            total +
            item.price * item.quantity +
            item.selectedExtras.reduce((extraTotal, extra) => extraTotal + extra.price, 0) * item.quantity,
          0
        );
      }, [cart]);      

    // Calcular el precio final (total + costos adicionales)
    const finalPrice = useMemo(() => {
        return totalPrice + extraCosts;
    }, [totalPrice, extraCosts]);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartItemQuantity, clearCart, totalPrice, extraCosts, setExtraCosts, finalPrice, updateCartExtras }}>
            {children}
        </CartContext.Provider>
    );
};
