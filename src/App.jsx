import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function App() {
  const h1Ref = useRef(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  const box4Ref = useRef(null);
  const box5Ref = useRef(null);
  const box6Ref = useRef(null);

  useEffect(() => {
    const spans = h1Ref.current.querySelectorAll('span');
    gsap.set(spans, { opacity: 0, y: 100 }); // Set initial state to match the animation's starting point
    gsap.to(spans, {
      duration: 0.5,//animation duration
      y: 0,// move the element 0px in y direction
      delay: 1,//delay before animation starts
      opacity: 1,
      stagger: 0.2,//if multiple elements are being animated, this will stagger(make the other element wait
      // ex- here when first span is animated after 0.2 sec other span will animate) the animations by the specified amount
    });
    const box1 = box1Ref.current;
    gsap.set(box1, { //set initial state of the element
      x: 0,//initial position of the element
      rotate: 0,
      borderRadius: 0,
      backgroundColor: 'red'
    }
    );
    gsap.to(box1, {
      duration: 2,
      x: 1000,
      rotate: 360, //rotate the element 360 degree
      delay: 1,
      borderRadius: '50%',
      backgroundColor: 'blue',
      scale: 0.5,
      scrollTrigger: {
        trigger: box1,
        start: 'top bottom',
        end: 'bottom 50%',
        markers: true,
      },

    });
    const box2 = box2Ref.current;
    gsap.set(box2, {
      x: 0,
      rotate: 0,
      borderRadius: 0,
      backgroundColor: 'blue'
    }
    );
    gsap.to(box2, {
      duration: 2,
      x: 300,
      y: 300,
      rotate: 360,
      delay: 1,
      borderRadius: '50%',
      backgroundColor: 'red',
      repeat: 5, //repeat the animation 5 times
    });
    const box3 = box3Ref.current;
    gsap.set(box3, {
      x: 0,
      rotate: 0,
      borderRadius: 0,
      backgroundColor: 'green'
    });
    gsap.to(box3, {
      duration: 2,
      x: 300,
      y: 300,
      rotate: 360,
      delay: 1,
      borderRadius: '50%',
      backgroundColor: 'yellow',
      repeat: -1, //repeat the animation infinite times
      scrollTrigger: {
        trigger: box3,
        start: 'top 50%',
        end: 'bottom 50%',
      }
    });
    const box4 = box4Ref.current;
    gsap.set(box4, {
      x: 0,
      rotate: 0,
      borderRadius: 0,
      backgroundColor: 'yellow'
    }
    );
    gsap.to(box4, {
      duration: 2,
      x: 800,
      rotate: 360,
      delay: 1,
      borderRadius: '50%',
      backgroundColor: 'green',
      yoyo: true, //reverse the animation
      repeat: -1
    });

    let tl = gsap.timeline();

    tl.to(box5Ref.current, {
      duration: 2,
      x: 800,
      rotate: 360,
      delay: 1,
      borderRadius: '50%',
      backgroundColor: 'green',
      yoyo: true, //reverse the animation
      repeat: -1,
      scrollTrigger: '.section-4'
    })
      .to(box6Ref.current, {
        duration: 2,
        x: 200,
        y: 200,
        rotate: 0,
        borderRadius: '50%',
        backgroundColor: 'red',
        yoyo: true, //reverse the animation
        repeat: -1
      })

  }, []);

  return (
    <div>
      Animated Text and used Stagger
      <div className="hero h-[100vh] flex justify-center items-center ">
        <h1 ref={h1Ref} className="text-6xl font-semibold text-red-500">
          <span>Hey ,</span>
          <span> Welcome </span>
          <span>to </span>
          <span>GSAP </span>
          <span>intro</span>
        </h1>
      </div>
      <p>simply animated and rotated boxes and rotated box2 5 more times</p>
      <div className='section-2 h-[100vh] p-5 flex '>
        <div ref={box1Ref} className='box-1 h-[200px] w-[200px] bg-red-400'></div>
        <div ref={box2Ref} className='box-2 h-[200px] w-[200px] bg-blue-700 '></div>

      </div>
      <p>Animmated and repeated box3 infite time and also used yolo in 4th</p>
      <div className='section-3 h-[100vh] p-5 flex'>

        <div ref={box3Ref} className='box-3 h-[200px] w-[200px] bg-green-700 ' ></div>
        <div ref={box4Ref} className='box-4 h-[200px] w-[200px] bg-yellow-700 ' ></div>
      </div>
      <p>Used timeline Which helps to animate one after another</p>
      <div className='section-4 h-[100vh] p-5 flex'>

        <div ref={box5Ref} className='box-5 h-[200px] w-[200px] bg-red-400 '></div>
        <div ref={box6Ref} className='box-6 h-[200px] w-[200px] bg-blue-700 '></div>
      </div>
    </div>
  );
}

export default App;