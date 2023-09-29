import React, { useEffect } from 'react';
import './index.css';
import gsap from 'gsap';

function Svg() {
  useEffect(() => {
    const headArc = document.querySelector('#headArc');
    const headRot = document.querySelector('#headRot');
    const ball = document.querySelector('#ball');

    // Define your GSAP animation timeline here
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    tl.from(ball, 2, {
      attr: {
        cy: -1000,
        cx: 150,
      },
      ease: 'bounce.out', // Use GSAP easing function
    })
      .to(ball, 4, {
        attr: {
          cx: 500,
        },
        ease: 'sine.inOut', // Use GSAP easing function
      }, '-=2')
      .to(headRot, 2.3, {
        rotation: -45,
        delay: 1,
        ease: 'sine.out', // Use GSAP easing function
      })
      .to(headRot, 0.5, {
        rotation: -55,
        delay: 1,
        ease: 'sine.inOut', // Use GSAP easing function
      })
      .to(headArc, 0.5, {
        rotation: 5,
        ease: 'sine.inOut', // Use GSAP easing function
      }, '-=0.3')
      .to(ball, 0.3, {
        attr: {
          cx: 510,
        },
      }, '-=0.5')
      .to(ball, 1, {
        attr: {
          cx: 550,
        },
        delay: 1,
      })
      .to(headRot, 0.8, {
        rotation: -80,
      }, '-=0.8')
      .to(headArc, 0.8, {
        rotation: 37,
      }, '-=0.7');

    // Add the rest of your animation steps here

  }, []);


  return (
    <div className="svg-container">
      <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
        <defs>
        </defs>
        <g id="wholeGroup">
        <g id="base">
                <path fill="#FFFFFF" stroke="#000000" strokeWidth="8" stroke-miterlimit="10" d="M745.3,352.3l0,52.5c0,3.3-2.7,6-6,6h0
                c-3.3,0-6-2.7-6-6l0-52.5c0-3.3,2.7-6,6-6l0,0C742.6,346.2,745.3,349,745.3,352.3z"/>
            <path fill="#FFFFFF" stroke="#000000" stroke-width="8" stroke-linecap="round" stroke-miterlimit="10" d="M733.2,405.7
                c-5.9-0.3-11.8-0.6-17.7-0.8c-13.3-0.7-23.6-12.1-23.6-25.3c0,0,0,0,0,0c0-13.2,10.3-25.6,23.6-26.3c5.6-0.4,11.1-0.7,16.7-1.1"/>
            
        <circle fill="#1E7FF4" stroke="#000000" stroke-width="8" stroke-linecap="round" stroke-miterlimit="10" cx="714.2" cy="379.5" r="9.7"/> -->
        </g>
        <g id="headArc">
        <line id="neck" fill="none" stroke="#000000" stroke-width="8" stroke-linecap="round" stroke-miterlimit="10" x1="700" y1="276" x2="700" y2="360.7"/>   
        <g id="headRot">
            <path fill="#FFFFFF" stroke="#000000" stroke-width="8" stroke-miterlimit="10" d="M712.1,288h-27.7c-4.3,0-7.9-3.6-7.9-7.9v-0.7
                c0-4.3,3.6-7.9,7.9-7.9h27.7c4.3,0,7.9,3.6,7.9,7.9v0.7C720,284.4,716.4,288,712.1,288z"/>
            
                <polygon fill="#FFFFFF" stroke="#000000" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
                644.5,227 612.8,245.2 581,263.4 581,227 581,190.6 612.8,208.8 	"/>
            <path fill="#FFFFFF" stroke="#000000" stroke-width="8" stroke-miterlimit="10" d="M750.5,271.5H621.4c-5,0-9-4-9-9v-72
                c0-4.9,4-9,9-9h129.1c5,0,9,4.1,9,9v72C759.5,267.5,755.5,271.5,750.5,271.5z"/>
            
                <circle fill="#1E7FF4" stroke="#000000" stroke-width="8" stroke-linecap="round" stroke-miterlimit="10" cx="640" cy="203.7" r="9.7"/>
        </g>
        </g>
            <circle id="ball" cx="300" cy="406" r="13"  fill="#FFF" stroke="none" stroke-width="4"/>

        <g id="popGroup" fill="none" stroke="#FFFFFF" stroke-width="3">
            <line x1="46" y1="46" x2="27.2" y2="0.6"/>
            <line x1="46" y1="46" x2="64.9" y2="0.6"/>
            <line x1="46" y1="46" x2="91.5" y2="27.2"/>
            <line x1="46" y1="46" x2="91.5" y2="64.9"/>
            <line x1="46" y1="46" x2="64.9" y2="91.5"/>
            <line x1="46" y1="46" x2="27.2" y2="91.5"/>
            <line x1="46" y1="46" x2="0.6" y2="64.9"/>
            <line x1="46" y1="46" x2="0.6" y2="27.2"/>
        </g>
            <line x1="100" y1="421" x2="600" y2="421" fill="none" stroke="#000" stroke-width="3"  stroke-miterlimit="10"/>  
            <line x1="599" y1="420" x2="599" y2="550" fill="none" stroke="#000" stroke-width="3"  stroke-miterlimit="10"/>    
        </g>
        </svg>
    </div>
  );
}

export default Svg;
