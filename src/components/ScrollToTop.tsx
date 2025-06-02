import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the modern cross-browser alternative to "window.scrollTo".
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth', // Optional: adds a smooth scrolling effect
    });
  }, [pathname]); // Scroll to top whenever the pathname changes

  return null; // This component doesn't render anything
}