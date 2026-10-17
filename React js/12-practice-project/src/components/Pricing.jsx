
function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-slate-50 px-5 py-20 sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
            Simple Pricing
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Plans that grow with
            <span className="text-violet-600"> your team</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-500 sm:text-lg">
            Start for free and upgrade when your team is ready.
            No hidden fees, just simple pricing.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 items-stretch gap-7 md:grid-cols-2 lg:grid-cols-3">

          {/* Starter */}
          <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-bold text-slate-900">
              Starter
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Perfect for individuals getting started.
            </p>

            <div className="mt-7">
              <span className="text-5xl font-bold tracking-tight text-slate-900">
                $0
              </span>
              <span className="ml-2 text-sm text-slate-500">
                / month
              </span>
            </div>

            <a
              href="#get-started"
              className="mt-7 rounded-xl border border-slate-200 px-5 py-3 text-center font-semibold text-slate-700 transition hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
            >
              Get Started Free
            </a>

            <div className="my-7 border-t border-slate-100" />

            <p className="mb-4 text-sm font-semibold text-slate-900">
              What's included:
            </p>

            <ul className="space-y-4 text-sm text-slate-600">
              <li>✓ Up to 3 projects</li>
              <li>✓ Basic task management</li>
              <li>✓ 1 team member</li>
              <li>✓ Community support</li>
            </ul>
          </div>

          {/* Pro */}
          <div className="relative flex flex-col rounded-3xl border-2 border-violet-600 bg-white p-8 shadow-xl shadow-violet-100 transition duration-300 hover:-translate-y-2">

            <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-violet-600 px-5 py-2 text-xs font-bold text-white shadow-lg">
              MOST POPULAR
            </span>

            <h3 className="text-xl font-bold text-slate-900">
              Pro
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              For growing teams that need more flexibility.
            </p>

            <div className="mt-7">
              <span className="text-5xl font-bold tracking-tight text-slate-900">
                $19
              </span>
              <span className="ml-2 text-sm text-slate-500">
                / month
              </span>
            </div>

            <a
              href="#get-started"
              className="mt-7 rounded-xl bg-violet-600 px-5 py-3 text-center font-semibold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-700 hover:shadow-xl"
            >
              Start Pro Trial
            </a>

            <div className="my-7 border-t border-slate-100" />

            <p className="mb-4 text-sm font-semibold text-slate-900">
              Everything in Starter, plus:
            </p>

            <ul className="space-y-4 text-sm text-slate-600">
              <li>✓ Unlimited projects</li>
              <li>✓ Up to 10 team members</li>
              <li>✓ Advanced analytics</li>
              <li>✓ Team collaboration tools</li>
              <li>✓ Priority support</li>
            </ul>
          </div>

          {/* Business */}
          <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-bold text-slate-900">
              Business
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              For organizations managing multiple teams.
            </p>

            <div className="mt-7">
              <span className="text-5xl font-bold tracking-tight text-slate-900">
                $49
              </span>
              <span className="ml-2 text-sm text-slate-500">
                / month
              </span>
            </div>

            <a
              href="#get-started"
              className="mt-7 rounded-xl border border-slate-200 px-5 py-3 text-center font-semibold text-slate-700 transition hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
            >
              Choose Business
            </a>

            <div className="my-7 border-t border-slate-100" />

            <p className="mb-4 text-sm font-semibold text-slate-900">
              Everything in Pro, plus:
            </p>

            <ul className="space-y-4 text-sm text-slate-600">
              <li>✓ Unlimited team members</li>
              <li>✓ Advanced team analytics</li>
              <li>✓ Custom workflows</li>
              <li>✓ Dedicated support</li>
              <li>✓ Centralized team management</li>
            </ul>
          </div>

        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Pricing shown is for demo purposes and can be customized.
        </p>
      </div>
    </section>
  );
}

export default Pricing;
