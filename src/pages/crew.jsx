import data from '../data.json';
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function Crew() {
  const [index, setIndex] = useState(0);
  const crew = data.crew[index];

  const imageUrl = new URL(
    `../assets/crew/${crew.images.png}`,
    import.meta.url
  ).href;

  // Refs for animations
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const roleRef = useRef(null);
  const nameRef = useRef(null);
  const bioRef = useRef(null);
  const circleRefs = useRef([]);

  // Reset circleRefs on every render
  circleRefs.current = [];

  const addCircleRef = (el) => {
    if (el && !circleRefs.current.includes(el)) {
      circleRefs.current.push(el);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    // Image slides in from right
    tl.fromTo(
      imageRef.current,
      { opacity: 0, x: 200 },
      { opacity: 1, x: 0, duration: 1.2 }
    );

    // Text container slides in from bottom
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 },
      '-=0.8'
    );

    // Animate role, name, bio individually
    tl.fromTo(roleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.8');
    tl.fromTo(nameRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.6');
    tl.fromTo(bioRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.5');

    // Circle scaling animation
    gsap.to(circleRefs.current, {
      scale: 1,
      backgroundColor: (i) => (i === index ? '#fff' : '#6b7280'), // white active, gray inactive
      duration: 0.5,
      stagger: 0.1,
    });
  }, [index]);

  return (
    <div className="grid grid-cols-2 justify-between items-center mb-20 mt-10 max-lg:grid-cols-1 overflow-hidden">
      
      {/* Text Section */}
      <div className="grid justify-center items-center">
        <span className="pb-30 max-sm:pb-15 uppercase text-[#f5f5f5] text-3xl font-semibold max-sm:text-2xl max-sm:text-center mb-10">
          <span className="text-gray-400 font-sans pr-4">02 </span>
          know your crew
        </span>

        <div ref={textRef} className="w-fit max-md:m-auto text-[#f5f5f5] max-sm:text-center">
          <span ref={roleRef} className="font-sans text-gray-500 text-2xl uppercase">
            {crew.role}
          </span>
          <h1 ref={nameRef} className="uppercase text-[3rem] max-sm:text-[2rem]">{crew.name}</h1>
          <p ref={bioRef} className="text-justify w-120 pt-8 pb-20 max-sm:w-75 max-sm:m-auto max-sm:text-center">
            {crew.bio}
          </p>
        </div>

        {/* Circle selectors */}
        <div className="flex justify-start max-md:justify-center gap-6">
          {data.crew.map((_, i) => (
            <span
              key={i}
              ref={addCircleRef}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer text-xl`}
              style={{ backgroundColor: i === index ? '#fff' : '#6b7280', transform: 'scale(0.8)' }}
            ></span>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="grid grid-cols-1 justify-center items-center max-md:text-center text-[#f5f5f5]">
        <div className="flex justify-center gap-18">
          <img ref={imageRef} className="w-100" src={imageUrl} alt={crew.name} />
        </div>
      </div>

    </div>
  );
}

export default Crew;