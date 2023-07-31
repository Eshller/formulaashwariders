import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
// import Banner from '../partials/Banner';

function ContactUs() {
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

        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-5 md:pb-15">
                <h1 className="h1">Contact Us</h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                {/* <div className="flex items-center my-6">
                  <div className="border-t border-gray-700 border-dotted grow mr-3" aria-hidden="true"></div>
                  <div className="text-gray-400">Or, sign in with your email</div>
                  <div className="border-t border-gray-700 border-dotted grow ml-3" aria-hidden="true"></div>
                </div> */}
                <form action="https://docs.google.com/forms/d/e/1FAIpQLSecELvWhzqcOyHaRQ9xu19oTnwh8IrCXRXQygccGTjwC41jjQ/viewform?usp=sf_link">
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="name">NAME</label>
                      <input readOnly="readOnly" type="email" className="form-input w-full text-gray-300 py-2 my-1 placeholder:text-blue-400 placeholder-shown:border-gray-500" placeholder="Om Rode: 9370571751" />
                      <input readOnly="readOnly" type="email" className="form-input w-full text-gray-300 py-2 my-1 placeholder:text-blue-400 placeholder-shown:border-gray-500" placeholder="Sam Jason: 8767261060" />
                      <input readOnly="readOnly" type="email" className="form-input w-full text-gray-300 py-2 my-1 placeholder:text-blue-400 placeholder-shown:border-gray-500" placeholder="Mandar Dhopte: 9175599905" />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">EMAIL</label>
                      <input disabled type="email" className="form-input w-full text-gray-300 py-2 my-1 placeholder:text-blue-400 placeholder-shown:border-gray-500" placeholder="ashwaofficial@gmail.com" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="linkedin">LinkedIn</label>
                      <a href="https://www.linkedin.com/company/team-ashwa-riders-go-karting" target='_blank' rel="noopener noreferrer"><input disabled type="email" className="form-input w-full text-gray-300 py-2 my-1 placeholder:text-blue-400 placeholder-shown:border-gray-500 hover:cursor-pointer" placeholder="Formula Ashwariders" required /></a>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="insta">Instagram</label>
                      <a href="https://www.instagram.com/formula_ashwariders/" target="_blank" rel="noopener noreferrer"><input disabled type="text" className="form-input w-full text-gray-300 py-2 my-1 placeholder:text-blue-400 placeholder-shown:border-gray-500 hover:cursor-pointer" placeholder="@formulaashwariders" required /></a>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="add">Address</label>
                    <textarea name="" disabled id="" cols="5" rows="2" className="form-input w-full text-gray-500 py-2 my-1 hover:cursor-pointer" defaultValue="Gavsi Manapur, Wardha Road, Nagpur, Maharashtra - 441108" />
                    </div>
                  </div>
                  {/* <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox" />
                          <span className="text-gray-400 ml-2">Keep me signed in</span>
                        </label>
                        <Link to="/reset-password" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Forgot Password?</Link>
                      </div>
                    </div>
                  </div> */}
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                        <a href="#">
                            <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Contact Us</button>
                        </a>
                    </div>
                  </div>
                </form>
                {/* <div className="text-gray-400 text-center mt-6">
                  Don’t you have an account? <Link to="/signup" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Sign up</Link>
                </div> */}
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* <Banner /> */}

    </div>
  );
}

export default ContactUs;