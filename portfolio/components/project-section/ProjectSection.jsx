import Image from 'next/image';
import React from 'react';

const ProjectSection = () => {
  return (
    <>
      <div className='flex justify-center text-3xl font-bold mt-24 mb-6'>Projects</div>
      <div className="container mx-auto project-section">
        <div className=" lock max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
          <Image
            height={700}
            width={500}
            src={'/assets/shadhin.PNG'}
            alt="Image"
          />
          <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white my-5">
            Shadhin
          </h5>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white my-5">
            Type: <span className="font-normal">Professional</span>
          </h5>
          <p className="font-normal text-xl text-gray-700 dark:text-gray-400 py-4">
            A Bangladeshi audio and video streaming platform over than million
            users globally.
          </p>

          <p className="font-bold text-xl">
            Technology (Frontend):{' '}
            <span className="font-normal">
              Javascript, Next JS, Redux, Bootstrap, Material UI
            </span>
          </p>

          <div className="link-button-div ">
            <button className="link-button text-md">Live link</button>
          </div>
        </div>

        <div className=" lock max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
          <div>
            <Image
              height={100}
              width={500}
              src={'/assets/daily.PNG'}
              alt="Image"
            />
          </div>
          <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white my-5">
            Dailyhub
          </h5>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white my-5">
            Type: <span className="font-normal">Professional</span>
          </h5>
          <p className="font-normal text-xl text-gray-700 dark:text-gray-400 py-4">
            Worked in this project at Gakk Media. It is an Audio streaming
            service.
          </p>

          <p className="font-bold text-xl">
            Technology (Frontend):{' '}
            <span className="font-normal">
              Javascript, Next JS, Redux toolkit, Tailwind
            </span>
          </p>

          <div className="link-button-div ">
            <button className="link-button text-md">Live link</button>
          </div>
        </div>

        <div className=" lock max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
          <Image
            height={700}
            width={500}
            src={'/assets/astha.PNG'}
            alt="Image"
          />
          <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white my-5">
            Asthamusic
          </h5>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white my-5">
            Type: <span className="font-normal">Professional</span>
          </h5>
          <p className="font-normal text-xl text-gray-700 dark:text-gray-400 py-4">
            Exclusively made for Shadhin's client Brac Bank and it is integrated
            in Brac Bank's Astha App.
          </p>

          <p className="font-bold text-xl">
            Technology (Frontend):{' '}
            <span className="font-normal">
              Javascript, Next JS, Redux, Bootstrap, Material UI
            </span>
          </p>

          <div className="link-button-div ">
            <button className="link-button text-md">Live link</button>
          </div>
        </div>

        <div className=" lock max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
          <Image
            height={700}
            width={500}
            src={'/assets/mini.PNG'}
            alt="Image"
          />
          <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white my-5">
            Mini E-commerce
          </h5>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white my-5">
            Type: <span className="font-normal">Internship training</span>
          </h5>
          <p className="font-normal text-xl text-gray-700 dark:text-gray-400 py-4">
            It was one of the evaluation projects during training at Astha IT.
          </p>

          <p className="font-bold text-xl">
            Technology (Frontend):{' '}
            <span className="font-normal">Javascript, Next JS, Bootstrap.</span>
          </p>

          <div className="link-button-div ">
            <button className="link-button text-md">Github link</button>
          </div>
        </div>

        <div className=" lock max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
          <Image height={700} width={500} src={'/assets/sms.PNG'} alt="Image" />
          <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white my-5">
            Student Management System
          </h5>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white my-5">
            Type: <span className="font-normal">Internship training</span>
          </h5>
          <p className="font-normal text-xl text-gray-700 dark:text-gray-400 py-4">
            It was one of the evaluation projects during training at Astha IT.
          </p>

          <p className="font-bold text-xl">
            Technology: <span className="font-normal">C#</span>
          </p>

          <div className="link-button-div ">
            <button className="link-button text-md">Github link</button>
          </div>
        </div>

        <div className=" lock max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
          <Image height={700} width={500} src={'/assets/nilam.PNG'} alt="Image" />
          <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white my-5">
            Nilamboard
          </h5>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white my-5">
            Type: <span className="font-normal">Personal</span>
          </h5>
          <p className="font-normal text-xl text-gray-700 dark:text-gray-400 py-4">
            It is a project for doing auction and team distrubution for making FIFA tournament easier. Currently in testing phase.
          </p>

          <p className="font-bold text-xl">
            Technology: <span className="font-normal">Typescript, Javascript, Node,Express JS, Mongodb</span>
          </p>

          <div className="link-button-div ">
            <button className="link-button text-md">Github link</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
