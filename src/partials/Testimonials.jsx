import React, { useState } from 'react';

import TestimonialImage01 from '../images/testimonial-01.jpg';
import TestimonialImage02 from '../images/testimonial-02.jpg';
import TestimonialImage03 from '../images/testimonial-03.jpg';
import prof from '../images/fac.jpeg'
import { team } from '../data.js';
function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Driven by Passion</h2>
            <p className="text-xl text-gray-400">Meet the Driven Minds Behind Formula Ashwariders</p>
          </div>

          {/* {TESTIMONIAL} */}
          <div className="max-w-sm mx-auto grid gap-8 mb-4 lg:grid-cols lg:gap-6 items-start lg:max-w-none">
            <div className="flex flex-col w-full md:w-[50%] mx-auto h-full p-6 bg-gray-800" data-aos="fade-up" key="POKemon">
                <div className="text-center">
                  <div className="relative inline-flex flex-col mb-4">
                    <img className="rounded-[10px]" src={prof} width="250" height="250" alt="Testimonial 01" />
                  </div>
                </div>
                <div className="text-gray-700 font-medium text-xl mt-6 pt-5 border-t border-gray-700">
                  <cite className="text-gray-200 not-italic">Prof. Homeshwar Nagpure </cite><a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Faculty Advisor</a>
                </div>
              </div>
            </div>
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
            {/* 1st testimonial */}

            {team.slice(1).map((member) => 
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" key={member.id}>
              <div className="text-center">
                <div className="relative inline-flex flex-col mb-4">
                  <img className="rounded-[10px]" src={member.imgUrl} width="250" height="250" alt="Testimonial 01" />
                </div>
              </div>
              <div className="text-gray-700 font-medium text-xl mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">{member.name} </cite><a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">{member.pos}</a>
              </div>
            </div>
            )}
          </div>

              </div>
            </div>
    </section>
  );
}

export default Testimonials;
