import React, { useEffect } from 'react';
import { gsap } from 'gsap';  
import About from '../components/About';

export default function Home() {
  useEffect(() => {
    var tl = gsap.timeline();
    // let mm = gsap.matchMedia();

    // mm.add('(max-width: 380px', () => {
    //   tl.to('#video-background', {
    //     height: 0,
    //     duration: 0.5,
    //     delay: 17.5,
    //   });
    // });

    tl.to('#text', {
    opacity:1,
    // ease: 
      duration: 1, 
    }).to('#img1, #img2, #img3, #img4', {
        marginLeft: 0,
        duration:1
    })
},[])


  return (
<>
<div className='loader_bg'>
      <div className='hexagon hexx' id='hexagon'></div>
      <div className='hexagon hex1' id='hexagon'></div>
      <div className='hexagon hex2' id='hexagon'></div>
      <div className='hexagon hex3' id='hexagon'></div>
      <div className='hexagon hex4' id='hexagon'></div>
      <div className='hexagon hex5' id='hexagon'></div>
      <div className='hexagon hex6' id='hexagon'></div> 
      <div className='load_text' id='text'>
        <h1 className='loh1'>It's a Meegos world, </h1>
        <h1 className='loh2'>we are just living in it. </h1>
        <div className='images'>
        <div className="img1" id="img1">
        
        </div>
        <div className="img2" id="img2">
  
        </div>
        <div className="img3" id="img3">
  
        </div>
        <div className="img4" id="img4">
  
        </div>
        </div>
      </div>

    </div>
    <About />
</>
  );
}
