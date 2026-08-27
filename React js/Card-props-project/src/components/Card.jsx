function Card({elem}) {
  console.log(elem.skills);
  let [one,two,three]=elem.skills
  
  
  
  return (
    <div className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-5 shadow-md">

      {/* Company Logo */}
      <img
        src={elem.logo}
        alt="Google"
        className="mb-4 h-12 w-12 rounded-lg object-cover"
      />

      {/* Job Title */}
      <h2 className="text-xl font-bold text-gray-900">
        {elem.title}
      </h2>

      {/* Company */}
      <p className="mt-1 text-sm text-gray-500">
        {elem.company}
      </p>

      {/* Description */}
      <p className="mt-4 text-sm leading-6 text-gray-600">
       {elem.description}
      </p>

      {/* Job Details */}
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-md bg-gray-100 px-3 py-1 text-xs">
          Full Time
        </span>

        <span className="rounded-md bg-gray-100 px-3 py-1 text-xs">
          {elem.location}
        </span>

        <span className="rounded-md bg-gray-100 px-3 py-1 text-xs">
          {elem.salary}
        </span>
      </div>

      {/* Skills */}
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700">
          {one}
        </span>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700">
          {two}
        </span>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700">
          {three}
        </span>
      </div>

      {/* Button */}
      <button className="mt-5 w-full rounded-lg bg-black py-2.5 text-sm font-medium text-white hover:bg-gray-800">
        Apply Now
      </button>

    </div>
  );
}

export default Card;