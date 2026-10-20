
import { useEffect, useState } from "react";
import { getAllProducts } from "./utils/Products";
import Card from "./components/Card";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch {
      return [];
    }
  });
  const [showCartItem, setShowCartItem] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.some((item) => item.id === product.id);

      if (exists) return prev;

      return [...prev, product];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const displayedProducts = showCartItem ? cartItems : products;

  return (
    <div className="min-h-screen bg-[#f7f8fc] text-slate-900">
      {/* Navbar */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <button
            onClick={() => setShowCartItem(false)}
            className="text-2xl font-black tracking-tight"
          >
            shop<span className="text-violet-600">ora.</span>
          </button>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-500 md:flex">
            <button onClick={() => setShowCartItem(false)}
              className={!showCartItem ? "text-violet-600" : "hover:text-violet-600"}>
              Discover
            </button>
            <a href="#products" className="hover:text-violet-600">
              Products
            </a>
          </div>

          <button
            onClick={() => setShowCartItem((prev) => !prev)}
            className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
              showCartItem
                ? "bg-violet-600 text-white"
                : "bg-slate-100 hover:bg-violet-100"
            }`}
          >
            <span>My Cart</span>
            <span className={`flex h-6 min-w-6 items-center justify-center rounded-full px-1.5 text-xs ${
              showCartItem ? "bg-white text-violet-700" : "bg-violet-600 text-white"
            }`}>
              {cartItems.length}
            </span>
          </button>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-5 pb-16 pt-8 lg:px-8">
        {/* Hero */}
        {!showCartItem && (
          <section className="relative mb-12 overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-12 text-white sm:px-12 sm:py-16 lg:py-20">
            <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-violet-600/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 right-1/4 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />

            <div className="relative max-w-2xl">
              <span className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-widest text-violet-200">
                YOUR EVERYDAY FINDS
              </span>

              <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl">
                Find your next
                <span className="block text-violet-400">favorite thing.</span>
              </h1>

              <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300 sm:text-base">
                Good products. Great choices. Discover something you’ll love,
                all in one place.
              </p>

              <a
                href="#products"
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-violet-100"
              >
                Explore collection <span aria-hidden="true">↗</span>
              </a>
            </div>
          </section>
        )}

        {/* Section heading */}
        <section id="products">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-violet-600">
                {showCartItem ? "YOUR SELECTION" : "CURATED FOR YOU"}
              </p>

              <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
                {showCartItem ? "Your shopping cart" : "Explore products"}
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                {showCartItem
                  ? `${cartItems.length} item${cartItems.length === 1 ? "" : "s"} in your cart`
                  : "Discover something worth adding to your collection."}
              </p>
            </div>

            <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-500">
              {showCartItem ? "Your cart" : `${products.length} products`}
            </span>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="animate-pulse rounded-3xl bg-white p-3">
                  <div className="h-56 rounded-2xl bg-slate-200" />
                  <div className="mt-5 h-4 w-2/3 rounded bg-slate-200" />
                  <div className="mt-3 h-4 w-1/3 rounded bg-slate-200" />
                  <div className="mt-5 h-10 rounded-xl bg-slate-200" />
                </div>
              ))}
            </div>
          ) : displayedProducts.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center">
              <div className="text-5xl">🛍️</div>
              <h3 className="mt-5 text-xl font-bold">
                {showCartItem ? "Your cart is empty" : "No products found"}
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                {showCartItem
                  ? "Explore our collection and add something you love."
                  : "Please try again in a moment."}
              </p>
              {showCartItem && (
                <button
                  onClick={() => setShowCartItem(false)}
                  className="mt-6 rounded-xl bg-violet-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-violet-700"
                >
                  Explore products
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {displayedProducts.map((product) => (
                <Card
                  key={product.id}
                  data={product}
                  itemAdded={cartItems.some((item) => item.id === product.id)}
                  showCartItem={showCartItem}
                  handleAddToCart={() => addToCart(product)}
                  handleRemoveCart={() => removeFromCart(product.id)}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p className="text-lg font-black text-slate-900">
            shop<span className="text-violet-600">ora.</span>
          </p>
          <p>Discover more. Shop better.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
