// src/pages/Fellowships.jsx
import useFetch from "../hooks/useFetch";
import Card from "../components/Card";
import Modal from "../components/Modal";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Fellowships() {
  const { data, loading, error } = useFetch("/church.json");
  const branches = data?.branches || [];
  const [selectedLeader, setSelectedLeader] = useState(null);

  if (loading) return <div className="p-6">Loading fellowships...</div>;
  if (error) return <div className="p-6">Error loading fellowships.</div>;

  return (
    <section className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Fellowships</h2>

      {branches.map((b, bIdx) => (
        <motion.div
          key={b.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: bIdx * 0.2 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-700">{b.name} - {b.location}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {b.fellowships.map((f, fIdx) => (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: fIdx * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <Card>
                  <h4 className="font-semibold text-lg">{f.name}</h4>
                  {f.leader && (
                    <button
                      onClick={() => setSelectedLeader(f.leader)}
                      className="text-blue-600 text-sm mt-2"
                    >
                      View Leader
                    </button>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}

      <Modal
        open={!!selectedLeader}
        onClose={() => setSelectedLeader(null)}
        title={selectedLeader?.name}
      >
        {selectedLeader && (
          <div>
            <p className="text-gray-600">{selectedLeader.role}</p>
            <p className="mt-2">{selectedLeader.bio}</p>
            <h5 className="mt-4 font-semibold">Members:</h5>
            <ul className="list-disc ml-5">
              {selectedLeader.members?.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          </div>
        )}
      </Modal>
    </section>
  );
}
