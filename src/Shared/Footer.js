import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../src/assets/logo/logo.png";

const Footer = () => {
  return (
    <footer className="px-2 divide-y  text-gray-600 bg-black py-12 mt-10">
      <div className="container flex flex-col items-center content-center py-5 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/4">
          <Link
            to={"/home"}
            aria-label="QuiZone"
            title="QuiZone"
            className="inline-flex items-center"
          >
            <img src={logo} alt="" height={50} width={80} />
            <p className="pl-3 text-xl font-bold text-white">PickFood</p>
          </Link>
        </div>
        <div className="grid grid-cols-2 items-center text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-white font-semibold">
              PRODUCT
            </h3>
            <ul className="space-y-1">
              <li>
                <Link>Branding</Link>
              </li>
              <li>
                <Link>Design</Link>
              </li>
              <li>
                <Link>Pricing</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase  text-white font-semibold">
              SERVICES
            </h3>
            <ul className="space-y-1">
              <li>
                <Link>Privacy</Link>
              </li>
              <li>
                <Link>Terms of Service</Link>
              </li>
              <li>
                <Link>FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase  text-white font-semibold">ABOUT ME</h3>
            <ul className="space-y-1">
              <li>
                <Link>Services</Link>
              </li>
              <li>
                <Link>Documentation</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="flex justify-center content-center items-center space-x-2">
              <a href="https://www.facebook.com/mimsa.mubassera.7">
                <FaFacebook className="text-3xl text-white hover:text-[#EF8E33] transition-all duration-500" />
              </a>
              <a href="https://www.linkedin.com/in/safayet-nur/">
                <FaLinkedin className="text-3xl mx-8 text-white hover:text-[#EF8E33] transition-all duration-500" />
              </a>
              <FaInstagram className="text-3xl text-white hover:text-[#EF8E33] transition-all duration-500" />
            </div>
            <form>
              <fieldset className="form-control w-80">
                <label className="label">
                  <span className="label-text text-white invisible lg:visible">
                    Enter your email address
                  </span>
                </label>
                <div className="relative invisible lg:visible md:visible">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    className="input input-bordered w-full pr-16"
                  />
                  <button className="an border !bg-[#EF8E33] !px-8 py-[13px] ml-3 !text-white absolute top-0 right-0 rounded-l-none">
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
