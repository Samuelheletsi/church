// src/pages/Programs.jsx
import { useEffect, useState } from "react";
import { useNotification } from "../hooks/useNotification";

export default function Programs() {
  const [programs, setPrograms] = useState([]);
  const { notifyInfo } = useNotification();

  useEffect(() => {
    fetch("/church.json")
      .then((res) => res.json())
      .then((data) => {
        setPrograms(data.programs || []);
        notifyInfo("Programs loaded 📅");
      });
  }, []);

  return (
    <section className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Church Programs</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {programs.map((program, idx) => (
          <div key={idx} className="p-4 border rounded-lg shadow-sm bg-white">
            <h3 className="font-semibold text-lg">{program.title}</h3>
            <p className="text-gray-600">{program.date}</p>
            <p className="mt-2">{program.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
