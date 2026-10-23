
function Home() {
  const features = [
    {
      number: "01",
      title: "Modern Design",
      description:
        "Clean and modern interfaces designed to deliver a great user experience.",
    },
    {
      number: "02",
      title: "Responsive Layout",
      description:
        "Web experiences that look beautiful on mobile, tablet and desktop.",
    },
    {
      number: "03",
      title: "Quality Code",
      description:
        "Maintainable, scalable and efficient solutions built with care.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-24 md:py-32">
        <div className="absolute left-1/2 top-10 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Welcome to DevSpace
          </span>

          <h1 className="mt-8 text-4xl font-extrabold leading-tight sm:text-5xl md:text-7xl">
            Build Something
            <br />
            <span className="text-cyan-400">
              Extraordinary.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
            We turn creative ideas into modern digital experiences
            through thoughtful design, clean code and innovative
            technology.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/about"
              className="rounded-lg bg-cyan-500 px-7 py-3 font-semibold text-gray-950 transition hover:bg-cyan-400"
            >
              Explore More →
            </a>

            <a
              href="/contact"
              className="rounded-lg border border-gray-700 px-7 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-gray-800 px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-cyan-400">
              What We Offer
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Built for Better Experiences
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-400">
              Everything you need to create a reliable and
              memorable digital experience.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.number}
                className="group rounded-2xl border border-gray-800 bg-gray-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50"
              >
                <span className="text-sm font-bold text-cyan-400">
                  {feature.number}
                </span>

                <h3 className="mt-5 text-xl font-bold transition group-hover:text-cyan-400">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {feature.description}
                </p>

                <div className="mt-6 h-1 w-12 rounded-full bg-cyan-400 transition-all group-hover:w-20" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-gray-900 to-gray-950 px-6 py-14 text-center md:py-20">
          <h2 className="text-3xl font-bold md:text-4xl">
            Have an Idea in Mind?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-400">
            Let's connect and explore how we can turn your next
            idea into something meaningful.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-cyan-500 px-8 py-3 font-bold text-gray-950 transition hover:bg-cyan-400"
          >
            Let's Talk
          </a>
        </div>
      </section>

    </main>
  );
}

export default Home;
