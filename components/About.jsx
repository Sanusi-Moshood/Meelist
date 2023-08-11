import React from 'react'

const About = () => {
  return (
    <div className='about'>
            <div className='hexagon' id='hexagon'></div>
      <div className='hexagon hex1' id='hexagon'></div>
      <div className='hexagon hex2' id='hexagon'></div>
      <div className='hexagon hex3' id='hexagon'></div>
      <div className='hexagon hex4' id='hexagon'></div>
      <div className='hexagon hex5' id='hexagon'></div>
      <div className='hexagon hex6' id='hexagon'></div> 
        <div className='about_cont'>
          <div className='abhead'>
              <h1 className='abhead'>Coming Soon to </h1>
            <span>Solana</span>
          </div>
          

            <div className='abtcent'>
            <div className="centhead">
<h1>10000 </h1>
                <span>TOTAL SUPPLY</span>
</div >
<div className="centinfo">
  <div>
    <h3>4800</h3>
    <span>whitelist mint</span>
  </div>
  <div>
    <h3>4444</h3>
    <span>reserved for smyths</span>
  </div>
  <div>
    <h3>500</h3>
    <span>public mint</span>
  </div>
  <div>
    <h3>256</h3>
    <span>treasury/team/marketing</span>
  </div>
</div>
            </div>

            <div className="mint">
              <span>Mint price and date to be released soon.</span>
            </div>
        </div>
    </div>
  )
}

export default About