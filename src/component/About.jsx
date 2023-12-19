import React from "react";
// import ReactTyped from "react-typed";

const About = () => {
  return (
    <div className=" w-full container h-full mx-auto pt-12 bg-[#091022] text-white font-maven">
      <div className="flex flex-col-reverse lg:flex-col px-7 lg:px-0 lg:mx-12">
        <h1 className="text-[2rem] lg:text-4xl font-oswald font-bold -mt-2 lg:mt-5 text-white"> <span className="text-[#E2012D]">CHECKOUT</span> ABOUT US</h1>
        <h6 className="ml-1 font-maven">WHO WE ARE!</h6>
      </div>
      <p className="text-lg lg:text-xl py-8 text-justify w-full px-7 leading-8 lg:px-12 text-white font-maven">
        Chandigarh University Academic Competitions, where innovation converges with education to create an unparalleled academic spectacle. Our team is a dynamic collective of visionaries, strategists, and go-getters who are dedicated to orchestrate events that transcend conventional boundaries. We are an ensemble of dedicated professionals, passionate about creating transformative experiences through hackathons, workshops, and various academic events
        <br />
        <br />
        Welcome to CAC, the pulse of academic vibrancy at Chandigarh University. We're dedicated to inspiring and empowering through diverse academic competitions, hackathons, and workshops. Our inclusive community values every voice, fostering an environment where curiosity thrives.
        CAC is more than events; it's a collaborative space, connecting students, faculty, and industry experts. Behind our seamless experiences is a committed team pushing the boundaries of academic engagement. Whether you're a student showcasing skills or an industry expert contributing, CAC invites you to join our journey of exploration and innovation. Welcome to a legacy of academic excellence at CAC.

      </p>
      <div className="w-full border-b-4 border-red-600 overflow-y-hidden mt-8">
        <h1 className="text-6xl lg:text-9xl font-oswald tracking-tight font-bold text-center opacity-30 text-white -mb-2">CAC  -  EVENTS</h1>
      </div>
    </div>
  );
};

export default About;
