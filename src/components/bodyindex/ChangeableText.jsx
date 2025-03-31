
import { useState, useEffect } from "react";

const ChangeableText = () => {
  const texts = [
    "el resto.",
    "los pedidos.",
    "las ventas.",
    "los gastos.",
    "el stock.",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Cambia cada 2 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="underline text-green-500 transition-opacity duration-500 ease-in-out">
      {texts[index]}
    </span>
  );
};

export default ChangeableText;
