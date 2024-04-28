import React from 'react';
import Navber from '../navber/Navber';
import { Link } from 'react-router-dom';
import Team from '../team/Team';
import Footer from '../footer/Footer';
import Achievment from '../achivment/Achievment';
import AboutDesign from '../aboutDesign/AboutDesign';

const About = () => {
    return (
        <div>
            <Navber></Navber>
           
<div>
    
<div className="hero h-96" style={{backgroundImage: 'url(https://i.postimg.cc/4d3Vr4xT/TAL-koh-phi-phi-PLACESTHAILAND1023-09b9d347b3cd4844b4ae19e4e06a9a6d.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">About Our Program </h1>
      <p className="mb-5 ">Many modern construction companies focus on sustainable building practices, incorporating eco-friendly material energy-efficient systems and environmental conscious designs to reduce the environmental impact of their projects.</p>
     <Link to={'/'}> <button  className="btn btn-primary">Get Started</button></Link>
    </div>
  </div>
</div>
</div>


<div className='mt-10'>

<div className="hero  ">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Our tour placces</h1>
      <p className="py-6">Tour  Fresh your mind  Strength, Global Impact</p>
    
      {/* <div className="  grid md:grid-cols-3  gap-5 ">

  <div className="stat ">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title">Happy people </div>
    <div className="stat-value text-primary">25.6K</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title">Total Project </div>
    <div className="stat-value text-secondary">100+</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
       
      </div>
    </div>
    <div className="stat-value">86%</div>
    <div className="stat-title">Tasks done</div>
    <div className="stat-desc text-secondary">31 tasks remaining</div>
  </div>
  
</div> */}

<AboutDesign></AboutDesign>


    </div>
  </div>
</div>
</div>


{/* team section  */}

<Team></Team>


<Footer></Footer>
        </div>
    );
};

export default About;