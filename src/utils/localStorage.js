export const getWishlist = () => JSON.parse(localStorage.getItem('wishlist')) || [];
export const addToWishlist = (car) => {
  const list = getWishlist();
  if (!list.find(c => c.id === car.id)) {
    list.push(car);
    localStorage.setItem('wishlist', JSON.stringify(list));
  }
};
export const removeFromWishlist = (id) => {
  const list = getWishlist().filter(c => c.id !== id);
  localStorage.setItem('wishlist', JSON.stringify(list));
};