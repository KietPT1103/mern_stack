import React, { useState } from "react";
import { images } from "../constansts";

const headerItem = [
  {
    name: "Home",
    url: "/",
    type: "link",
  },
  {
    name: "Articles",
    url: "/articles",
    type: "link",
  },
  {
    name: "Page",
    url: "/page",
    type: "dropdown",
    items: [
      {
        name: "About us",
        url: "/about",
      },
      {
        name: "Contact us",
        url: "/contact",
      },
    ],
  },
  {
    name: "Pricing",
    url: "/pricing",
    type: "link",
  },
  {
    name: "FaQ",
    url: "/faq",
    type: "link",
  },
];

const NavItem = ({ item }) => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <li className="hover:scale-110 transform transition-all duration-300 group">
      {item.type === "dropdown" ? (
        <div className="relative group p-2">
          <button
            onMouseEnter={() => setDropDown(true)}
            onMouseLeave={() => setDropDown(false)}
            className="px-3 py-2 flex items-center group-hover:text-green-dark"
          >
            {item.name}
            <div>
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path fill="none" d="M0 0h24v24H0z"></path>{" "}
                    <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
          </button>
          <ul
          onMouseEnter={() => setDropDown(true)}
          onMouseLeave={() => setDropDown(false)}
            className={`${
              dropDown ? 'top-16 opacity-100 block' : 'top-12 hidden opacity-0'
            } transition-all duration-300 ease-in-out overflow-hidden lg:absolute flex flex-col w-max lg:border lg:rounded-lg`}
          >
            {item.items.map((subItem) => (
              <li key={subItem.url}>
                <a
                  className="px-8 py-4 hover:text-green-dark inline-block w-full"
                  href={subItem.url}
                >
                  {subItem.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <a
          className="px-3 py-2  flex items-center group-hover:text-green-dark"
          href={item.url}
        >
          {item.name}
        </a>
      )}
    </li>
  );
};

const Header = () => {
  const [headeActive, setHeaderActive] = useState(false);
  const handleHeaderInvisible = () => {
    setHeaderActive((curState) => {
      return !curState;
    });
  };
  return (
    <section>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex z-50 items-center justify-between w-full bg-white px-5 py-2">
          <a href="/"><img src={images.Logo} alt="logo" className="min-w-20" width={80} /></a>

          <div className="lg:hidden">
            {headeActive ? (
              <div>
                <button
                  className={`${
                    headeActive ? "block" : "hidden"
                  } absolute top-7 right-5`}
                  onClick={handleHeaderInvisible}
                >
                  <span>
                    <svg
                      svg="true"
                      width="48px"
                      height="48px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                          fill="#000"
                        ></path>{" "}
                      </g>
                    </svg>
                  </span>
                </button>
              </div>
            ) : (
              <div>
                <button onClick={handleHeaderInvisible}>
                  <span>
                    <svg
                      svg="true"
                      width="48px"
                      height="48px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M4 6H20M4 12H20M4 18H20"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
        <div
          className={`${
            headeActive ? "right-0" : "-right-full"
          } transition-all duration-300 bg-primary lg:bg-inherit w-full fixed lg:static top-0 bottom-0 flex flex-col lg:flex-row gap-12 text-3xl items-center justify-center`}
        >
          <ul className="flex flex-col lg:flex-row gap-10 lg:gap-4 text-3xl items-center font-semibold text-white lg:text-inherit">
            {headerItem.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>
          <button className="border-2 border-green-light rounded-full px-8 py-4 text-green-light lg:border-green-dark lg:text-green-dark hover:bg-green-dark hover:text-white transition-colors duration-300">
            Sign in
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
