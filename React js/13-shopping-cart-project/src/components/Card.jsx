
import React from "react";

const Card = ({
  data,
  handleAddToCart,
  itemAdded,
  showCartItem,
  handleRemoveCart,
}) => {
  const { category, description, images, title, price } = data;

  const image =
    (Array.isArray(images) && images.length > 0 && images[0]) ||
    "https://placehold.co/600x600/f1f5f9/64748b?text=Product";

  const categoryName =
    typeof category === "object" ? category?.name : category;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/60">
      {/* Product image */}
      <div className="relative overflow-hidden rounded-2xl bg-slate-100">
        <img
          src={image}
          alt={title || "Product"}
          loading="lazy"
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 max-w-[75%] truncate rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-700 shadow-sm backdrop-blur">
          {categoryName || "Collection"}
        </span>

        {itemAdded && !showCartItem && (
          <span className="absolute right-3 top-3 rounded-full bg-emerald-500 px-3 py-1.5 text-[10px] font-bold text-white shadow-sm">
            IN CART ✓
          </span>
        )}
      </div>

      {/* Product details */}
      <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
        <h3 className="line-clamp-1 text-base font-bold text-slate-900 transition group-hover:text-violet-700">
          {title || "Untitled product"}
        </h3>

        <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-slate-500">
          {description || "Discover the details of this product."}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
              Price
            </p>
            <p className="mt-1 text-xl font-black tracking-tight text-slate-900">
              {price != null ? `$${Number(price).toFixed(2)}` : "N/A"}
            </p>
          </div>

          {showCartItem ? (
            <button
              onClick={handleRemoveCart}
              className="rounded-xl border border-rose-200 px-4 py-3 text-xs font-bold text-rose-600 transition hover:border-rose-600 hover:bg-rose-50"
            >
              Remove
            </button>
          ) : (
            <button
              onClick={handleAddToCart}
              disabled={itemAdded}
              className={`rounded-xl px-4 py-3 text-xs font-bold transition ${
                itemAdded
                  ? "cursor-not-allowed bg-emerald-50 text-emerald-700"
                  : "bg-slate-950 text-white hover:bg-violet-600"
              }`}
            >
              {itemAdded ? "Added ✓" : "Add to cart +"}
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default Card;
