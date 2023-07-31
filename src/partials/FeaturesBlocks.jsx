import React from 'react';
import item1 from '../images/1.png';
import { sponsors } from '../data';
function FeaturesBlocks(props) {

  // const { data } = sponsors;
  // console.log(sponsors);
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 pt-10 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">{props.heading? (<>{props.heading}</>):(<>Unleashing Speed and Precision</>)}</h2>
            <p className="text-xl text-gray-400">{props.subheading? (<>{props.subheading}</>):(<>Ashwariders Pave the Path at Formula Bharat!</>)}</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            {sponsors.map((sponsor) => 
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]" key={sponsor.id}>
              <img src={sponsor.imgUrl} className="w-26 h-26 mb-4" alt="" />
              <h4 className="h4 mb-2">{sponsor.title}</h4>
              {/* <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p> */}
            </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
