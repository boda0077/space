import data from '../data.json'
import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap';

function Destination() {
  const [index, setIndex] = useState(0);

  const destination = data.destinations[index];

  const imageUrl = new URL(
    `../assets/destination/${destination.images.png}`,
    import.meta.url
  ).href;

  // Refs
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const titleRef = useRef(null);
  const distanceRef = useRef(null);
  const travelRef = useRef(null);

  // Animate on index change
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // Planet image animation
    tl.fromTo(
      imageRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1.2 }
    );

    // Text animation
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.8"
    );

    // Title animation
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.8"
    );

    // Distance & travel animation
    tl.fromTo(
      [distanceRef.current, travelRef.current],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 },
      "-=0.6"
    );
  }, [index]);

  return (
    <div className="grid grid-cols-2 justify-between items-center my-20 gap-20 overflow-hidden max-md:grid-cols-1">
      
      {/* Planet Image */}
      <div className="grid justify-center items-center max-sm:text-center">
        <span className="uppercase text-[#f5f5f5] text-3xl font-semibold max-sm:text-2xl mb-10">
          <span className="text-gray-400 font-sans pr-4">{"01 "} </span>
          Pick your destination
        </span>

        <img
          ref={imageRef}
          className="planet max-sm:w-85"
          src={imageUrl}
          alt={destination.name}
        />
      </div>

      {/* Text Info */}
      <div ref={textRef} className="grid grid-cols-1 justify-center items-center max-md:text-center text-[#f5f5f5]">
        
        {/* Planet Selector */}
        <div className="flex max-md:justify-center max-sm:grid max-sm:grid-cols-2 gap-15">
          {["europa","moon","mars","titan"].map((name, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`planets ${index === i ? "underline underline-offset-4" : ""} after-line text-xl font-sans cursor-pointer uppercase`}
            >
              {name}
            </span>
          ))}
        </div>

        {/* Planet Title & Description */}
        <div className="border-b border-gray-400 w-fit max-md:m-auto">
          <h1 ref={titleRef} className="main uppercase text-[7rem]">
            {destination.name}
          </h1>
          <p className="main text-justify max-sm:text-center max-sm:w-90 max-sm:m-auto w-120 pt-8 pb-20">
            {destination.description}
          </p>
        </div>

        {/* Distance & Travel */}
        <div className="flex items-center max-md:justify-center max-sm:grid max-sm:gap-20 gap-35 pt-10">
          <div ref={distanceRef} className="grid grid-cols-1 gap-4 main">
            <span className="text-gray-400 text-xl">avg. distance</span>
            <span className="text-3xl">{destination.distance}</span>
          </div>
          <div ref={travelRef} className="grid grid-cols-1 gap-4 main">
            <span className="text-gray-400 text-xl">fst. travel time</span>
            <span className="text-3xl">{destination.travel}</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Destination;