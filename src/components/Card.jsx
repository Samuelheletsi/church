// src/components/Card.jsx
export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 border ${className}`}>
      {children}
    </div>
  );
}
