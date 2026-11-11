import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    <h1 className="text-3xl font-bold ">Blog Application</h1>
    <div className="flex gap-2">
      <Link href={"/home"}>
      <p className="bg-purple-400 px-4 border rounded text-white">Home</p>
      </Link>
      <Link href={"/aboutus"}>
      <p className="bg-purple-400 px-4 border rounded text-white">Aboutus</p>
      </Link>
      <Link href={"/contactus"}>
      <p className="bg-purple-400 px-4 border rounded text-white">Contactus</p>
      </Link>
      <Link href={"/dashboard"}>
      <p className="bg-purple-400 px-4 border rounded text-white">Dashboard</p>
      </Link>
      <Link href={"/blogs"}>
      <p className="bg-purple-400 px-4 border rounded text-white">Blogs</p>
      </Link>
     
    </div>

    </div>
  );
}
