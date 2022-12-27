import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import Logo from './logo';
import { getSession } from '../src/utils/contentful';

const Header = ({ setIntro, current }) => {
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    getSession().then((res) => {
      const temp = res.items.slice().sort((a, b) => {
        const d1 = new Date(a.startTime);
        const d2 = new Date(b.startTime);
        return d1.getTime() - d2.getTime();
      });
      setSessions(temp);
    })
  }, [])

  const setSession = (sessionId) => {
    if (localStorage.getItem("SessionId")) {
      localStorage.removeItem("SessionId")
    }
    localStorage.setItem("SessionId", sessionId);
  }

  return (
    <div className={styles.header} style={{ position: "relative", zIndex: "11" }}>
      <Logo />
      <nav className="px-2 bg-inherit ml-[20%]">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul className="flex flex-col p-4 mt-4  rounded-lg bg-inherit md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-inherit ">
              <li style={{ fontFamily: "Lato" }}>
                <a
                  href="/"
                  className={`block py-2 pl-3 pr-4 flex font-semibold flex-col items-center ${current === 1 ? "text-blue-700 bg-blue-700 md:text-blue-700" : "text-[#475060]"}  md:p-0 rounded md:bg-transparent  dark:bg-blue-600`}
                  aria-current="page"
                >
                  HOME
                  {current === 1 && (
                    <svg className='mt-[30px]' width="20" height="3" viewBox="0 0 20 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="20" height="3" rx="1.5" fill="#3185FC" />
                    </svg>
                  )}
                </a>
              </li>
              <li style={{ fontFamily: "Lato" }}>
                <a
                  href="/aboutUs"
                  className={`block py-2 pl-3 pr-4 font-semibold ${current === 2 ? "text-blue-700  md:text-blue-700" : "text-[#475060]"} flex flex-col items-center rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0`}
                >
                  ABOUT US
                  {current === 2 && (
                    <svg className='mt-[30px]' width="20" height="3" viewBox="0 0 20 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="20" height="3" rx="1.5" fill="#3185FC" />
                    </svg>
                  )}
                </a>
              </li>
              <li style={{ fontFamily: "Lato" }}>
                <a
                  href="/resources"
                  className={`block py-2 pl-3 pr-4 font-semibold ${current === 3 ? "text-blue-700  md:text-blue-700" : "text-[#475060]"} flex flex-col items-center rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0`}
                >
                  RESOURCES
                  {current === 3 && (
                    <svg className='mt-[30px]' width="20" height="3" viewBox="0 0 20 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="20" height="3" rx="1.5" fill="#3185FC" />
                    </svg>
                  )}
                </a>
              </li>
              <li style={{ fontFamily: "Lato" }}>
                <button className="peer px-5 py-2 flex flex-col items-center text-[#475060] rounded font-semibold  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                  UPCOMING SESSIONS
                  {current === 4 && (
                    <svg className='mt-[30px]' width="20" height="3" viewBox="0 0 20 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="20" height="3" rx="1.5" fill="#3185FC" />
                    </svg>
                  )}
                </button>
                <div className="hidden peer-hover:flex hover:flex w-[280px] flex-col bg-inherit drop-shadow-lg absolute ml-[-130px]">
                  <div className="mt-[20px]"></div>
                  {sessions.map((session, index) => (
                    <div className='flex bg-white hover:bg-[#3185FC] flex-row justify-between p-[5px] items-center' key={index}>
                      <a className="w-[85%] px-5 py-3 font-semibold  text-[#142630] hover:text-white" href="/availableSessions" onClick={() => setSession(index)}>{session.title}</a>
                      <svg width="18" height="12" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg" stroke='black' className='mr-[15px]'>
                        <path d="M11.2443 0.483251L11.617 0.116476C11.7748 -0.0388253 12.03 -0.0388253 12.1862 0.116476L17.8816 5.71914C18.0395 5.87444 18.0395 6.12556 17.8816 6.27921L12.1862 11.8835C12.0284 12.0388 11.7731 12.0388 11.617 11.8835L11.2443 11.5167C11.0848 11.3598 11.0881 11.1037 11.251 10.9501L15.7056 6.66085L0.402962 6.66085C0.179654 6.66085 0 6.48408 0 6.26434L0 5.73566C0 5.51592 0.179654 5.33914 0.402962 5.33914L15.7056 5.33914L11.251 1.04993C11.0864 0.896285 11.0831 0.640204 11.2443 0.483251Z" fill="white" />
                      </svg>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;