// src/components/NotificationButton.jsx
import { useNotification } from "../hooks/useNotification";

export default function NotificationButton() {
  const { notifySuccess } = useNotification();

  return (
    <button
      onClick={() => notifySuccess("Welcome to Royalties Youth Church 🎉")}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
    >
      Show Welcome Notification
    </button>
  );
}
