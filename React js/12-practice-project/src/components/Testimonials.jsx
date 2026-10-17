
function Testimonials({testimonials}) {

    const {items}=testimonials
  return (
    <section  id="testimonials" className="bg-white px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
           {testimonials.sectionBadge}
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
           {testimonials.title}
            <span className="text-violet-600"> everywhere</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-500 sm:text-lg">
           {testimonials.description}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* Testimonial Card 1 */}
        {
            items.map((val,idx)=>(
            <div key={idx} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/50">

            <div className="mb-5 flex gap-1 text-lg text-amber-400">
              ★ ★ ★ ★ ★
            </div>

            <p className="flex-1 text-base leading-7 text-slate-600">
              {val.quote}
            </p>

            <div className="mt-7 flex items-center gap-4 border-t border-slate-100 pt-6">
              <img
                src={val.image}
                alt={val.name}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-violet-100"
              />

              <div>
                <h3 className="font-semibold text-slate-900">
                  {val.name}
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                 {val.role},{val.company}
                </p>
              </div>
            </div>
          </div>

            ))
        }
 

        </div>
      </div>
    </section>
  );
}

export default Testimonials;

