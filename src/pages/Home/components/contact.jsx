import React from "react";
import "./contact.scss";

export const Contact = () => {
  return (
    <>
      {/* <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b   p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="  flex justify-center items-center text-4xl font-bold p-4 border-b-4 font-[spaceB] border-[#0FB807]  ">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              SEND IT
            </button>
          </form>
        </div>
      </div>
    </div>  */}

      {/* <div className="background">
  <div className="container">
    <div className="screen">
      <div className="screen-header">
        <div className="screen-header-left">
          <div className="screen-header-button close" />
          <div className="screen-header-button maximize" />
          <div className="screen-header-button minimize" />
        </div>
        <div className="screen-header-right">
          <div className="screen-header-ellipsis" />
          <div className="screen-header-ellipsis" />
          <div className="screen-header-ellipsis" />
        </div>
      </div>
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div className="app-contact">CONTACT INFO : +212 621 96 31 72</div>
        </div>
        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
              <input
                className="app-form-control"
                placeholder="NAME"
                defaultValue=""
              />
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="EMAIL" />
            </div>
            
            <div className="app-form-group message">
              <input className="app-form-control" placeholder="MESSAGE" />
            </div>
            <div className="app-form-group buttons">
              <button className="app-form-button">CANCEL</button>
              <button className="app-form-button">SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="credits">
      
      <a
       
      >
        <svg className="dribbble" viewBox="0 0 200 200">
          <g stroke="#ffffff" fill="none">
            
            
            
            
            
          </g>
        </svg>
      
      </a>
    </div>
  </div>
</div> */}

      {/* <div className="font-[sans-serif] max-w-6xl mx-auto relative  rounded-3xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] overflow-hidden p-8">
  <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-blue-400" />
  <div className="absolute -bottom-6 -left-0 w-24 h-20 rounded-tr-[40px] bg-teal-200" />
  <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-blue-400" />
  <div className="absolute -bottom-6 -right-0 w-24 h-20 rounded-tl-[40px] bg-blue-300" />
  <div className="grid md:grid-cols-2">
    <div className="text-center p-6 xl:p-10 flex flex-col items-center justify-center">
      <h2 className="text-3xl text-blue-500 font-bold">Contact Us</h2>
      <img
        src="https://readymadeui.com/contact.webp"
        className="mt-4 shrink-0 w-full"
      />
    </div>
    <form className="p-6 xl:p-10">
      <div className="max-w-sm mx-auto space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full bg-gray-100 rounded-full py-3 px-6 text-sm outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-gray-100 rounded-full py-3 px-6 text-sm outline-none"
        />
        <input
          type="email"
          placeholder="Phone No."
          className="w-full bg-gray-100 rounded-full py-3 px-6 text-sm outline-none"
        />
        <textarea
          placeholder="Message"
          rows={6}
          className="w-full bg-gray-100 rounded-3xl px-6 text-sm pt-3 outline-none"
          defaultValue={""}
        />
        <button
          type="button"
          className="text-white w-full relative bg-blue-500 hover:bg-blue-600 font-semibold rounded-full text-sm px-6 py-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16px"
            height="16px"
            fill="#fff"
            className="mr-2 inline"
            viewBox="0 0 548.244 548.244"
          >
            <path
              fillRule="evenodd"
              d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
              clipRule="evenodd"
              data-original="#000000"
            />
          </svg>
          Send Message
        </button>
      </div>
    </form>
  </div>
</div> */}

      <div name="contact">
        <section className="flex justify-center items-center ">
          <div className="flex justify-center items-center lg:w-[70%] w-[93%]">
            <div className="container px-6 py-12 mx-auto">
              <div className="lg:flex lg:items-center lg:-mx-6">
                <div className="lg:w-1/2 lg:mx-6">
                  <h1 className="text-4xl font-bold lg:inline text-center   border-b-4 border-[#0FB807] font-[spaceB]  text-gray-800    lg:p-1 p-3 capitalize dark:text-white lg:text-3xl ">
                    Contact
                  </h1>
                  <div className="mt-6 space-y-8 md:mt-8">
                    <p className="flex items-start -mx-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                        Morocco , Casablanca
                      </span>
                    </p>
                    <p className="flex items-start -mx-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                        (+212) 621-96-31-72
                      </span>
                    </p>
                    <p className="flex items-start -mx-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                        zaki44y@gmail.com
                      </span>
                    </p>
                  </div>
                </div>
                <div className="mt-8 lg:w-1/2 lg:mx-6">
                  <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                    <h1 className="text-lg font-medium text-gray-700">
                      Contact Me
                    </h1>
                    <form action="https://getform.io/f/jawllelb" method="POST" className="mt-6">
                      <div className="flex-1">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Tape your Full Name"
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>
                      <div className="flex-1 mt-6">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                          Email address
                        </label>
                        <input
                          type="email"
                          name="name"
                          placeholder="Tape Your Adresse"
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>
                      <div className="w-full mt-6">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                          Message
                        </label>
                        <textarea
                        type="text" name="message"
                          className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                      <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        SUMBIT
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
