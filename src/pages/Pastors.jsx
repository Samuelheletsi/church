// src/pages/Pastors.jsx
import useFetch from "../hooks/useFetch";
import Card from "../components/Card";
import { motion } from "framer-motion";

export default function Pastors() {
  const { data, loading, error } = useFetch("/church.json");
  const pastors = data?.pastors || [];

  if (loading) return <div className="p-6">Loading pastors...</div>;
  if (error) return <div className="p-6">Error loading pastors.</div>;

  return (
    <section className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Pastors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pastors.map((p, idx) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <Card>
              <div className="flex items-start gap-4">
                <img
                  src={p.photo}
                  alt={`${p.name} photo`}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  <p className="text-sm text-gray-500">{p.title}</p>
                  <p className="mt-2">{p.bio}</p>
                  <a
                    href={`mailto:${p.contact?.email}`}
                    className="mt-2 inline-block text-sm text-blue-600"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
