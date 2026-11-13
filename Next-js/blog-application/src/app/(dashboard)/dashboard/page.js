import React from "react";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div>
     
      <div className="flex">
        <Link href={"/setting"}>
          <p className="bg-purple-400 px-4 border rounded text-white">
            settings
          </p>
        </Link>
        <Link href={"/profile"}>
          <p className="bg-purple-400 px-4 border rounded text-white">
            profile
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
