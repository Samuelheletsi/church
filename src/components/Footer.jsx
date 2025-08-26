// src/components/Footer.jsx
export default function Footer() {
    return (
      <footer className="bg-blue-900 text-white py-6 mt-10">
        <div className="container mx-auto text-center px-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Royalties Youth Church - All Rights
            Reserved.
          </p>
        </div>
      </footer>
    );
  }
  