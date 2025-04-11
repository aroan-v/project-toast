import React from 'react';

function useEscapeKey(callback) {
  React.useEffect(() => {
    console.log('useEscapeKey event listener attached');
    function handleKeydown(event) {
      if (event.key === 'Escape') {
        callback(event);
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [callback]);
}

export default useEscapeKey;
