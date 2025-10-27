import { createRoot } from 'react-dom/client';
import React from 'react';

function Welcome() {
  const name = (a) => {
    alert(a);
  };

  return (
    <button onClick={() => name("sai ram!")}>hai</button>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<Welcome />);
