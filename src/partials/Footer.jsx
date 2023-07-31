import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import youtube from '../images/youtube.png';
function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12 place-items-center">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link to="/" className="inline-block" aria-label="Cruip">
                  {/* <svg className="w-8 h-8 fill-current text-purple-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z" />
                  </svg> */}
                  <img src={Logo} className="w-20 h-20 fill-current text-purple-600" alt="" />
                </Link>
              </div>
              <div className="text-gray-400 max-w-[400px]">Feel free to reach out to us for any inquiries or collaborations.</div>
              <div className="text-gray-100 max-w-[400px] font-bold">St. Vincent Pallotti College Of Engineering And Technology <br />Nagpur, Maharashtra 441108, IN</div>

              <div className="md:flex md:items-center pt-2 md:justify-right">

            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li className="ml-4">
                <Link to="https://www.instagram.com/formula_ashwariders/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link to="https://www.linkedin.com/company/team-ashwa-riders-go-karting/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Linkedin">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link to="https://www.youtube.com/@formulaashwariders2292" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Linkedin">
                  <img className="w-8 h-8 fill-current" src={youtube} alt="" />
                </Link>
              </li>
            </ul>
            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">Developed and maintained by <span className="text-blue-400"><a href="https://www.eshway.com" target="_blank" rel="noopener noreferrer">Eshway</a></span><br />&copy;All rights reserved.</div>
          </div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols gap-8 place-items-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6997168897997!2d79.0451529106107!3d21.004670780557817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bdc6b03bfded%3A0x51964eb66fa3ec5e!2sSt.%20Vincent%20Pallotti%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1689762090537!5m2!1sen!2sin" className="md:w-[500px] h-[250px]" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              {/* 2nd block */}
              {/* <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Products</h6>
                <ul>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Web Studio</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">DynamicBox Flex</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Programming Forms</Link>
                  </li>
                </ul>
              </div> */}

              {/* 3rd block */}
              {/* <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Resources</h6>
                <ul>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Nostrud exercitation</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Visual mockups</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Nostrud exercitation</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Visual mockups</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Nostrud exercitation</Link>
                  </li>
                </ul>
              </div> */}

              {/* 4th block */}
              {/* <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Company</h6>
                <ul>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Consectetur adipiscing</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Labore et dolore</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Consectetur adipiscing</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Labore et dolore</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Consectetur adipiscing</Link>
                  </li>
                </ul>
              </div> */}
            </div>

          </div>

          {/* Bottom area */}
          

        </div>
      </div>
    </footer>
  );
}

export default Footer;
