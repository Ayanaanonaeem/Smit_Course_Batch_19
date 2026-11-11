import Link from 'next/link';
import React from 'react'

const blogs = [
  {
    id: 1,
    slug: "getting-started-with-react",
    title: "Getting Started with React",
    description: "Learn the fundamentals of React.js and build your first interactive user interface."
  },
  {
    id: 2,
    slug: "javascript-for-beginners",
    title: "JavaScript for Beginners",
    description: "Understand JavaScript basics including variables, functions, arrays and objects."
  },
  {
    id: 3,
    slug: "mastering-nextjs",
    title: "Mastering Next.js",
    description: "Explore Next.js features like App Router, Server Components and data fetching."
  },
  {
    id: 4,
    slug: "understanding-typescript",
    title: "Understanding TypeScript",
    description: "Discover how TypeScript improves code quality through static typing and interfaces."
  },
  {
    id: 5,
    slug: "building-rest-apis",
    title: "Building REST APIs with Node.js",
    description: "Learn how to create RESTful APIs using Node.js and Express.js."
  }
];
export const metadata = {
  title: 'My Blog',
  
}
const Blogs = () => {
  return (
    <>
    <h1 className='text-2xl font-bold'>Blogs Page</h1>
     <div className='flex flex-col gap-2 w-1/2' >
    {
        blogs.map((data)=>(
            
                <Link key={data.id} href={`/blogs/${data.slug}`}>
                <h1 className='bg-purple-400 px-4 border rounded text-white'>{data.title}</h1>
                </Link>
                
        ))
    }   
    </div>
    </>
  )
}

export default Blogs