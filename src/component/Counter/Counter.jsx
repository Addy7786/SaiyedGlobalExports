import { useEffect, useRef, useState } from "react";
import {
  Globe2,
  Package,
  Users,
  Ship,
} from "lucide-react";
import "./Counter.css";

function AnimatedNumber({ end, duration = 2000 }) {
  const [number, setNumber] = useState(0);
  const numberRef = useRef(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const element = numberRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasStarted.current) return;

        hasStarted.current = true;

        const startTime = performance.now();

        const animate = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const currentNumber = Math.floor(progress * end);

          setNumber(currentNumber);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setNumber(end);
          }
        };

        requestAnimationFrame(animate);
        observer.disconnect();
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={numberRef}>{number}</span>;
}

function Counter() {
  const counters = [
    {
      icon: Globe2,
      number: 25,
      suffix: "+",
      title: "Countries",
    },
    {
      icon: Package,
      number: 500,
      suffix: "+",
      title: "Products",
    },
    {
      icon: Users,
      number: 120,
      suffix: "+",
      title: "Happy Clients",
    },
    {
      icon: Ship,
      number: 850,
      suffix: "+",
      title: "Shipments",
    },
  ];

  return (
    <section className="counter-section" id="counter">
      <div className="container">
        <div className="counter-grid">
          {counters.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                className="counter-card"
                key={item.title}
                data-aos="zoom-in"
                data-aos-delay={index * 120}
              >
                <div className="counter-icon">
                  <Icon size={34} />
                </div>

                <h2>
                  <AnimatedNumber end={item.number} />
                  {item.suffix}
                </h2>

                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Counter;