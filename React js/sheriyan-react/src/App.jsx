import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
 
  const users = [
  {
    id: 1,
    name: "John Doe",
    role: "Frontend Developer",
    description: "Passionate about building modern web applications.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2, 
    name: "Sarah Khan",
    role: "UI/UX Designer",
    description: "Loves creating clean and user-friendly designs.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Ali Ahmed",
    role: "Backend Developer",
    description: "Specializes in APIs, databases, and server-side development.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Emma Wilson",
    role: "Full Stack Developer",
    description: "Enjoys working with React, Node.js, and modern technologies.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

  return (
    <>
    
      
    {users.map((user) => (
    
      
      
  <Card key={user.id} user={user} />
))}
       
   
     
      
    </>
  )
}

export default App
