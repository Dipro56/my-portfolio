import React from 'react';

const AboutMeSection = () => {
  return (
    <div className="container mx-auto about-me-section shadow-xl">
      <div className="about-me-div">
        <p className="text-3xl font-bold ">About me</p>
        <p className="text-xl mt-8 font-normal">
          Former Software Engineer at the Samsung R & D Institute, Bangladesh.
          Besides, I have worked as a short course instructor (Web programming,
          Web design, MS Office) at Institute of Information Technology,
          University of Dhaka. I have completed my BSc and MSc in Software
          Engineering from IIT, University of Dhaka.
          <br />
          <br />I have previously worked as a software engineer intern at
          Datasoft Systems Bangladesh Limited.
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
