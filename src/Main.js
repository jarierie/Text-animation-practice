import React, { useEffect, useRef } from "react";
import styled, { withTheme } from "styled-components";
import { gsap } from "gsap";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #ffd6bf;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 700px;
  height: 120px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  text-transform: uppercase;
  letter-spacing: 10px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  /* overflow: hidden;
  &:hover {
    overflow: visible;
  } */
`;

const name = ["j", "a", "r", "i", "e"];
const colors = ["#542e71", "#fb3640", "#fdca40", "#a799b7"];

const Main = () => {
  const ref = useRef(null);

  //animation
  const animation = () => {
    const tl = gsap.timeline();
    tl.from(ref.current.childNodes, { y: "200%", stagger: 0.5 })
      .to(ref.current.childNodes[4], { scaleX: 4, transformOrigin: "0% 0%" })
      .to(ref.current.childNodes[0], {
        scaleX: 4,
        transformOrigin: "90% 90%",
      })
      .to(ref.current.childNodes[4], {
        scaleX: 1,
        transformOrigin: "0% 0%",
      })
      .to(ref.current.childNodes[0], { scaleX: 1, transformOrigin: "90% 90%" })
      .to(ref.current, { scale: 2 })
      .to(ref.current, { scale: 1 })
      //   .to(ref.current, { rotateX: 90, duration: 0.5 })
      .to(ref.current, { color: "black" }, 2.5);
  };

  const hoverAnimation = () => {
    const tl = gsap.timeline();
    tl.to(ref.current.childNodes[4], {
      scaleX: 4,
      transformOrigin: "0% 0%",
    }).to(ref.current, { rotateZ: -45 }, 0);
  };

  const hoverAnimation2 = () => {
    const tl = gsap.timeline();
    tl.to(
      ref.current.childNodes[0],
      {
        x: Math.random() * 200,
        y: Math.random() * 200,
        color: colors[Math.floor(Math.random() * 4)],
      },
      0
    )
      .to(
        ref.current.childNodes[3],
        {
          x: Math.random() * 200,
          y: Math.random() * 200,
          color: colors[Math.floor(Math.random() * 4)],
        },
        0
      )
      .to(
        ref.current.childNodes[1],
        {
          x: Math.random() * 200,
          y: Math.random() * 200,
          color: colors[Math.floor(Math.random() * 4)],
        },
        0
      )
      .to(
        ref.current.childNodes[2],
        {
          x: Math.random() * 200,
          y: Math.random() * 200,
          color: colors[Math.floor(Math.random() * 4)],
        },
        0
      )
      .to(
        ref.current.childNodes[4],
        {
          x: Math.random() * 200,
          y: Math.random() * 200,
          color: colors[Math.floor(Math.random() * 4)],
        },
        0
      );
  };

  const hoverOutAnimation = () => {
    const tl = gsap.timeline();
    tl.to(ref.current.childNodes[4], {
      scaleX: 1,
      transformOrigin: "0% 0%",
    }).to(ref.current, { rotateZ: 0 }, 0);
  };

  const hoverOutAnimation2 = () => {
    const tl = gsap.timeline();
    tl.to(
      ref.current.childNodes[0],
      {
        x: 0,
        y: 0,
        color: "white",
      },
      0
    )
      .to(
        ref.current.childNodes[1],
        {
          x: 0,
          y: 0,
          color: "white",
        },
        0
      )
      .to(
        ref.current.childNodes[2],
        {
          x: 0,
          y: 0,
          color: "white",
        },
        0
      )
      .to(
        ref.current.childNodes[3],
        {
          x: 0,
          y: 0,
          color: "white",
        },
        0
      )
      .to(
        ref.current.childNodes[4],
        {
          x: 0,
          y: 0,
          color: "white",
        },
        0
      );
  };

  useEffect(() => {
    animation();
  }, []);
  return (
    <>
      <Container>
        <TextContainer
          ref={ref}
          onMouseEnter={hoverAnimation2}
          onMouseLeave={hoverOutAnimation2}
        >
          {name.map((item) => {
            return (
              <>
                <p>{item}</p>
              </>
            );
          })}
        </TextContainer>
      </Container>{" "}
    </>
  );
};

export default Main;
