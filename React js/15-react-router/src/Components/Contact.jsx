
function Contact() {
  return (
    <section className="min-h-screen bg-gray-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Contact Us
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            Let's Start a <span className="text-cyan-400">Conversation</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
            Have a question or an idea? We'd love to hear from you.
            Send us a message and we'll get back to you.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid gap-10 md:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8">
            <h2 className="mb-6 text-2xl font-bold">
              Get in Touch
            </h2>

            <p className="mb-8 leading-7 text-gray-400">
              Whether you want to discuss a project, ask a question,
              or just say hello, feel free to contact us.
            </p>

            <div className="space-y-6">
              <div>
                <p className="mb-1 text-sm text-gray-500">Email</p>
                <p className="text-cyan-400">hello@example.com</p>
              </div>

              <div>
                <p className="mb-1 text-sm text-gray-500">Phone</p>
                <p className="text-gray-200">+92 300 1234567</p>
              </div>

              <div>
                <p className="mb-1 text-sm text-gray-500">Location</p>
                <p className="text-gray-200">Karachi, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message submitted successfully!");
            }}
            className="rounded-2xl border border-gray-800 bg-gray-900 p-8"
          >
            <h2 className="mb-6 text-2xl font-bold">
              Send a Message
            </h2>

            <div className="mb-5">
              <label className="mb-2 block text-sm text-gray-300">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                required
                className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-3 outline-none transition focus:border-cyan-400"
              />
            </div>

            <div className="mb-5">
              <label className="mb-2 block text-sm text-gray-300">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-3 outline-none transition focus:border-cyan-400"
              />
            </div>

            <div className="mb-6">
              <label className="mb-2 block text-sm text-gray-300">
                Your Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                required
                className="w-full resize-none rounded-lg border border-gray-700 bg-gray-950 px-4 py-3 outline-none transition focus:border-cyan-400"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-cyan-500 py-3 font-bold text-gray-950 transition hover:bg-cyan-400"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;
