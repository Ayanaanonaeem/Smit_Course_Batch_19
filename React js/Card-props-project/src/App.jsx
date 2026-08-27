import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjiOvp6MXrCUMD7_9x01HieBQHFLPePd8uRokw53_eEcw3O0nXlHEfB1H6&s=10",
    description: "Build modern and responsive web applications.",
    type: "Full Time",
    location: "Remote",
    salary: "$1000 - $1500",
    skills: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Microsoft",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr7Jf_fF_1FFQKK0Emy7u1yGRz9PhHEyO0NMpGTN4FXcbPzAwc1N6ftRVT&s=10",
    description: "Develop scalable backend systems and APIs.",
    type: "Full Time",
    location: "On-site",
    salary: "$1200 - $1800",
    skills: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Apple",
    logo: "data:image/png;base64,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",
    description: "Design beautiful and user-friendly digital experiences.",
    type: "Part Time",
    location: "Remote",
    salary: "$800 - $1200",
    skills: ["Figma", "UI Design", "UX Research"],
  },
  {
    id: 4,
    title: "Full Stack Developer",
    company: "Meta",
    logo: "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
    description: "Build full-stack web applications using modern technologies.",
    type: "Full Time",
    location: "Hybrid",
    salary: "$1500 - $2200",
    skills: ["React", "Node.js", "MongoDB"],
  },
];

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {jobs.map((elem) => (
          <Card key={elem.id} elem={elem} skills={elem.skills} />
        ))}
      </div>
    </>
  );
}

export default App;
