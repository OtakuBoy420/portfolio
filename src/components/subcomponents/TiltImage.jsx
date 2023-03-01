import React, { useState, useRef } from "react";

function TiltImage({ imageUrl }) {
  const [tiltAngle, setTiltAngle] = useState({ tiltX: 0, tiltY: 0 });
  const imageRef = useRef();

  const calculateTiltAngle = (mouseX, mouseY) => {
    const boundingRect = imageRef.current.getBoundingClientRect();
    const centerX = boundingRect.left + boundingRect.width / 2;
    const centerY = boundingRect.top + boundingRect.height / 2;
    const tiltX = Math.round(centerY - mouseY) / 10;
    const tiltY = Math.round(centerX - mouseX) / 10;
    return { tiltX, tiltY };
  };

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { tiltX, tiltY } = calculateTiltAngle(clientX, clientY);
    setTiltAngle({ tiltX, tiltY });
  };

  const handleMouseLeave = () => {
    setTiltAngle({ tiltX: 0, tiltY: 0 });
  };

  return (
    <img
      ref={imageRef}
      src={imageUrl}
      alt="Tilt Image"
      className="z-[2] aspect-square w-1/2 transform duration-500"
      style={{ transform: `perspective(1000px) rotateX(${tiltAngle.tiltX}deg) rotateY(${tiltAngle.tiltY}deg)`, transition: "transform 0.2s ease-out" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    />
  );
}

export default TiltImage;
