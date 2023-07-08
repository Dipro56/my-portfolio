import React from 'react';

const AboutMeSection = () => {
  return (
    <div className="container mx-auto about-me-section shadow-xl">
      <div className="about-me-div">
        <p className="text-3xl font-bold ">About me</p>
        <p className="text-xl mt-8 font-normal">
          I am always enthusiastic about learning new things. I always try to follow the best programming practices and provide a stable solution for any problem that i solve. Currently working as a Software Engineer (Front-end). Areas of my expertise are web and mobile application development with framework related to Javascript specially Next.js, React native framework and React library.
          <br />
          <br />Apart from this you are always welcome to poke me on having conversation about football, cricket and music.
        </p>
      </div>
      <div className="basic-info-div">
        <p className="text-3xl font-bold ">Basic Information</p>
        <div className="info-outer-div">
          <div className="info-title-div mt-7">
            <p className="text-xl font-bold py-1">Date Of Birth:</p>
            <p className="text-xl font-bold py-1">Email:</p>
            <p className="text-xl font-bold py-1">Phone:</p>
            <p className="text-xl font-bold py-1">Adress:</p>
            <p className="text-xl font-bold py-1">Language:</p>
          </div>
          <div className="info-detail-div mt-8">
            <p className="text-xl font-normal py-1">August 21, 1996</p>
            <p className="text-xl font-normal py-1">
              sadatshahriarbari@gmail.com
            </p>
            <p className="text-xl font-normal py-1">+8801717680510</p>
            <p className="text-xl font-normal py-1">
              Dhaka, Bashundahara Block-C Road 4 House 127 6-A
            </p>
            <p className="text-xl font-normal py-1">Bangla, English</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
