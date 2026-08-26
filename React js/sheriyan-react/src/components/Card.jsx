const Card = ({user}) => {
  
   
   
   
   
   
    
    
    
    
  return (
    <div className="w-80 rounded-xl bg-white p-6 shadow-lg">
      <img
        src={user.image}
        alt="Profile"
        className="mb-4 h-48 w-full rounded-lg object-cover"
      />

      <h2 className="mb-2 text-xl font-bold text-gray-800">
        {user.name}
      </h2>

      <p className="mb-4 text-gray-600">
        {user.description}
      </p>

      <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
       click
      </button>
    </div>
  );
};

export default Card;