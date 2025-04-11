import React from 'react';
import useEscapeKey from '../../hooks/useKeydown';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  console.log('ToastProvider re-rendered');
  const [toastGroup, setToastGroup] = React.useState([]);

  const createToast = React.useCallback((variant, message) => {
    setToastGroup((toasts) => {
      return [
        ...toasts,
        { variant, message, id: crypto.randomUUID() },
      ];
    });
  }, []);

  const deleteToast = React.useCallback((id) => {
    setToastGroup((toasts) =>
      toasts.filter((toast) => toast.id !== id)
    );
  }, []);

  const resetToasts = React.useCallback(() => {
    setToastGroup([]);
  }, []);

  useEscapeKey(resetToasts);

  // Memoize the value before assigning it to the provider
  const value = React.useMemo(() => {
    return { toastGroup, createToast, deleteToast };
  }, [toastGroup, createToast, deleteToast]);

  return <ToastContext value={value}>{children}</ToastContext>;
}

export default React.memo(ToastProvider);
