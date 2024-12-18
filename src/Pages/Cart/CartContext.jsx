import { createContext, useContext, useState, useMemo, useEffect} from "react";

//Contexto
const CartContext = createContext();

//Hook para contexto
export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  // const [cart, setCart] = useState([]);
  //Carrito persistente
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("shoppingCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [extraCosts, setExtraCosts] = useState(0);

  //LocalStorage 
  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
  }, [cart]);

  //Agregar al carrito
  const addToCart = (product) => {
    setCart((prevCart) => {
      //Comprobación de existencia
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 } // Aumenta la cantidad
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1, selectedExtras: [] }];
      }
    });
  };

  //Eliminar del carrito
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  //Actualizar la cantidad de un producto
  const updateCartItemQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  //Limpiar el carrito
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
        item.selectedExtras.reduce((extraTotal, extra) => extraTotal + parseInt(extra.price), 0) * item.quantity,
      0
    );
  }, [cart]);

  //Precio final
  const finalPrice = useMemo(() => {
    return totalPrice + extraCosts;
  }, [totalPrice, extraCosts]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartItemQuantity, clearCart, totalPrice, extraCosts, setExtraCosts, finalPrice, updateCartExtras }}>
      {children}
    </CartContext.Provider>
  );
};
