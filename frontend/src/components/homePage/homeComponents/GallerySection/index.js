import React, { useState, useEffect, useRef } from "react";
import Checkbox from "@material-ui/core/Checkbox";

import {
  Slider,
  SliderContent,
  Slide,
  Arrow,
  Additionals,
  Dot,
  CheckboxWrapper,
  CompanyName,
  DotWrapper,
  ArrowWrap,
} from "./GallerySectionElements";

import screen1 from "../../../../img/screens/screen1.png";
import screen2 from "../../../../img/screens/screen2.png";
import screen3 from "../../../../img/screens/screen3.png";
import screen4 from "../../../../img/screens/screen4.png";
import screen5 from "../../../../img/screens/screen5.png";
import screen6 from "../../../../img/screens/screen6.png";
import screen7 from "../../../../img/screens/screen7.png";
import screen8 from "../../../../img/screens/screen8.png";

const GallerySection = (props) => {
  const getWidth = () => window.innerWidth;

  const slides = [
    screen1,
    screen2,
    screen3,
    screen4,
    screen5,
    screen6,
    screen7,
    screen8,
  ];

  const transitionSpeed = 0.6;
  const firstSlide = slides[0];
  const secondSlide = slides[1];
  const lastSlide = slides[slides.length - 1];

  const [state, setState] = useState({
    activeSlide: 0,
    translate: getWidth(),
    transition: transitionSpeed,
    _slides: [lastSlide, firstSlide, secondSlide],
    autoPlay: true,
    checked: true,
  });

  const {
    activeSlide,
    translate,
    _slides,
    transition,
    autoPlay,
    checked,
  } = state;

  const setAutoPlay = () => {
    setState({
      ...state,
      autoPlay: !autoPlay,
      checked: !checked,
    });
  };

  const autoPlayRef = useRef();
  const transitionRef = useRef();
  const resizeRef = useRef();
  const sliderRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
    transitionRef.current = smoothTransition;
    resizeRef.current = handleResize;
  });

  useEffect(() => {
    const slider = sliderRef.current;

    const smooth = (e) => {
      // console.log(e.target.className);
      // we want to run smoothTransition function only when
      // transitionend event comes from SliderContent
      // to prevent running this function when transition ends on other components
      // we check if the target of the event is equal to "SliderContent" class

      // if target of the event contains "SliderContent" in its className
      //then run smoothTransition function
      let invokerClass = String(e.target.className);
      if (invokerClass.indexOf("SliderContent") !== -1) transitionRef.current();
    };

    const resize = () => {
      resizeRef.current();
    };

    const transitionEnd = slider.addEventListener("transitionend", smooth);
    const onResize = window.addEventListener("resize", resize);

    return () => {
      slider.removeEventListener("transitionend", transitionEnd);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (state.autoPlay) {
      const interval = setInterval(nextSlide, props.autoPlaySpeed * 1000);
      return () => clearInterval(interval);
    }
  });

  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: transitionSpeed });
  }, [transition, state]);

  const handleResize = () => {
    setState({ ...state, translate: getWidth(), transition: 0 });
  };

  const smoothTransition = () => {
    let _slides = [];

    // We're at the last slide.
    if (activeSlide === slides.length - 1)
      _slides = [slides[slides.length - 2], lastSlide, firstSlide];
    // We're back at the first slide. Just reset to how it was on initial render
    else if (activeSlide === 0) _slides = [lastSlide, firstSlide, secondSlide];
    // Create an array of the previous last slide, and the next two slides that follow it.
    else _slides = slides.slice(activeSlide - 1, activeSlide + 2);

    setState({
      ...state,
      _slides,
      transition: 0,
      translate: getWidth(),
    });
  };

  const nextSlide = () =>
    setState({
      ...state,
      translate: translate + getWidth(),
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
    });

  const prevSlide = () =>
    setState({
      ...state,
      translate: 0,
      activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1,
    });

  return (
    <Slider id={"gallery"} ref={sliderRef} width={getWidth()}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * _slides.length}
        className="SliderContent"
      >
        {_slides.map((_slide, i) => (
          <Slide width={getWidth()} key={_slide + i} source={_slide} />
        ))}
      </SliderContent>
      <ArrowWrap left={1} onClick={prevSlide}>
        <Arrow left={1} />
      </ArrowWrap>
      <ArrowWrap left={0} onClick={nextSlide}>
        <Arrow left={0} />
      </ArrowWrap>
      <Additionals>
        <CheckboxWrapper>
          Auto Play:
          <Checkbox
            checked={state.checked}
            onChange={setAutoPlay}
            name="checkedB"
            color="primary"
          />
        </CheckboxWrapper>
        <DotWrapper>
          {slides.map((slide, i) => (
            <Dot key={slide} active={activeSlide === i}></Dot>
          ))}
        </DotWrapper>
        <CompanyName>© Spachet</CompanyName>
      </Additionals>
    </Slider>
  );
};

export default GallerySection;
