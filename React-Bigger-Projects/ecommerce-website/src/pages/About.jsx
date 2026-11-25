import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="bg-[#FFFBE9] text-[#3D3028]">

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-24 md:py-36">
        <div className="max-w-7xl mx-auto text-center">

          <p className="text-[#AD8B73] uppercase tracking-[0.35em] text-xs mb-6">
            The Story Behind AUREL
          </p>

          <h1 className="text-4xl md:text-7xl font-light leading-tight max-w-4xl mx-auto">
            A little more beauty in
            <span className="italic text-[#AD8B73]"> everyday life.</span>
          </h1>

          <p className="max-w-2xl mx-auto mt-8 text-[#806B59] leading-8 text-sm md:text-base">
            We believe the things we surround ourselves with should bring joy,
            inspire simplicity and make everyday moments feel a little more special.
          </p>

          <Link
            to="/products"
            className="inline-block mt-10 bg-[#AD8B73] text-[#FFFBE9] px-8 py-4 text-xs tracking-widest uppercase hover:bg-[#8F705A] transition"
          >
            Explore Our Collection
          </Link>

        </div>
      </section>

      {/* Our Story */}
      <section className="grid md:grid-cols-2 min-h-[600px]">

        <div className="h-[400px] md:h-auto overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
            alt="Warm minimal interior"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center px-8 py-20 md:px-20 bg-[#E3CAA5]/30">

          <p className="text-[#AD8B73] uppercase tracking-[0.3em] text-xs mb-5">
            Our Story
          </p>

          <h2 className="text-3xl md:text-5xl font-light leading-tight">
            Inspired by the beauty of simplicity.
          </h2>

          <p className="mt-8 text-[#806B59] leading-8">
            AUREL was created with a simple idea — everyday essentials deserve
            thoughtful design. We believe beauty doesn't have to be complicated.
            It lives in the small details, the textures we touch and the
            experiences we create every day.
          </p>

          <p className="mt-5 text-[#806B59] leading-8">
            Our goal is to bring together timeless aesthetics and everyday
            functionality to create pieces that feel natural, beautiful and
            meaningful.
          </p>

        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-16">

            <p className="text-[#AD8B73] uppercase tracking-[0.3em] text-xs mb-5">
              Our Philosophy
            </p>

            <h2 className="text-3xl md:text-5xl font-light">
              Less, but better.
            </h2>

            <p className="mt-6 text-[#806B59] leading-7">
              We focus on what truly matters — quality, thoughtful design
              and the feeling of owning something you genuinely love.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Card 1 */}
            <div className="bg-[#E3CAA5]/30 p-10 text-center">

              <span className="text-[#AD8B73] text-3xl font-light">
                01
              </span>

              <h3 className="text-xl mt-6 mb-4">
                Thoughtful Design
              </h3>

              <p className="text-sm text-[#806B59] leading-7">
                Every detail matters. We appreciate designs that feel
                effortless, purposeful and timeless.
              </p>

            </div>

            {/* Card 2 */}
            <div className="bg-[#E3CAA5]/30 p-10 text-center">

              <span className="text-[#AD8B73] text-3xl font-light">
                02
              </span>

              <h3 className="text-xl mt-6 mb-4">
                Quality First
              </h3>

              <p className="text-sm text-[#806B59] leading-7">
                We believe quality is found in the materials, the details
                and the experience a product delivers.
              </p>

            </div>

            {/* Card 3 */}
            <div className="bg-[#E3CAA5]/30 p-10 text-center">

              <span className="text-[#AD8B73] text-3xl font-light">
                03
              </span>

              <h3 className="text-xl mt-6 mb-4">
                Everyday Beauty
              </h3>

              <p className="text-sm text-[#806B59] leading-7">
                Making ordinary moments special through beautiful,
                practical and meaningful essentials.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* Brand Image Section */}
      <section className="relative h-[450px] md:h-[600px] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=80"
          alt="AUREL lifestyle aesthetic"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30 flex items-center justify-center px-6">

          <div className="text-center text-white max-w-3xl">

            <p className="uppercase tracking-[0.4em] text-xs mb-6">
              AUREL — Made for everyday living
            </p>

            <h2 className="text-3xl md:text-6xl font-light leading-tight">
              Find beauty in the little things.
            </h2>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">

        <p className="text-[#AD8B73] uppercase tracking-[0.3em] text-xs mb-5">
          Discover AUREL
        </p>

        <h2 className="text-3xl md:text-5xl font-light">
          Your everyday, elevated.
        </h2>

        <p className="text-[#806B59] max-w-xl mx-auto mt-6 leading-7">
          Explore our collection and discover pieces designed to bring
          simplicity, warmth and beauty into your everyday life.
        </p>

        <Link
          to="/products"
          className="inline-block mt-10 bg-[#AD8B73] text-[#FFFBE9] px-10 py-4 text-xs uppercase tracking-widest hover:bg-[#8F705A] transition"
        >
          Shop Now
        </Link>

      </section>

    </main>
  );
};

export default About;