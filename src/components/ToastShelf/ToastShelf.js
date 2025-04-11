import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';

function ToastShelf() {
  console.log('ToastShelf re-rendered');
  const { toastGroup } = React.useContext(ToastContext);
  return (
    <ol className={styles.wrapper}>
      {toastGroup.map(({ variant, message, id }) => (
        <li
          key={id}
          className={styles.toastWrapper}
          role="region"
          aria-live="polite"
          aria-label="Notification"
        >
          <Toast variant={variant} id={id}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default React.memo(ToastShelf);
