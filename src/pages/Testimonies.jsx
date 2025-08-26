// src/pages/Testimonies.jsx
import { useEffect, useState } from "react";

export default function Testimonies() {
  const [testimonies, setTestimonies] = useState([]);

  useEffect(() => {
    fetch("/church.json")
      .then((res) => res.json())
      .then((data) => setTestimonies(data.testimonies || []));
  }, []);

  return (
    <section className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Miracle Testimonies</h2>
      <div className="space-y-4">
        {testimonies.map((t, idx) => (
          <div key={idx} className="p-4 border rounded-lg bg-gray-50">
            <p className="italic">"{t.message}"</p>
            <p className="mt-2 font-semibold">- {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
