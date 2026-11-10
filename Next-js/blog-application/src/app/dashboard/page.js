import React from "react";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="flex">
        <Link href={"/dashboard/setting"}>
          <p className="bg-purple-400 px-4 border rounded text-white">
            settings
          </p>
        </Link>
        <Link href={"/dashboard/profile"}>
          <p className="bg-purple-400 px-4 border rounded text-white">
            profile
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
