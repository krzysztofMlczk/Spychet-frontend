import React, { useEffect, useRef } from "react";
import { BgWrapper, BgImg } from "./BackgroundElements";

import far_planets from "../../../img/far_planets.png";
import supernovas from "../../../img/supernovas.png";
import falling_stars from "../../../img/falling_stars.png";
import bright_planets from "../../../img/bright_planets.png";
import big_planet from "../../../img/big_planet.png";
import small_planet from "../../../img/small_planet.png";
import superstars from "../../../img/superstars.png";

const Background = () => {
  const ref = useRef();

  const images = [
    { source: far_planets, speed: 1 },
    { source: supernovas, speed: 2 },
    { source: falling_stars, speed: 3 },
    { source: bright_planets, speed: 4 },
    { source: big_planet, speed: 5 },
    { source: small_planet, speed: 6 },
    { source: superstars, speed: 7 },
  ];

  useEffect(() => {
    const hover = (e) => {
      if (ref.current) {
        for (const img of ref.current.children) {
          const speed = img.getAttribute("data-speed");

          const x = (window.innerWidth - e.pageX * speed) / 100;
          const y = (window.innerHeight - e.pageY * speed) / 100;
          img.style.transform = `translateX(${x}px) translateY(${y}px)`;
        }
      }
    };

    const hoverParallax = window.addEventListener("mousemove", hover);

    return () => {
      window.removeEventListener("mousemove", hoverParallax);
    };
  }, []);

  return (
    <BgWrapper ref={ref}>
      {images.map((img, i) => (
        <BgImg key={i} src={img.source} data-speed={img.speed} />
      ))}
    </BgWrapper>
  );
};

export default Background;
