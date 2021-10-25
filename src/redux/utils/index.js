export const addItemToShoppingCart = (cartItems, itemToAdd) => {
  const exitsItem = cartItems.find(item => item.id === itemToAdd.id);

  if (exitsItem) {
    console.log("EXISTING CART ITEM", exitsItem);
    console.log("MY CART ITEMS", cartItems);
    return cartItems.map(item =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const decreaseCartItemQty = (cartItems, cartItem) => {
  const exitsItem = cartItems.find(item => item.id === cartItem.id);

  if (exitsItem.quantity === 1) {
    return cartItems.filter(item => item.id !== cartItem.id);
  }

  return cartItems.map(item =>
    item.id === cartItem.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : item
  );
};
