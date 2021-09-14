import CartContext from "./cart-context";

const CartProvider = (props) => {
    const addItemToCardHandler = item => {}

    const removeItemFromCartHandler = id => {}
    
    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCardHandler,
        removeItem: removeItemFromCartHandler
    }
    
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;