// src/pages/Home.jsx
import Hero from "../components/Hero";
import NotificationButton from "../components/NotificationButton";

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="container mx-auto p-6">
        <h2 className="text-2xl font-bold text-center mb-4">
          Welcome to Royalties Youth Church
        </h2>
        <p className="text-center text-gray-600">
          We are one big family of believers with 4 branches, 2 pastors, and
          several fellowships to grow your faith.
        </p>

        {/* Example notification trigger */}
        <div className="text-center mt-6">
          <NotificationButton />
        </div>
      </section>
    </div>
  );
}
