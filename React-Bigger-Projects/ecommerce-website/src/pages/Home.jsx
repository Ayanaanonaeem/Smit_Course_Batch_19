import { Link } from "react-router-dom";
import useData from "../Hooks/useData";
const categories = [
  {
    name: "Home & Living",
    description: "Comfort for your everyday spaces",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85",
    path: "/products",
  },
  {
    name: "Accessories",
    description: "Little details that make a difference",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85",
    path: "/products",
  },
  {
    name: "Everyday Essentials",
    description: "Made for your daily rituals",
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=900&q=85",
    path: "/products",
  },
];

const products = [
  {
    id: 1,
    name: "Minimal Ceramic Vase",
    category: "Home Decor",
    price: 2490,
    oldPrice: 3200,
    badge: "BESTSELLER",
    image:
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 2,
    name: "Everyday Tote Bag",
    category: "Accessories",
    price: 1850,
    oldPrice: null,
    badge: "NEW",
    image:
      "https://images.unsplash.com/photo-1578237493287-8d4d2b03591a?q=80&w=626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 3,
    name: "Natural Scented Candle",
    category: "Lifestyle",
    price: 1650,
    oldPrice: 2100,
    badge: "POPULAR",
    image:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 4,
    name: "Soft Neutral Cushion",
    category: "Home Decor",
    price: 2200,
    oldPrice: null,
    badge: "",
    image:
      "https://plus.unsplash.com/premium_photo-1676454000663-643ab3995b55?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
];

const Home = () => {
  return (
    <div className="bg-[#FFFBE9] text-[#49382C]">

      {/* Announcement Bar */}
      <div className="bg-[#AD8B73] text-[#FFFBE9] text-center py-2 px-4">
        <p className="text-[11px] sm:text-xs tracking-[1.5px]">
          COMPLIMENTARY SHIPPING ON ORDERS ABOVE RS. 5,000
        </p>
      </div>

      {/* Hero Section */}
      <section className="px-5 sm:px-8 lg:px-12 py-8 md:py-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">

          {/* Hero Content */}
          <div className="py-8 md:py-12 lg:py-16">
            <span className="text-[#AD8B73] text-xs tracking-[3px] uppercase">
              A little more intentional
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium leading-[1.12] mt-5">
              Make room
              <br />
              for the <span className="italic text-[#AD8B73]">beautiful</span>
              <br />
              everyday.
            </h1>

            <p className="text-[#806957] leading-7 max-w-md mt-6 text-sm sm:text-base">
              Thoughtfully chosen pieces that bring warmth, simplicity
              and a little joy into your everyday life.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/products"
                className="bg-[#AD8B73] text-white px-8 py-3.5 rounded-full text-sm hover:bg-[#8F705A] transition duration-300"
              >
                Shop Collection →
              </Link>

              <Link
                to="/about"
                className="border border-[#AD8B73] px-8 py-3.5 rounded-full text-sm hover:bg-[#E3CAA5] transition duration-300"
              >
                Our Story
              </Link>
            </div>

            {/* Mini Trust */}
            <div className="flex items-center gap-4 mt-10">
              <div className="flex -space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                  className="w-9 h-9 rounded-full object-cover border-2 border-[#FFFBE9]"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                  className="w-9 h-9 rounded-full object-cover border-2 border-[#FFFBE9]"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&q=80"
                  className="w-9 h-9 rounded-full object-cover border-2 border-[#FFFBE9]"
                  alt=""
                />
              </div>

              <div>
                <p className="text-sm font-medium">Made for everyday living</p>
                <p className="text-xs text-[#806957] mt-1">
                  Thoughtful picks. Timeless feel.
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="h-[400px] sm:h-[500px] lg:h-[620px] overflow-hidden rounded-[180px_180px_12px_12px]">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=90"
                alt="Warm minimal lifestyle interior"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 bg-[#FFFBE9]/95 backdrop-blur-sm p-4 sm:p-5 rounded-xl max-w-[230px] shadow-lg">
              <p className="text-[10px] tracking-[2px] text-[#AD8B73] uppercase">
                Curated with intention
              </p>

              <p className="text-lg font-medium mt-2">
                Less clutter.
                <br />
                More meaning.
              </p>
            </div>

            <div className="hidden sm:flex absolute top-8 right-8 w-20 h-20 bg-[#E3CAA5] rounded-full items-center justify-center text-center">
              <span className="text-[10px] tracking-widest leading-4">
                MADE
                <br />
                FOR YOU
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 mb-10">
            <div>
              <span className="text-[#AD8B73] text-xs tracking-[3px] uppercase">
                Explore our world
              </span>

              <h2 className="text-3xl sm:text-4xl font-medium mt-3">
                Shop by category
              </h2>
            </div>

            <Link
              to="/products"
              className="text-sm border-b border-[#AD8B73] pb-1 w-fit hover:text-[#AD8B73] transition"
            >
              View all collections →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {categories.map((category, index) => (
              <Link
                to={category.path}
                key={category.name}
                className="group relative overflow-hidden h-[380px] sm:h-[450px]"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 p-6 sm:p-8 text-white">
                  <span className="text-xs tracking-[2px] text-white/80">
                    0{index + 1} / COLLECTION
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-medium mt-3">
                    {category.name}
                  </h3>

                  <p className="text-sm text-white/80 mt-2">
                    {category.description}
                  </p>

                  <span className="inline-block mt-5 text-sm border-b border-white pb-1">
                    Explore collection →
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Best Sellers */}
      <section className="bg-[#F5EEDD] py-20 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">
            <span className="text-[#AD8B73] text-xs tracking-[3px] uppercase">
              Loved by many
            </span>

            <h2 className="text-3xl sm:text-4xl font-medium mt-3">
              Our best sellers
            </h2>

            <p className="text-sm text-[#806957] mt-4">
              The pieces our customers keep coming back for.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product) => (
              <div key={product.id} className="group">

                {/* Product Image */}
                <Link to="/products" className="block relative overflow-hidden bg-[#E3CAA5]">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    />
                  </div>

                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-[#FFFBE9] text-[#AD8B73] text-[9px] sm:text-[10px] tracking-wider px-3 py-1.5">
                      {product.badge}
                    </span>
                  )}

                  <div className="absolute bottom-3 right-3 bg-[#FFFBE9] w-10 h-10 rounded-full flex items-center justify-center text-xl group-hover:bg-[#AD8B73] group-hover:text-white transition">
                    +
                  </div>
                </Link>

                {/* Product Info */}
                <div className="pt-4">
                  <p className="text-[10px] sm:text-xs tracking-wider text-[#AD8B73] uppercase">
                    {product.category}
                  </p>

                  <h3 className="text-sm sm:text-base font-medium mt-1.5">
                    {product.name}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span className="text-sm font-medium">
                      Rs. {product.price.toLocaleString()}
                    </span>

                    {product.oldPrice && (
                      <span className="text-xs text-[#AD8B73] line-through">
                        Rs. {product.oldPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-block border border-[#AD8B73] px-9 py-3.5 rounded-full text-sm hover:bg-[#AD8B73] hover:text-white transition duration-300"
            >
              Explore all products
            </Link>
          </div>

        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Story Image */}
          <div className="h-[400px] sm:h-[550px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85"
              alt="Beautiful warm minimal home"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Story Content */}
          <div className="py-6 md:py-10">
            <span className="text-[#AD8B73] text-xs tracking-[3px] uppercase">
              The AUREL philosophy
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight font-medium mt-5">
              Good things don't
              <br />
              need to be
              <span className="italic text-[#AD8B73]"> complicated.</span>
            </h2>

            <p className="text-[#806957] text-sm sm:text-base leading-8 mt-6">
              We believe the best things in life are often the simplest.
              A comfortable space. A thoughtfully designed piece.
              The small details that make ordinary moments feel special.
            </p>

            <p className="text-[#806957] text-sm sm:text-base leading-8 mt-4">
              AUREL is about bringing those little things together.
              Pieces chosen not just for how they look but for how they
              make everyday living feel.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-3 mt-8 text-sm border-b border-[#AD8B73] pb-2 hover:text-[#AD8B73] transition"
            >
              Discover our story
              <span>→</span>
            </Link>
          </div>

        </div>
      </section>

      {/* Benefits Strip */}
      <section className="bg-[#AD8B73] text-[#FFFBE9] py-12 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="text-center">
            <div className="text-2xl mb-3">✧</div>
            <h3 className="font-medium">Thoughtfully Selected</h3>
            <p className="text-xs text-[#FFFBE9]/80 mt-2">
              Every piece chosen with care
            </p>
          </div>

          <div className="text-center">
            <div className="text-2xl mb-3">◇</div>
            <h3 className="font-medium">Quality First</h3>
            <p className="text-xs text-[#FFFBE9]/80 mt-2">
              Made to feel good and last
            </p>
          </div>

          <div className="text-center">
            <div className="text-2xl mb-3">⌁</div>
            <h3 className="font-medium">Reliable Delivery</h3>
            <p className="text-xs text-[#FFFBE9]/80 mt-2">
              Delivered right to your doorstep
            </p>
          </div>

          <div className="text-center">
            <div className="text-2xl mb-3">♡</div>
            <h3 className="font-medium">Made With Care</h3>
            <p className="text-xs text-[#FFFBE9]/80 mt-2">
              A better shopping experience
            </p>
          </div>

        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-5 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">

          <span className="text-[#AD8B73] text-xs tracking-[3px] uppercase">
            A note from us
          </span>

          <h2 className="text-3xl sm:text-5xl font-medium mt-4">
            A little something
            <span className="italic text-[#AD8B73]"> in your inbox.</span>
          </h2>

          <p className="text-sm text-[#806957] mt-5 max-w-lg mx-auto leading-7">
            Be the first to discover new collections, thoughtful finds
            and exclusive offers. No noise, just good things.
          </p>

          <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3 mt-8">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-[#CEAB93] px-5 py-3.5 rounded-full outline-none focus:border-[#AD8B73] text-sm"
            />

            <button
              type="submit"
              className="bg-[#AD8B73] text-white px-8 py-3.5 rounded-full hover:bg-[#8F705A] transition text-sm"
            >
              Join us →
            </button>
          </form>

          <p className="text-[10px] text-[#AD8B73] mt-4 tracking-wide">
            By subscribing, you agree to receive occasional updates from AUREL.
          </p>

        </div>
      </section>

    </div>
  );
};

export default Home;