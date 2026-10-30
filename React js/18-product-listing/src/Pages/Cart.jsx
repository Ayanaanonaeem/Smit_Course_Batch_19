import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useContext(CartContext);

  return (
    <div className="min-h-screen bg-[#faf8ff] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Shopping Cart
          </h1>
          <p className="text-gray-500 mt-2">
            Review your items before checkout.
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-2xl border border-purple-100 p-12 text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold text-gray-800">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mt-2">
              Looks like you haven't added anything yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Cart Products */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-purple-100 p-4 sm:p-6 flex flex-col sm:flex-row gap-5"
                >
                  <div className="bg-purple-50 rounded-xl p-4 flex items-center justify-center sm:w-36 sm:h-36">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-28 h-28 object-contain"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-sm text-purple-600 capitalize font-medium">
                        {item.category}
                      </p>

                      <h2 className="text-lg font-bold text-gray-800 mt-1">
                        {item.title}
                      </h2>

                      <p className="text-xl font-bold text-purple-700 mt-3">
                        ${item.price}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-5">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="w-9 h-9 rounded-lg border border-purple-200 text-purple-700 hover:bg-purple-100"
                        >
                          -
                        </button>

                        <span className="font-semibold text-gray-800">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="w-9 h-9 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-sm font-semibold text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-2xl border border-purple-100 p-6 sticky top-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Order Summary
                </h2>

                <div className="flex justify-between text-gray-600 mb-4">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-600 mb-4">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>

                <div className="border-t border-purple-100 pt-4 flex justify-between">
                  <span className="font-bold text-gray-900">Total</span>
                  <span className="text-xl font-bold text-purple-700">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>

                <button className="w-full mt-7 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-300">
                  Proceed to Checkout
                </button>

                <p className="text-center text-xs text-gray-400 mt-4">
                  Secure checkout experience
                </p>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;