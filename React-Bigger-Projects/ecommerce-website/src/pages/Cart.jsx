import React, { useContext } from 'react'
import { CartContext } from '../context/cartContextProvider'
import { Link } from 'react-router-dom'

const Cart = () => {

  const { carts, plusCount, minusCount, RemoveCart } = useContext(CartContext)

  const totalPrice = carts.reduce((total, item) => {
    return total + (item.price * item.quantity)
  }, 0)

  return (
    <div className="min-h-screen bg-[#FFFBE9] text-[#3D3028]">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-light mb-10">
          Your Shopping Cart
        </h1>

        {carts.length === 0 ? (

          <div className="flex flex-col items-center justify-center py-24">

            <h2 className="text-2xl text-[#806B59] mb-4">
              Your cart is empty
            </h2>

            <Link
              to="/products"
              className="bg-[#AD8B73] text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-[#8F705A] transition"
            >
              Continue Shopping
            </Link>

          </div>

        ) : (

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Cart Products */}

            <div className="lg:col-span-2 space-y-6">

              {carts.map((item) => (

                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row gap-6 border-b border-[#CEAB93] pb-6"
                >

                  {/* Product Image */}

                  <div className="bg-[#E3CAA5]/20 w-full sm:w-40 h-40 flex-shrink-0">

                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-contain p-4"
                    />

                  </div>

                  {/* Product Details */}

                  <div className="flex flex-col flex-1 justify-between">

                    <div>

                      <p className="text-[#AD8B73] text-xs uppercase tracking-widest mb-2">
                        {item.category}
                      </p>

                      <h2 className="text-xl font-medium">
                        {item.title}
                      </h2>

                      <p className="text-[#AD8B73] mt-3">
                        ${item.price}
                      </p>

                    </div>

                    {/* Quantity */}

                    <div className="flex items-center justify-between mt-6">

                      <div className="flex items-center border border-[#CEAB93]">

                        <button
                          onClick={() => minusCount(item.id)}
                          disabled={item.quantity <= 1}
                          className="px-4 py-2 hover:bg-[#E3CAA5]/30 disabled:opacity-40"
                        >
                          −
                        </button>

                        <span className="px-4 py-2 min-w-12 text-center">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => plusCount(item.id)}
                          className="px-4 py-2 hover:bg-[#E3CAA5]/30"
                        >
                          +
                        </button>

                      </div>

                      <button
                        onClick={() => RemoveCart(item.id)}
                        className="text-red-600 text-sm underline underline-offset-4"
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

            {/* Order Summary */}

            <div className="bg-[#E3CAA5]/20 p-8 h-fit">

              <h2 className="text-2xl font-light mb-6">
                Order Summary
              </h2>

              <div className="flex justify-between py-4 border-b border-[#CEAB93]">

                <span className="text-[#806B59]">
                  Subtotal
                </span>

                <span>
                  ${totalPrice.toFixed(2)}
                </span>

              </div>

              <div className="flex justify-between py-4 border-b border-[#CEAB93]">

                <span className="text-[#806B59]">
                  Shipping
                </span>

                <span className="text-green-700">
                  Free
                </span>

              </div>

              <div className="flex justify-between py-5 text-xl">

                <span>
                  Total
                </span>

                <span className="text-[#AD8B73] font-medium">
                  ${totalPrice.toFixed(2)}
                </span>

              </div>

              <button
                className="w-full bg-[#AD8B73] text-white py-4 uppercase tracking-widest text-sm hover:bg-[#8F705A] transition"
              >
                Proceed to Checkout
              </button>

              <Link
                to="/products"
                className="block text-center mt-5 text-[#806B59] text-sm underline underline-offset-4"
              >
                Continue Shopping
              </Link>

            </div>

          </div>

        )}

      </div>

    </div>
  )
}

export default Cart