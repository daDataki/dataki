'use client';

import { useEffect } from 'react';

export default function SafariClassHandler() {
  useEffect(() => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) {
      document.body.classList.add('only-safari');
    }
  }, []);

  return null;
}
