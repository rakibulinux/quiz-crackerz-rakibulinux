import React from "react";
import { Link } from "react-router-dom";
// import favicon from "../../public/favicon.ico";

const Footer = () => {
  return (
    <footer className="px-4 divide-y  text-gray-800">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <Link className="flex justify-center space-x-3 lg:justify-start">
            <svg
              version="1.2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 296 296"
              width="34"
              height="34"
            >
              <defs>
                <image
                  width="264"
                  height="160"
                  id="img1"
                  href="data:image/png;base64,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"
                />
              </defs>
              <style></style>
              <use href="#img1" x="16" y="74" />
            </svg>
            <span className="self-center text-2xl font-semibold m-0">
              Rakib Quiz
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-gray-50">Product</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/blog">Features</Link>
              </li>
              <li>
                <Link to="/blog">Integrations</Link>
              </li>
              <li>
                <Link to="/blog">Pricing</Link>
              </li>
              <li>
                <Link to="/blog">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-gray-50">Smart Home</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/blog">Privacy</Link>
              </li>
              <li>
                <Link to="/blog">Terms of Service</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase text-gray-50">Developers</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/blog">Public API</Link>
              </li>
              <li>
                <Link to="/blog">Documentation</Link>
              </li>
              <li>
                <Link to="/blog">Guides</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase text-gray-50">Social media</div>
            <div className="flex justify-start space-x-3">
              <Link
                to="/blog"
                title="Facebook"
                className="flex items-center p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                </svg>
              </Link>
              <Link
                to="/blog"
                title="Twitter"
                className="flex items-center p-1"
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                </svg>
              </Link>
              <Link
                to="/blog"
                title="Instagram"
                className="flex items-center p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center text-gray-400">
        © 2022 Rakib Quiz Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
