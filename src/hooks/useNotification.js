// src/hooks/useNotification.js
import { toast } from "sonner";

/**
 * useNotification Hook
 * Provides reusable notification functions
 * for success, error, info, and warning messages
 */
export function useNotification() {
  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);
  const notifyInfo = (message) => toast.info(message);
  const notifyWarning = (message) => toast.warning(message);

  return { notifySuccess, notifyError, notifyInfo, notifyWarning };
}
