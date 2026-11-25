import React from "react";

const Contactus = () => {
  return (
    <main className="bg-[#FFFBE9] text-[#3D3028]">

      {/* Hero Section */}
      <section className="px-6 py-24 md:py-32 text-center">
        <p className="text-[#AD8B73] uppercase tracking-[0.35em] text-xs mb-6">
          Get In Touch
        </p>

        <h1 className="text-4xl md:text-7xl font-light leading-tight">
          We'd love to <span className="italic text-[#AD8B73]">hear from you.</span>
        </h1>

        <p className="max-w-xl mx-auto mt-7 text-[#806B59] leading-8">
          Whether you have a question about our products or need help with
          an order, we're always here to help.
        </p>
      </section>

      {/* Contact Information */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Email */}
          <div className="bg-[#E3CAA5]/30 p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-[#AD8B73]/15 flex items-center justify-center mx-auto text-[#AD8B73] text-2xl">
              ✉
            </div>

            <h3 className="text-xl mt-5 mb-3">Email Us</h3>

            <p className="text-sm text-[#806B59] mb-4">
              Have a question? Drop us an email.
            </p>

            <a
              href="mailto:hello@aurel.com"
              className="text-[#AD8B73] hover:text-[#8F705A] transition"
            >
              hello@aurel.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-[#E3CAA5]/30 p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-[#AD8B73]/15 flex items-center justify-center mx-auto text-[#AD8B73] text-2xl">
              ☎
            </div>

            <h3 className="text-xl mt-5 mb-3">Call Us</h3>

            <p className="text-sm text-[#806B59] mb-4">
              We're happy to assist you.
            </p>

            <a
              href="tel:+1234567890"
              className="text-[#AD8B73] hover:text-[#8F705A] transition"
            >
              +1 (234) 567-890
            </a>
          </div>

          {/* Hours */}
          <div className="bg-[#E3CAA5]/30 p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-[#AD8B73]/15 flex items-center justify-center mx-auto text-[#AD8B73] text-2xl">
              ◷
            </div>

            <h3 className="text-xl mt-5 mb-3">Customer Support</h3>

            <p className="text-sm text-[#806B59] mb-4">
              Monday – Saturday
            </p>

            <p className="text-[#AD8B73]">
              9:00 AM – 6:00 PM
            </p>
          </div>

        </div>
      </section>

      {/* Contact Form */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 bg-[#E3CAA5]/20">

          {/* Left Side */}
          <div className="p-8 md:p-16 flex flex-col justify-center">
            <p className="text-[#AD8B73] uppercase tracking-[0.3em] text-xs mb-5">
              Contact Form
            </p>

            <h2 className="text-3xl md:text-5xl font-light leading-tight">
              Let's start a conversation.
            </h2>

            <p className="text-[#806B59] mt-6 leading-8">
              Fill out the form and our team will get back to you as soon
              as possible. We value every message we receive.
            </p>

            <div className="mt-10">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80"
                alt="AUREL lifestyle store"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-[#FFFBE9] p-8 md:p-16">
            <form className="space-y-6">

              <div>
                <label className="block text-sm mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full bg-transparent border border-[#CEAB93] px-4 py-4 outline-none focus:border-[#AD8B73] transition"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-transparent border border-[#CEAB93] px-4 py-4 outline-none focus:border-[#AD8B73] transition"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="What is this regarding?"
                  className="w-full bg-transparent border border-[#CEAB93] px-4 py-4 outline-none focus:border-[#AD8B73] transition"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Your Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full bg-transparent border border-[#CEAB93] px-4 py-4 outline-none focus:border-[#AD8B73] transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#AD8B73] text-[#FFFBE9] py-4 uppercase tracking-[0.2em] text-xs hover:bg-[#8F705A] transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto px-6 pb-24">

        <div className="text-center mb-14">
          <p className="text-[#AD8B73] uppercase tracking-[0.3em] text-xs mb-5">
            FAQs
          </p>

          <h2 className="text-3xl md:text-5xl font-light">
            Frequently asked questions.
          </h2>
        </div>

        <div className="space-y-4">

          <div className="border-b border-[#CEAB93] py-6">
            <h3 className="text-lg mb-3">
              How can I track my order?
            </h3>

            <p className="text-sm text-[#806B59] leading-7">
              Once your order is shipped, you'll receive a tracking link
              through email to follow your delivery.
            </p>
          </div>

          <div className="border-b border-[#CEAB93] py-6">
            <h3 className="text-lg mb-3">
              What is your return policy?
            </h3>

            <p className="text-sm text-[#806B59] leading-7">
              If you're not satisfied with your purchase, you can contact
              our support team for assistance with returns and exchanges.
            </p>
          </div>

          <div className="border-b border-[#CEAB93] py-6">
            <h3 className="text-lg mb-3">
              How long does delivery take?
            </h3>

            <p className="text-sm text-[#806B59] leading-7">
              Delivery times vary depending on your location. Our team
              will provide an estimated delivery time with your order.
            </p>
          </div>

          <div className="border-b border-[#CEAB93] py-6">
            <h3 className="text-lg mb-3">
              How can I contact customer support?
            </h3>

            <p className="text-sm text-[#806B59] leading-7">
              You can reach us through our email or contact form.
              Our team will be happy to assist you.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
};

export default Contactus;