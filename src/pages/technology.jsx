import data from "../data.json";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

function Technology() {
  // Start with first index active
  const [index, setIndex] = useState(0);
  const technology = data.technology[index];

  const imageUrl = new URL(
    `../assets/technology/${technology.images.portrait}`,
    import.meta.url
  ).href;

  // Refs
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const circleRefs = useRef([]);

  // Reset circleRefs each render
  circleRefs.current = [];

  const addCircleRef = (el) => {
    if (el && !circleRefs.current.includes(el)) {
      circleRefs.current.push(el);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // Image: scale + fade in
    tl.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.2 }
    );

    // Text: slide from right
    tl.fromTo(
      textRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1 },
      "-=0.8"
    );

    // Circles: scale and color animation
    gsap.to(circleRefs.current, {
      scale: (i) => (i === index ? 1.3 : 1),
      backgroundColor: (i) => (i === index ? "#fff" : ""), //
      color: (i) => (i === index ? "#000" : "#f5f5f5"),
      duration: 0.4,
      stagger: 0.05,
    });
  }, [index]);

  return (
    <div className="grid grid-cols-2 justify-between items-center mb-10 mt-10 max-lg:grid-cols-1">

      {/* Left: Circles + Text */}
      <div className="grid justify-center items-center">
        <span className="pb-30 max-sm:pb-15 uppercase text-[#f5f5f5] text-3xl font-semibold max-sm:text-2xl max-sm:text-center mb-10">
          <span className="text-gray-400 font-sans pr-4">03 </span>
          space launch 101
        </span>

        <div className="flex gap-10">
          {/* Circles */}
          <div className="grid gap-6 justify-center text-center items-center max-md:justify-center">
            {data.technology.map((_, i) => (
              <div
                key={i}
                ref={addCircleRef}
                onClick={() => setIndex(i)}
                className="w-12 h-12 border border-gray-600 rounded-full text-xl cursor-pointer flex items-center justify-center"
              >
                {i + 1}
              </div>
            ))}
          </div>

          {/* Text */}
          <div ref={textRef} className="grid max-md:m-auto text-[#f5f5f5] max-sm:text-center">
            <span className="uppercase text-gray-400 text-xl">the terminology. . .</span>
            <h1 className="uppercase text-[3rem] max-sm:text-[2rem]">{technology.name}</h1>
            <p className="text-justify uppercase text-md leading-8 w-120 pt-8 pb-20 max-sm:w-75 max-sm:m-auto max-sm:text-center">
              {technology.description}
            </p>
          </div>
        </div>
      </div>

      {/* Right: Image */}
      <div className="grid grid-cols-1 justify-center items-center max-md:text-center text-[#f5f5f5]">
        <div className="flex justify-center gap-18">
          <img ref={imageRef} src={imageUrl} alt={technology.name} />
        </div>
      </div>

    </div>
  );
}

export default Technology;