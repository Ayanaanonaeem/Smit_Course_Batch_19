
function Footer() {
  return (
    <footer className="bg-slate-950 px-5 pt-16 text-white sm:px-8">

      <div className="mx-auto max-w-7xl">

        {/* Top Footer */}
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <a href="#home" className="inline-flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-xl font-bold shadow-lg shadow-violet-500/30">
                N
              </div>

              <span className="text-2xl font-bold tracking-tight">
                Nova<span className="text-violet-400">Flow</span>
              </span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
              Make teamwork feel effortless. Plan smarter,
              collaborate better, and bring your best ideas to life.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.linkedin.com/"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-sm font-bold text-slate-300 transition hover:border-violet-500 hover:bg-violet-600 hover:text-white"
              >
                in
              </a>

              <a
                href="https://www.instagram.com/"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-sm font-bold text-slate-300 transition hover:border-violet-500 hover:bg-violet-600 hover:text-white"
              >
                ig
              </a>

              <a
                href="https://github.com/"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-sm font-bold text-slate-300 transition hover:border-violet-500 hover:bg-violet-600 hover:text-white"
              >
                gh
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-5 font-semibold text-white">
              Product
            </h3>

            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <a href="#features" className="transition hover:text-violet-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="transition hover:text-violet-400">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#testimonials" className="transition hover:text-violet-400">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#get-started" className="transition hover:text-violet-400">
                  Get Started
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <a href="#about" className="transition hover:text-violet-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#careers" className="transition hover:text-violet-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-violet-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="#blog" className="transition hover:text-violet-400">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-3 font-semibold text-white">
              Stay in the loop ✨
            </h3>

            <p className="mb-5 text-sm leading-6 text-slate-400">
              Get product updates and helpful tips straight
              to your inbox.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
              />

              <button
                type="submit"
                className="rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-900/30 transition hover:bg-violet-500 active:scale-[0.98]"
              >
                Subscribe ✨
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 text-center sm:flex-row sm:text-left">

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} NovaFlow. Made with{" "}
            <span className="text-pink-400">♥</span> for better teamwork.
          </p>

          <div className="flex flex-wrap justify-center gap-5 text-sm text-slate-500">
            <a href="#privacy" className="transition hover:text-white">
              Privacy Policy
            </a>
            <a href="#terms" className="transition hover:text-white">
              Terms of Service
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
