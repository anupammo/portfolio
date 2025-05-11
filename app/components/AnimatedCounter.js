import { useEffect, useState, useRef } from "react";

const AnimatedCounter = ({ targetNumber, duration }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return; // Start animation only when visible

    let startNumber = 0;
    const increment = targetNumber / (duration / 20);
    let currentNumber = startNumber;

    const interval = setInterval(() => {
      currentNumber += increment;
      if (currentNumber >= targetNumber) {
        currentNumber = targetNumber;
        clearInterval(interval);
      }
      setCount(Math.floor(currentNumber));
    }, 20);

    return () => clearInterval(interval);
  }, [isVisible, targetNumber, duration]);

  return <span className="text-color fw-bold display-5" ref={counterRef}>{count}</span>;
};

export default AnimatedCounter;
