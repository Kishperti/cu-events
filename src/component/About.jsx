import React from "react";
import about from "../assets/about.png";

const About = () => {
  return (
    <div className=" w-full container h-full mx-auto p-12 bg-[#091022] text-white font-maven">
      <div className="flex flex-col-reverse lg:flex-col">
        <h1 className="text-[2rem] lg:text-4xl font-oswald font-bold -mt-2 lg:mt-5 text-white"> <span className="text-[#E2012D]">CHECKOUT</span> ABOUT US</h1>
        <h6 className="ml-1 font-maven">WHO WE ARE!</h6>
      </div>
      <div className="flex flex-row items-center justify-center w-full relative mt-12 h-full">
        <img src={about} alt="" className="h-[90vh] w-1/2"/>
        <div className="grid place-items-center px-8 rounded-lg w-[60%] -ml-[20%] bg-[#000000d4]">
          <p className="text-lg lg:text-xl py-8 text-justify w-full px-7 leading-8 lg:px-12 text-white font-maven z-20">
            Chandigarh University Academic Competitions, where innovation converges with education to create an unparalleled academic spectacle. Our team is a dynamic collective of visionaries, strategists, and go-getters who are dedicated to orchestrate events that transcend conventional boundaries. We are an ensemble of dedicated professionals, passionate about creating transformative experiences through hackathons, workshops, and various academic events
            <br />
            <br />
            Welcome to CAC, the pulse of academic vibrancy at Chandigarh University. We're dedicated to inspiring and empowering through diverse academic competitions, hackathons, and workshops. Our inclusive community values every voice, fostering an environment where curiosity thrives.
            CAC is more than events; it's a collaborative space, connecting students, faculty, and industry experts. Behind our seamless experiences is a committed team pushing the boundaries of academic engagement. Whether you're a student showcasing skills or an industry expert contributing, CAC invites you to join our journey of exploration and innovation. Welcome to a legacy of academic excellence at CAC.

          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
