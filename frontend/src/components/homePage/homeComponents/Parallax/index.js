import React, { useEffect, useRef } from "react";
import {
  ParallaxWrapper,
  ParallaxMovingImg,
  ParallaxStaticImg,
  ParallaxBackground,
} from "./ParallaxElements";

import far_planets from "../../../../img/far_planets.png";
import supernovas from "../../../../img/supernovas.png";
import falling_stars from "../../../../img/falling_stars.png";
import bright_planets from "../../../../img/bright_planets.png";
import big_planet from "../../../../img/big_planet.png";
import small_planet from "../../../../img/small_planet.png";
import superstars from "../../../../img/superstars.png";
import logotitle from "../../../../img/logotitle.png";

const Parallax = () => {
  const ref = useRef();
  // object speficying distance from top for moving elements
  const distancesFromTop = {
    farPlanets: 0,
    smallPlanet: 80,
    logoTitle: 110,
  };
  const handler = () => {
    /**
     * We are using ref hook to optimize:
    The whole parallax doesn't need to rerender
    By changing refs children props only these children will be rerendered
    And not the whole Parallax component
    far planets
     * 
     */
    // far planets
    if (!ref.current) {
      return 0;
    }
    ref.current.children[1].style.top = 0.4 * -window.scrollY + "px";
    // small planet
    ref.current.children[6].style.left = 0.4 * window.scrollY + "px";
    // logo title
    ref.current.children[8].style.top =
      distancesFromTop.logoTitle + 0.95 * window.scrollY + "px";
    // ALTERNATIVE USING transform
    // ref.current.children[i + 1].style.transform = `translateY(${
    //   coeff[i] * window.scrollY
  };

  useScrollHandler(handler);

  return (
    <>
      <ParallaxWrapper ref={ref} id={"home"}>
        <ParallaxBackground />
        <ParallaxMovingImg
          src={far_planets}
          topDistance={distancesFromTop.farPlanets}
          width={"100%"}
        />
        <ParallaxStaticImg src={supernovas} />
        <ParallaxStaticImg src={falling_stars} />
        <ParallaxStaticImg src={bright_planets} />
        <ParallaxStaticImg src={big_planet} />
        <ParallaxMovingImg
          src={small_planet}
          topDistance={distancesFromTop.smallPlanet}
          width={"100%"}
        />
        <ParallaxStaticImg src={superstars} />
        <ParallaxMovingImg
          src={logotitle}
          topDistance={distancesFromTop.logoTitle}
          width={"33vw"}
        />
      </ParallaxWrapper>
    </>
  );
};

const useScrollHandler = (handler) => {
  useEffect(() => {
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  });
};

export default Parallax;
