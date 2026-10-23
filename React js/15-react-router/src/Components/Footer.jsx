
function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900 text-white">

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">

        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold">
            <span className="text-cyan-400">Dev</span>Space
          </h2>

          <p className="mt-4 max-w-sm leading-7 text-gray-400">
            Building modern digital experiences with creativity,
            clean code and innovative ideas.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>
              <a
                href="/"
                className="transition hover:text-cyan-400"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/about"
                className="transition hover:text-cyan-400"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="/contact"
                className="transition hover:text-cyan-400"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">
            Get in Touch
          </h3>

          <p className="text-gray-400">
            Email: hello@example.com
          </p>

          <p className="mt-3 text-gray-400">
            Location: Karachi, Pakistan
          </p>

          <div className="mt-5 flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-gray-700 px-4 py-2 text-sm transition hover:border-cyan-400 hover:text-cyan-400"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-gray-700 px-4 py-2 text-sm transition hover:border-cyan-400 hover:text-cyan-400"
            >
              LinkedIn
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 px-6 py-5">
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-cyan-400">
            DevSpace
          </span>
          . All rights reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;
