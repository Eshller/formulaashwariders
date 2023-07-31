import React from 'react';
import { FaPhoneAlt, FaSearchLocation } from "react-icons/fa";
import { AiTwotoneMail, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import prof from '../images/fac.jpeg'

function Contact() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto pt-5 text-center pb-2 md:pb-2">
            <h2 className="h2">Contact Us</h2>
          </div>

          {/* {TESTIMONIAL} */}
          <div className="max-w-sm mx-auto grid gap-8 mb-4 lg:grid-cols lg:gap-6 items-start lg:max-w-none">
            <div className="flex flex-col w-full md:w-[75%] mx-auto h-full p-6 bg-gray-800" data-aos="fade-up" key="POKemon">
              <div className="text-center">
                <div className="relative inline-flex flex-col mb-4 fill-blue-200">
                  <div className="flex flex-row gap-2 p-2 justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                    Om Rode: 9370571751,Sam Jason: 8767261060,Mandar Dhopte: 9175599905
                  </div>
                  <div className="flex flex-row gap-2 p-2 justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>ashwaofficial@gmail.com
                  </div>
                  <div className="flex flex-row gap-2 p-2 justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg><a href="https://www.linkedin.com/company/team-ashwa-riders-go-karting" className="hover:text-blue-300" target='_blank' rel="noopener noreferrer">Formula Ashwariders</a>
                  </div>
                  <div className="flex flex-row gap-2 p-2 justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg><a href="https://www.instagram.com/formula_ashwariders/" className="hover:text-blue-300" target="_blank" rel="noopener noreferrer">@formulaashwariders</a>
                  </div>
                  <div className="flex flex-row gap-2 p-2 justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M384 476.1L192 421.2V35.9L384 90.8V476.1zm32-1.2V88.4L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3V394.6c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2V423.6L32.9 474.5C17.1 480.8 0 469.2 0 452.2V117.4c0-9.8 6-18.6 15.1-22.3z" /></svg>
                    Gavsi Manapur, Wardha Road, Nagpur, Maharashtra - 441108
                  </div>
                </div>
              </div>
            <div className="flex flex-wrap -mx-3">
              <div className="w-full px-3">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSecELvWhzqcOyHaRQ9xu19oTnwh8IrCXRXQygccGTjwC41jjQ/viewform?usp=sf_link">
                  <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Contact Us</button>
                </a>
              </div>
            </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
