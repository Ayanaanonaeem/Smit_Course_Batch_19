
function Features({
    features
}) {
    const {items}=features
    
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-slate-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-bold tracking-widest text-violet-700">
            {features.sectionBadge}
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
              Work Smarter
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
           {features.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {
            items.map((val,idx)=>(
                 <article key={idx} className="group overflow-hidden rounded-3xl border border-slate-200/80 bg-white transition duration-300 hover:-translate-y-2 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-900/5">

            <div className="relative overflow-hidden">
              <img
                src={val.image}
                alt="Planning tasks and reviewing project documents"
                className="h-52 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-56"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
            </div>

            <div className="p-6 sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-2xl transition group-hover:bg-violet-600">
                <span className="transition group-hover:scale-110">{val.icon}</span>
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {val.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
               {val.description}
              </p>

              <a
                href="#signup"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 transition hover:gap-3 hover:text-violet-800"
              >
                Learn more <span>→</span>
              </a>
            </div>
          </article>
            ))
        }
       


        </div>
      </div>
    </section>
  );
}

export default Features;
