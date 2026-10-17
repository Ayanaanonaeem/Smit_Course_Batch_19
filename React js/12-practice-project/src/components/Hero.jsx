import landingData from "../constants/landingData";
function Hero() {
    const{hero}=landingData
    const {buttons,heroImage,stats}=hero
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-32 -top-20 h-96 w-96 rounded-full bg-violet-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 top-72 h-72 w-72 rounded-full bg-purple-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20 lg:px-10 lg:pb-24 lg:pt-24">

        {/* Hero Content */}
        <div className="mx-auto max-w-4xl text-center">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-violet-600" />

            <span className="text-xs font-semibold tracking-wide text-violet-700 sm:text-sm">
              {hero.badge}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl sm:leading-tight lg:text-7xl lg:leading-[1.1]">
            Make Space for Your{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent">
              Best Work
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
           {hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          {
            buttons.map((val,idx)=>(
             <a
             key={idx}
              href={val.href}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition duration-300 hover:-translate-y-1 hover:bg-violet-700 hover:shadow-xl hover:shadow-violet-600/30"
            >
              {val.label}
              <span aria-hidden="true">→</span>
            </a>
            ))
          }
          

        
          </div>

          {/* Supporting Text */}
          <p className="mt-4 text-xs text-slate-500 sm:text-sm">
            Free to get started · No credit card required
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mx-auto mt-14 max-w-5xl sm:mt-16 lg:mt-20">

          {/* Decorative Glow */}
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-r from-violet-200 via-purple-100 to-fuchsia-200 opacity-70 blur-xl sm:-inset-5" />

          <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-2 shadow-2xl shadow-violet-900/10 sm:rounded-3xl sm:p-3">

            <img
              src={hero.heroImage.url}
              alt={hero.heroImage.alt}
              className="h-64 w-full rounded-xl object-cover sm:h-80 lg:h-[460px]"
            />

            {/* Floating Info Card */}
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur-lg sm:bottom-8 sm:left-8 sm:right-auto sm:w-72 sm:p-5">

              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    Team productivity
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-slate-900">
                    Great progress!
                  </h3>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-xl">
                  🚀
                </div>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-violet-100">
                <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500" />
              </div>

              <p className="mt-2 text-xs font-medium text-violet-700">
                Project progress · 75%
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 border-t border-slate-200 pt-8 sm:grid-cols-3 sm:gap-4 lg:mt-16">

        { stats.map((val,idx)=>(
            <div className="text-center" key={idx}>
            <p className="text-3xl font-extrabold tracking-tight text-slate-900">
              {val.value}<span className="text-violet-600"></span>
            </p>
            <p className="mt-2 text-sm text-slate-500">
              {val.label}
            </p>
          </div>
        ))
        }

       
        </div>

      </div>
    </section>
  );
}

export default Hero;
