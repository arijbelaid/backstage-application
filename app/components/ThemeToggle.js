'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <button className="toggle" onClick={() => setDark(!dark)}>
      {dark ? 'Mode clair' : 'Mode sombre'}
    </button>
  );
}