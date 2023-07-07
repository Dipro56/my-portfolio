import React from 'react';
import Navbar from '../navbar/Navbar';
import Image from 'next/image';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const UpperSection = () => {
  return (
    <div className="upper-section-bg">
      <Navbar />
      <div className="profile-image-section ">
        <Image
          className="border-radius"
          height={200}
          width={200}
          src={'/assets/me.jpg'}
        />
      </div>
      <div className="name-profession-section">
        <p className="text-5xl font-semibold">Sadat Shahriar Bari</p>
      </div>
      <div className="name-profession-section">
        <p className="text-2xl font-semibold">Software Engineer | Learner</p>
      </div>
      <div className="button-div">
        <button className="cv-button text-md">Download CV</button>
      </div>
      <div className="round-button-div">
        <button className="round-button">
          <FaFacebookF className="custom-icon-size" />
        </button>
        <button className="round-button">
          <FaLinkedinIn className="custom-icon-size" />
        </button>
        <button className="round-button">
          <FaGithub className="custom-icon-size" />
        </button>
      </div>
    </div>
  );
};

export default UpperSection;
