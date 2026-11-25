import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#FFFBE9] text-[#4A382B]">

      {/* Newsletter Section */}
      <div className="bg-[#E3CAA5] px-6 py-14">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Stay in the loop.
            </h2>

            <p className="text-[#6D5543] mt-2">
              Get updates on new arrivals and exclusive offers.
            </p>
          </div>

          <form className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-[#FFFBE9] px-5 py-3 rounded-full outline-none border border-[#CEAB93] w-full md:w-80 focus:border-[#AD8B73]"
            />

            <button
              type="submit"
              className="bg-[#AD8B73] text-white px-6 py-3 rounded-full hover:bg-[#8F705A] transition whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Section */}
          <div>
            <Link to="/" className="inline-block">
              <h2 className="text-2xl font-bold tracking-[4px]">
                AUREL
              </h2>

              <p className="text-xs tracking-[3px] text-[#AD8B73] mt-1">
                EVERYDAY ESSENTIALS
              </p>
            </Link>

            <p className="text-[#806957] text-sm leading-7 mt-5 max-w-xs">
              Thoughtfully curated essentials designed to bring comfort,
              simplicity and timeless style to your everyday life.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-[#CEAB93] flex items-center justify-center hover:bg-[#AD8B73] hover:text-white transition"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-[#CEAB93] flex items-center justify-center hover:bg-[#AD8B73] hover:text-white transition"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.8-.1-1.7-.2-2.6-.2-2.6 0-4.3 1.6-4.3 4.5V10H7.2v3h2.7v8h3.6Z" />
                </svg>
              </a>

              {/* Pinterest */}
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="w-10 h-10 rounded-full border border-[#CEAB93] flex items-center justify-center hover:bg-[#AD8B73] hover:text-white transition"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.1-2 .1-2.9l1.3-5.5s-.3-.7-.3-1.7c0-1.6.9-2.8 2.1-2.8 1 0 1.5.8 1.5 1.7 0 1-.6 2.5-.9 3.9-.3 1.2.6 2.2 1.8 2.2 2.2 0 3.9-2.4 3.9-5.8 0-3-2.1-5.1-5.2-5.1-3.6 0-5.7 2.7-5.7 5.5 0 1.1.4 2.3 1 3 .1.2.2.4.1.6l-.4 1.5c-.1.5-.4.6-.8.3-1.5-1.1-2.4-3-2.4-5.2 0-4.2 3.1-8 8.4-8 4.4 0 7.8 3.1 7.8 7.3 0 4.4-2.8 7.9-6.6 7.9-1.3 0-2.6-.7-3-1.6l-.8 3.1c-.3 1.1-1.1 2.5-1.6 3.4A10 10 0 1 0 12 2Z" />
                </svg>
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-[#806957]">
              <li>
                <Link to="/" className="hover:text-[#AD8B73] transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-[#AD8B73] transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/products" className="hover:text-[#AD8B73] transition">
                  Our Products
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-[#AD8B73] transition">
                  Contact Us
                </Link>
              </li>

              <li>
                <Link to="/cart" className="hover:text-[#AD8B73] transition">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-semibold text-lg mb-5">
              Customer Care
            </h3>

            <ul className="space-y-3 text-sm text-[#806957]">
              <li>
                <Link to="/shipping" className="hover:text-[#AD8B73] transition">
                  Shipping & Delivery
                </Link>
              </li>

              <li>
                <Link to="/returns" className="hover:text-[#AD8B73] transition">
                  Returns & Exchanges
                </Link>
              </li>

              <li>
                <Link to="/faq" className="hover:text-[#AD8B73] transition">
                  FAQs
                </Link>
              </li>

              <li>
                <Link to="/privacy" className="hover:text-[#AD8B73] transition">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link to="/terms" className="hover:text-[#AD8B73] transition">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-5">
              Get in Touch
            </h3>

            <ul className="space-y-4 text-sm text-[#806957]">

              <li className="flex gap-3 items-start">
                <span className="text-[#AD8B73]">✉</span>
                <a
                  href="mailto:hello@aurel.com"
                  className="hover:text-[#AD8B73] transition"
                >
                  hello@aurel.com
                </a>
              </li>

              <li className="flex gap-3 items-start">
                <span className="text-[#AD8B73]">☎</span>
                <a
                  href="tel:+923001234567"
                  className="hover:text-[#AD8B73] transition"
                >
                  +92 300 1234567
                </a>
              </li>

              <li className="flex gap-3 items-start">
                <span className="text-[#AD8B73]">⌖</span>
                <span>Karachi, Pakistan</span>
              </li>

              <li className="flex gap-3 items-start">
                <span className="text-[#AD8B73]">◷</span>
                <span>Mon – Sat · 10 AM – 8 PM</span>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#CEAB93] mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-xs text-[#806957] text-center">
            © 2026 AUREL. All rights reserved.
          </p>

          <p className="text-xs text-[#806957]">
            Crafted with care for everyday living.
          </p>

          <div className="flex gap-4 text-xs text-[#806957]">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Cash on Delivery</span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;