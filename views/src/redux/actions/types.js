// Fetch categories cases
export const FETCH_CATEGORIES_STARTED = "FETCH_CATEGORIES_STARTED";
export const FETCH_CATEGORIES_FAILURE = "FETCH_CATEGORIES_FAILURE";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";

// Fetch each category's products cases
export const FETCH_CATEGORY_PRODUCTS_STARTED = "FETCH_CATEGORY_PRODUCTS_STARTED";
export const FETCH_CATEGORY_PRODUCTS_FAILURE = "FETCH_CATEGORY_PRODUCTS_FAILURE";
export const FETCH_CATEGORY_PRODUCTS_SUCCESS = "FETCH_CATEGORY_PRODUCTS_SUCCESS";

// Fetch all products
export const FETCH_PRODUCTS_STARTED = "FETCH_PRODUCTS_STARTED";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

// Fetch all products
export const FETCH_USER_PRODUCTS_STARTED = "FETCH_USER_PRODUCTS_STARTED";
export const FETCH_USER_PRODUCTS_SUCCESS = "FETCH_USER_PRODUCTS_SUCCESS";
export const FETCH_USER_PRODUCTS_FAILURE = "FETCH_USER_PRODUCTS_FAILURE";

// Fetch single product
export const FETCH_SINGLE_PRODUCT_STARTED = "FETCH_SINGLE_PRODUCT_STARTED";
export const FETCH_SINGLE_PRODUCT_SUCCESS = "FETCH_SINGLE_PRODUCT_SUCCESS";
export const FETCH_SINGLE_PRODUCT_FAILURE = "FETCH_SINGLE_PRODUCT_FAILURE";

// Add new Category
export const ADD_CATEGORY_SUCCESS = "ADD_CATEGORY_SUCCESS";
export const ADD_CATEGORY_FAILURE = "ADD_CATEGORY_FAILURE";

// Add new Product
export const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";
export const ADD_PRODUCT_FAILURE = "ADD_PRODUCT_FAILURE";

// Delete category
export const DELETE_CATEGORY_SUCCESS = "DELETE_CATEGORY_SUCCESS";
export const DELETE_CATEGORY_FAILURE = "DELETE_CATEGORY_FAILURE";

// Update Category
export const UPDATE_CATEGORY_SUCCESS = "UPDATE_CATEGORY_SUCCESS";
export const UPDATE_CATEGORY_FAILURE = "UPDATE_CATEGORY_FAILURE";

// Delete product
export const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS";
export const DELETE_PRODUCT_FAILURE = "DELETE_PRODUCT_FAILURE";

// Update Product
export const UPDATE_PRODUCT_SUCCESS = "UPDATE_PRODUCT_SUCCESS";
export const UPDATE_PRODUCT_FAILURE = "UPDATE_PRODUCT_FAILURE";

// users options
export const USER_LOADING = "USER_LOADING";
export const USER_LOADED = "USER_LOADED";
export const AUTH_ERROR = "AUTH_ERROR";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";
export const LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";

// fetch cart products
export const FETCH_CART_STARTED = "FETCH_CART_STARTED";
export const FETCH_CART_SUCCESS = "FETCH_CART_SUCCESS";
export const FETCH_CART_FAILURE = "FETCH_CART_FAILURE";

// add product to cart
export const ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS";
export const ADD_TO_CART_FAILURE = "ADD_TO_CART_FAILURE";

// change quantity from cart
export const CHANGE_CART_QUANTITY_SUCCESS = "CHANGE_CART_QUANTITY_SUCCESS";
export const CHANGE_CART_QUANTITY_FAILURE = "CHANGE_CART_QUANTITY_FAILURE";

// delete product from cart
export const DELETE_FROM_CART_SUCCESS = "DELETE_FROM_CART_SUCCESS";
export const DELETE_FROM_CART_FAILURE = "DELETE_FROM_CART_FAILURE";

// fetch All user Addresses
export const FETCH_ADDRESSES_STARTED = "FETCH_ADDRESSES_STARTED";
export const FETCH_ADDRESSES_SUCCESS = "FETCH_ADDRESSES_SUCCESS";
export const FETCH_ADDRESSES_FAILURE = "FETCH_ADDRESSES_FAILURE";

// add a new address
export const ADD_ADDRESS_SUCCESS = "ADD_ADDRESS_SUCCESS";
export const ADD_ADDRESS_FAILURE = "ADD_ADDRESS_FAILURE";

// delete an address
export const DELETE_ADDRESS_SUCCESS = "DELETE_ADDRESS_SUCCESS";
export const DELETE_ADDRESS_FAILURE = "DELETE_ADDRESS_FAILURE";

// update an address
export const EDIT_ADDRESS_SUCCESS = "EDIT_ADDRESS_SUCCESS";
export const EDIT_ADDRESS_FAILURE = "EDIT_ADDRESS_FAILURE";

// fetch WISHLIST products
export const FETCH_WISHLIST_STARTED = "FETCH_WISHLIST_STARTED";
export const FETCH_WISHLIST_SUCCESS = "FETCH_WISHLIST_SUCCESS";
export const FETCH_WISHLIST_FAILURE = "FETCH_WISHLIST_FAILURE";

// add product to WISHLIST
export const ADD_TO_WISHLIST_SUCCESS = "ADD_TO_WISHLIST_SUCCESS";
export const ADD_TO_WISHLIST_FAILURE = "ADD_TO_WISHLIST_FAILURE";

// delete product from WISHLIST
export const DELETE_FROM_WISHLIST_SUCCESS = "DELETE_FROM_WISHLIST_SUCCESS";
export const DELETE_FROM_WISHLIST_FAILURE = "DELETE_FROM_WISHLIST_FAILURE";

// fetch All user orders history
export const FETCH_HISTORY_STARTED = "FETCH_HISTORY_STARTED";
export const FETCH_HISTORY_SUCCESS = "FETCH_HISTORY_SUCCESS";
export const FETCH_HISTORY_FAILURE = "FETCH_HISTORY_FAILURE";

// fetch All seller's orders to ship
export const FETCH_ORDERS_TO_SHIP_STARTED = "FETCH_ORDERS_TO_SHIP_STARTED";
export const FETCH_ORDERS_TO_SHIP_SUCCESS = "FETCH_ORDERS_TO_SHIP_SUCCESS";
export const FETCH_ORDERS_TO_SHIP_FAILURE = "FETCH_ORDERS_TO_SHIP_FAILURE";

// Mark order as shipped
export const ORDER_SHIPPED_SUCCESS = "ORDER_SHIPPED_SUCCESS";
export const ORDER_SHIPPED_FAILURE = "ORDER_SHIPPED_SUCCESS";

// order success
export const PLACED_ORDER_SUCCESS = "PLACED_ORDER_SUCCESS";
export const PLACED_ORDER_FAILURE = "PLACED_ORDER_FAILURE";

// Choose order address
export const CHOOSE_ORDER_ADDRESS_SUCCESS = "CHOOSE_ORDER_ADDRESS_SUCCESS";
export const CHOOSE_ORDER_ADDRESS_FAILURE = "CHOOSE_ORDER_ADDRESS_SUCCESS";

// users options
export const FETCH_ALL_USERS_STARTED = "FETCH_ALL_USERS_STARTED";
export const FETCH_ALL_USERS_SUCCESS = "FETCH_ALL_USERS_SUCCESS";
export const FETCH_ALL_USERS_FAILURE = "FETCH_ALL_USERS_FAILURE";

// change user permissions to shipper
export const SHIPPER_PERMISSION_SUCCESS = "SHIPPER_PERMISSION_SUCCESS";
export const SHIPPER_PERMISSION_FAILURE = "SHIPPER_PERMISSION_FAILURE";

// fetch shippers
export const FETCH_SHIPPERS_STARTED = "FETCH_SHIPPERS_STARTED";
export const FETCH_SHIPPERS_SUCCESS = "FETCH_SHIPPERS_SUCCESS";
export const FETCH_SHIPPERS_FAILURE = "FETCH_SHIPPERS_FAILURE";

// edit shipper
export const EDIT_SHIPPERS_SUCCESS = "EDIT_SHIPPERS_SUCCESS";
export const EDIT_SHIPPERS_FAILURE = "EDIT_SHIPPERS_FAILURE";

// fetch All shipper orders to deliver
export const FETCH_ORDERS_TO_DELIVER_STARTED = "FETCH_ORDERS_TO_DELIVER_STARTED";
export const FETCH_ORDERS_TO_DELIVER_SUCCESS = "FETCH_ORDERS_TO_DELIVER_SUCCESS";
export const FETCH_ORDERS_TO_DELIVER_FAILURE = "FETCH_ORDERS_TO_DELIVER_FAILURE";

// Mark order as delivered
export const ORDER_DELIVERED_SUCCESS = "ORDER_DELIVERED_SUCCESS";
export const ORDER_DELIVERED_FAILURE = "ORDER_DELIVERED_SUCCESS";
