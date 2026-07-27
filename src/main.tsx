import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
// Arabic subset only (~108 kB): the alphabet writer needs a deterministic
// letterform, not whatever naskh font the OS happens to ship.
import '@fontsource/amiri/arabic-400.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
