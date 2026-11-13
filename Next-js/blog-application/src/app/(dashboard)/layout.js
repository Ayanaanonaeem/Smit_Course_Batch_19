
import Link from "next/link";
import "../globals.css";
const DashboardLayout = ({ children }) => {
  return (
    <html>
      <body>
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-white shadow-sm p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">
          My Dashboard
        </h1>

        <button className="md:hidden text-2xl">
          ☰
        </button>

        <p className="hidden md:block text-gray-600">
          Welcome, User
        </p>
      </header>

      <div className="flex">

        {/* Sidebar */}
        <aside className="hidden md:block w-60 bg-white min-h-screen p-5 shadow-sm">
          <nav className="flex flex-col gap-5">
            <Link href="/dashboard">Overview</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/setting">Settings</Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {children}
        </main>

      </div>
    </div>

      </body>
    </html>
  );
};

export default DashboardLayout;
