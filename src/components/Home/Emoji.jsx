import React, { useEffect, useRef } from "react";
import styles from "./Emoji.module.scss";
import gsap from "gsap";

const Emoji = () => {
  const container = useRef(null);
  const emoji = useRef(null);
  const face = useRef(null);
  const left = useRef(null);
  const right = useRef(null);

  useEffect(() => {
    const move = (e) => {
      const wrapperRect = container.current.getBoundingClientRect();

      const relX = e.clientX - (wrapperRect.left + wrapperRect.width / 2);
      const relY = e.clientY - (wrapperRect.top + wrapperRect.height / 2);

      const emojiMaxDisplacement = 100;
      const faceMaxDisplacement = 175;

      const emojiDisplacementX =
        (relX / wrapperRect.width) * emojiMaxDisplacement;
      const emojiDisplacementY =
        (relY / wrapperRect.height) * emojiMaxDisplacement;
      const faceDisplacementX =
        (relX / wrapperRect.width) * faceMaxDisplacement;
      const faceDisplacementY =
        (relY / wrapperRect.height) * faceMaxDisplacement;

      gsap.to(emoji.current, {
        x: emojiDisplacementX,
        y: emojiDisplacementY,
        duration: 0.35,
        ease: "power3.out",
      });

      gsap.to(face.current, {
        x: faceDisplacementX,
        y: faceDisplacementY,
        duration: 0.35,
        ease: "power3.out",
      });
    };

    const reset = () => {
      gsap.to(emoji.current, {
        x: 0,
        y: 0,
        duration: 0.75,
        ease: "power3.out",
      });

      gsap.to(face.current, {
        x: 0,
        y: 0,
        duration: 0.75,
        ease: "power3.out",
      });
    };

    container.current.addEventListener("mousemove", move);
    container.current.addEventListener("mouseleave", reset);

    left.current.addEventListener("mouseenter", () => {
      gsap.to(emoji.current, {
        backgroundColor: "#ff7dcb",
        duration: 0.5,
        ease: "power3.out",
      });
    });
    left.current.addEventListener("mouseleave", () => {
      gsap.to(emoji.current, {
        backgroundColor: "#5445ff",
        duration: 0.5,
        ease: "power3.out",
      });
    });

    right.current.addEventListener("mouseenter", () => {
      gsap.to(emoji.current, {
        backgroundColor: "#beff0d",
        duration: 0.5,
        ease: "power3.out",
      });
    });
    right.current.addEventListener("mouseleave", () => {
      gsap.to(emoji.current, {
        backgroundColor: "#5445ff",
        duration: 0.5,
        ease: "power3.out",
      });
    });

    // return () => {
    //   container.current.removeEventListener("mousemove", move);
    //   left.current.removeEventListener("mouseenter", () => {});
    //   left.current.removeEventListener("mouseleave", () => {});
    //   right.current.removeEventListener("mouseenter", () => {});
    //   right.current.removeEventListener("mouseleave", () => {});
    // };
  }, []);

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.text}>
        <h1>Refokus</h1>
      </div>
      <div className={styles.stroke}>
        <h1>Refokus</h1>
      </div>

      <div ref={left} className={styles.left}></div>
      <div ref={right} className={styles.right}></div>

      <div ref={emoji} className={styles.emoji}>
        <div ref={face} className={styles.face}>
          <div className={styles.eyes}>
            <img loading="eager" src="/home/eye.svg" />
            <img loading="eager" src="/home/eye.svg" />
          </div>

          <div className={styles.mouthWrapper}>
            <div className={styles.mouth}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emoji;
