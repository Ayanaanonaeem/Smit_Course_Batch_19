import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { CartContext } from '../context/cartContextProvider'

const ProductDetail = () => {
  const { id } = useParams()
  const {AddToCart,RemoveCart,minusCount,plusCount,carts}=useContext(CartContext)
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [counter,setCounter]=useState(0)
  
  const [selectedImage, setSelectedImage] = useState('')
  const [buttonDisable,setbuttonDisable]=useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)

        const res = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await res.json()

        setProduct(data)
        setSelectedImage(data.thumbnail)

      
       
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
    
  }, [id])
  
  
 
   
  if (loading) {
    return (
      <div className="min-h-screen bg-[#FFFBE9] flex items-center justify-center">
        <h1 className="text-[#AD8B73] text-xl tracking-widest">
          Loading Product...
        </h1>
      </div>
    )
  }
  
  
  if (!product || !product.id) {
    return (
      <div className="min-h-screen bg-[#FFFBE9] flex flex-col items-center justify-center gap-5">
        <h1 className="text-3xl text-[#3D3028]">Product not found</h1>
        <Link to="/products" className="text-[#AD8B73] underline">
          Back to Products
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-[#FFFBE9] min-h-screen text-[#3D3028]">

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <div className="text-sm text-[#806B59] flex gap-2 flex-wrap">
          <Link to="/" className="hover:text-[#AD8B73]">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-[#AD8B73]">Products</Link>
          <span>/</span>
          <span className="text-[#AD8B73]">{product.title}</span>
        </div>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Product Images */}
          <div>

            {/* Main Image */}
            <div className="bg-[#E3CAA5]/20 overflow-hidden">
              <img
                src={selectedImage}
                alt={product.title}
                className="w-full h-[400px] md:h-[550px] object-contain p-8"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-4 mt-5 overflow-x-auto">
              {product.images?.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`min-w-24 h-24 bg-[#E3CAA5]/20 border ${
                    selectedImage === image
                      ? 'border-[#AD8B73]'
                      : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    className="w-full h-full object-contain p-2"
                  />
                </button>
              ))}
            </div>

          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">

            <p className="text-[#AD8B73] uppercase tracking-[3px] text-sm mb-4">
              {product.category}
            </p>

            <h1 className="text-3xl md:text-5xl font-light leading-tight">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mt-5">
              <span className="text-[#AD8B73]">
                ★★★★★
              </span>

              <span className="text-sm text-[#806B59]">
                {product.rating} / 5
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mt-7 flex-wrap">

              <h2 className="text-3xl text-[#AD8B73] font-medium">
                ${product.price}
              </h2>

              <span className="text-sm text-[#806B59] line-through">
                ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
              </span>

              <span className="bg-[#AD8B73] text-white px-3 py-1 text-xs">
                {product.discountPercentage?.toFixed(0)}% OFF
              </span>

            </div>

            {/* Description */}
            <p className="text-[#806B59] leading-8 mt-8">
              {product.description}
            </p>

            {/* Stock */}
            <div className="mt-7">
              <p className={`text-sm ${
                product.stock > 0 ? 'text-green-700' : 'text-red-600'
              }`}>
                {product.stock > 0
                  ? `${product.stock} items available in stock`
                  : 'Out of Stock'}
              </p>
            </div>

            {/* Quantity */}
         

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">

              <button
                disabled={buttonDisable}
                className="flex-1 bg-[#AD8B73] text-[#FFFBE9] py-4 uppercase tracking-[2px] text-sm hover:bg-[#8F705A] transition disabled:opacity-50"
                onClick={()=>{

                  AddToCart(product) 
                  setbuttonDisable(true)
                }
                 

                  
                }
              >
                Add to Cart
              </button>

              <button
                className="flex-1 border border-[#AD8B73] text-[#AD8B73] py-4 uppercase tracking-[2px] text-sm hover:bg-[#AD8B73] hover:text-white transition"
              >
                Remove Cart 
              </button>

            </div>

            {/* Product Details */}
            <div className="mt-10 border-t border-[#CEAB93] pt-6 space-y-4">

              <div className="flex justify-between text-sm">
                <span className="text-[#806B59]">Brand</span>
                <span>{product.brand || 'AUREL Exclusive'}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-[#806B59]">SKU</span>
                <span>{product.sku}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-[#806B59]">Availability</span>
                <span>{product.availabilityStatus}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-[#806B59]">Shipping</span>
                <span>Free Shipping</span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Bottom Message */}
      <section className="border-t border-[#CEAB93] py-16 px-6 text-center">

        <p className="uppercase tracking-[3px] text-[#AD8B73] text-xs mb-4">
          AUREL Collection
        </p>

        <h2 className="text-3xl md:text-4xl font-light">
          Thoughtfully chosen. Made for everyday.
        </h2>

        <Link
          to="/products"
          className="inline-block mt-7 text-[#AD8B73] border-b border-[#AD8B73] pb-2 text-sm tracking-widest uppercase"
        >
          Continue Shopping
        </Link>

      </section>

    </div>
  )
}

export default ProductDetail