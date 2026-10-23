
function About() {
  return (
    <section className="min-h-screen bg-gray-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-cyan-400">
            About Us
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">
            We Build <span className="text-cyan-400">Digital</span>
            <br />
            Experiences
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            We create modern, responsive and user-friendly digital
            experiences that help people and businesses grow.
          </p>
        </div>

        {/* About Content */}
        <div className="grid gap-8 md:grid-cols-2">

          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8">
            <h2 className="mb-4 text-2xl font-bold text-cyan-400">
              Who We Are
            </h2>

            <p className="leading-7 text-gray-400">
              We are passionate about technology, creative design
              and building web applications that make everyday
              tasks easier and more enjoyable.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8">
            <h2 className="mb-4 text-2xl font-bold text-cyan-400">
              Our Mission
            </h2>

            <p className="leading-7 text-gray-400">
              Our mission is to deliver quality digital solutions
              through clean code, thoughtful design and continuous
              innovation.
            </p>
          </div>

        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-1 gap-5 text-center sm:grid-cols-3">
          <div className="rounded-xl bg-gray-900 p-6">
            <h3 className="text-3xl font-bold text-cyan-400">100%</h3>
            <p className="mt-2 text-gray-400">Passion</p>
          </div>

          <div className="rounded-xl bg-gray-900 p-6">
            <h3 className="text-3xl font-bold text-cyan-400">24/7</h3>
            <p className="mt-2 text-gray-400">Innovation</p>
          </div>

          <div className="rounded-xl bg-gray-900 p-6">
            <h3 className="text-3xl font-bold text-cyan-400">∞</h3>
            <p className="mt-2 text-gray-400">Possibilities</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
