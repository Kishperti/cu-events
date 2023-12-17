import React from "react";
// import ReactTyped from "react-typed";

const About = () => {
  return (
    <div className="container h-screen mx-auto p-12 bg-[#091022] text-white font-maven">
        <div className="mr-32">
        <h1 className="text-4xl font-oswald font-bold mt-5 text-white"> <span className=" text-red-600">CHECKOUT</span> ABOUT US</h1>
        <h6 className="ml-2">WHO WE ARE!</h6>
        </div>
      
      <p className=" text-xl py-8 text-justify w-11/12 leading-8">
      Chandigarh University Academic Competitions, where innovation converges with education to create an unparalleled academic spectacle. Our team is a dynamic collective of visionaries, strategists, and go-getters who are dedicated to orchestrate events that transcend conventional boundaries. We are an ensemble of dedicated professionals, passionate about creating transformative experiences through hackathons, workshops, and various academic events
      <br />
      <br />
      Welcome to CAC, the pulse of academic vibrancy at Chandigarh University. We're dedicated to inspiring and empowering through diverse academic competitions, hackathons, and workshops. Our inclusive community values every voice, fostering an environment where curiosity thrives.
      CAC is more than events; it's a collaborative space, connecting students, faculty, and industry experts. Behind our seamless experiences is a committed team pushing the boundaries of academic engagement. Whether you're a student showcasing skills or an industry expert contributing, CAC invites you to join our journey of exploration and innovation. Welcome to a legacy of academic excellence at CAC.

      </p>

      <h1 className="text-9xl h-36 font-bold text-center opacity-30 text-white ">CAC-EVENTS</h1>
      <h1 className="border-double border-b-4 border-red-600"></h1>
    </div>
  );
};

export default About;
