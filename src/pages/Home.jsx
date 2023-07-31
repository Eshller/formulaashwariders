import React, { useEffect, useRef } from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/HeroHome';
// import FeaturesZigZag from '../partials/FeaturesZigzag';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
// import Banner from '../partials/Banner';
import Footer from '../partials/Footer';
// import AboutUs from '../partials/About';
import Media from '../partials/Media';
import i1 from '../images/i1.png';
import i2 from '../images/i2.png';
import m1 from '../images/m1.jpeg';
import m2 from '../images/m2.jpeg';
import { useLocation } from 'react-router-dom';

function Home() {

  const location = useLocation();
  const media = useRef();

  useEffect(() => {
    if (location.hash == "#media") {
      setTimeout(() => {
        media.current.scrollIntoView();
      }, 0);
    }
  }, [location])


  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <HeroHome />
        <div className="grid gap-20">
          <div className="md:grid md:grid-cols-12 md:gap-6 items-center sm:text-center md:text-end">
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
              <div className="md:pl-4 lg:pl-12 xl:pl-16 px-4">
                <h3 className="h3 mb-3">Vision</h3>
                <p className="text-xl text-gray-400 mb-4">The team believe in collective growth of team
                  members and associated individuals to improve the
                  creative thinking, implemented on the vehicle we
                  manufacture. Every year we rethink and re-assess
                  our mistakes which are not to be performed in
                  future.</p>
              </div>
            </div>
            {/* Image */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl md:block hidden" data-aos="fade-up">
              <img className="max-w-full mx-auto md:max-w-none h-auto" src={i1} width="250" height="405" alt="Features 02" />
            </div>
          </div>
          <div className="md:grid md:grid-cols-12 md:gap-6 items-center sm:text-center md:text-end">
            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
              <div className="md:pl-4 lg:pl-12 xl:pl-16 px-4">
                <h3 className="h3 mb-3">Mission</h3>
                <p className="text-xl text-gray-400 mb-4">Our mission is to be amongst the top formula SAE
                  teams. To attract potential individuals to improve
                  the critical & creative thinking implementation in
                  engineering practices. To create a strong
                  engineering platform for upcoming young technical
                  aspirants to showcase their skills.</p>
              </div>
            </div>
            {/* Image */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl md:block hidden" data-aos="fade-up">
              <img className="max-w-full mx-auto md:max-w-none h-auto" src={i2} width="300" height="405" alt="Features 02" />
            </div>
          </div>


          <div className="md:grid md:grid-cols-12 md:gap-6 items-center sm:text-center md:text-end">
            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
              <div className="md:pl-4 lg:pl-12 xl:pl-16 px-4">
                <h3 className="h3 mb-3">FORMULA STUDENT</h3>
                <p className="text-xl text-gray-400 mb-4">Formula Student is a global student engineering and design competition in which over 800 teams from across the world participate in 14 worldwide competitions. The student-run teams are posed with a challenge to design, develop and build a single-seater open-wheel racecar  with the regulations of the Society of Automotive Engineers (SAE). The aim is not only to build a fast car but to build one which is efficient in design, cost, sales and marketability. The purpose of the competition is to give students practical experience with working on large engineering projects, preparing them for post-university work.</p>
                <p className="text-xl text-gray-400 mb-4"> The team’s hard work culminates in January at the actual Formula Student event which takes place at the Kari Motor Speedway Racing Circuit in Coimbatore. the teams demonstrate to the judges, in a series of events, that the car is fit for a variety of purposes including design methodology, manufacturing feasibility and business mindset along with the dynamic performance of the car over a week. The Formula Student competition features two main disciplines, the Static Events and the Dynamic Events. The Static events involve Design Evaluation ,Cost Analysis , Business Pitch .Dynamic events evaluate the teams based on their cars’ performance on various track events. Teams are evaluated individually for each event, and the total sum determines the overall winner.</p>
              </div>
            </div>
            {/* Image */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl md:block hidden" data-aos="fade-up">
              <img className="max-w-full mx-auto md:max-w-none h-auto pl-11 py-2 rotate-6" src={m1} width="300" height="405" alt="Features 02" />
              <img className="max-w-full mx-auto md:max-w-none h-auto pr-11 py-2 -rotate-6" src={m2} width="300" height="405" alt="Features 02" />
              {/* <img className="max-w-full mx-auto md:max-w-none h-auto" src={i2} width="300" height="405" alt="Features 02" />
              <img className="max-w-full mx-auto md:max-w-none h-auto" src={i2} width="300" height="405" alt="Features 02" /> */}
            </div>
          </div>

        </div>
        {/* <FeaturesZigZag /> */}
        {/* <AboutUs /> */}
        {/* <Testimonials /> */}


        <div ref={media} id="media">
          <Media />
        </div>
        {/* <Newsletter /> */}
      </main>

      {/* <Banner /> */}

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;