// src/pages/Leaders.jsx
import useFetch from "../hooks/useFetch";
import Card from "../components/Card";
import { motion } from "framer-motion";

export default function Leaders() {
  const { data, loading, error } = useFetch("/church.json");
  const leaders = data?.leaders || [];

  if (loading) return <div className="p-6">Loading leaders...</div>;
  if (error) return <div className="p-6">Error loading leaders.</div>;

  return (
    <section className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Church Leaders</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {leaders.map((leader, idx) => (
          <motion.div
            key={leader.id || idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <Card>
              <div className="text-center">
                {leader.photo && (
                  <img
                    src={leader.photo}
                    alt={`${leader.name} photo`}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                  />
                )}
                <h3 className="text-xl font-semibold">{leader.name}</h3>
                <p className="text-sm text-gray-500">{leader.role}</p>
                <p className="mt-2 text-sm">{leader.bio}</p>
                {leader.contact && (
                  <div className="mt-3">
                    <a
                      href={`mailto:${leader.contact.email}`}
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Contact
                    </a>
                  </div>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
