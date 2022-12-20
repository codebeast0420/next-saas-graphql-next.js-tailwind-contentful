import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Logo from './logo';

const Header = ({ intro, setIntro }) => {
  return (
    <div className={styles.header} style={{ position: "relative", zIndex: "11" }}>
      <Logo />
      <nav className="px-2 bg-inherit ml-[20%]">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul className="flex flex-col p-4 mt-4  rounded-lg bg-inherit md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-inherit ">
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="/aboutUs"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  ABOUT US
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  WHAT YOU WILL GAIN
                </a>
              </li>
              <li>
                <button className="peer px-5 py-2  text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">UPCOMING SESSIONS</button>
                <div className="hidden peer-hover:flex hover:flex w-[280px] flex-col bg-inherit drop-shadow-lg absolute ml-[-130px]">
                  <div className="mt-[20px]"></div>
                  <div className='flex bg-white hover:bg-[#3185FC] flex-row justify-between p-[5px]'>
                    <a className="px-5 py-3 " href="#" onClick={() => setIntro(true)}>Introduction To The Problems <br /> And Power Of Social Media</a>
                    <svg width="18" height="12" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg" stroke='black' className='mr-[15px] mt-[27px]'>
                      <path d="M11.2443 0.483251L11.617 0.116476C11.7748 -0.0388253 12.03 -0.0388253 12.1862 0.116476L17.8816 5.71914C18.0395 5.87444 18.0395 6.12556 17.8816 6.27921L12.1862 11.8835C12.0284 12.0388 11.7731 12.0388 11.617 11.8835L11.2443 11.5167C11.0848 11.3598 11.0881 11.1037 11.251 10.9501L15.7056 6.66085L0.402962 6.66085C0.179654 6.66085 0 6.48408 0 6.26434L0 5.73566C0 5.51592 0.179654 5.33914 0.402962 5.33914L15.7056 5.33914L11.251 1.04993C11.0864 0.896285 11.0831 0.640204 11.2443 0.483251Z" fill="white" />
                    </svg>
                  </div>
                  <div className='flex bg-white hover:bg-[#3185FC] flex-row justify-between p-0.5'>
                    <a className="px-5 py-3" href="#">Creating Your Social Media <br /> Presense And Profile</a>
                    <svg width="18" height="12" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg" stroke='black' className='mr-[15px] mt-[17px]'>
                      <path d="M11.2443 0.483251L11.617 0.116476C11.7748 -0.0388253 12.03 -0.0388253 12.1862 0.116476L17.8816 5.71914C18.0395 5.87444 18.0395 6.12556 17.8816 6.27921L12.1862 11.8835C12.0284 12.0388 11.7731 12.0388 11.617 11.8835L11.2443 11.5167C11.0848 11.3598 11.0881 11.1037 11.251 10.9501L15.7056 6.66085L0.402962 6.66085C0.179654 6.66085 0 6.48408 0 6.26434L0 5.73566C0 5.51592 0.179654 5.33914 0.402962 5.33914L15.7056 5.33914L11.251 1.04993C11.0864 0.896285 11.0831 0.640204 11.2443 0.483251Z" fill="white" />
                    </svg>
                  </div>
                  <div className='flex bg-white hover:bg-[#3185FC] flex-row justify-between p-0.5'>
                    <a className="px-5 py-3" href="#">Who Can You Trust?</a>
                    <svg width="18" height="12" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg" stroke='black' className='mr-[15px] mt-[17px]'>
                      <path d="M11.2443 0.483251L11.617 0.116476C11.7748 -0.0388253 12.03 -0.0388253 12.1862 0.116476L17.8816 5.71914C18.0395 5.87444 18.0395 6.12556 17.8816 6.27921L12.1862 11.8835C12.0284 12.0388 11.7731 12.0388 11.617 11.8835L11.2443 11.5167C11.0848 11.3598 11.0881 11.1037 11.251 10.9501L15.7056 6.66085L0.402962 6.66085C0.179654 6.66085 0 6.48408 0 6.26434L0 5.73566C0 5.51592 0.179654 5.33914 0.402962 5.33914L15.7056 5.33914L11.251 1.04993C11.0864 0.896285 11.0831 0.640204 11.2443 0.483251Z" fill="white" />
                    </svg>
                  </div>
                  <div className='flex bg-white hover:bg-[#3185FC] flex-row justify-between p-0.5'>
                    <a className="px-5 py-3" href="#">Finding The Right Place And <br /> Approched The Get Engaged</a>
                    <svg width="18" height="12" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg" stroke='black' className='mr-[15px] mt-[17px]'>
                      <path d="M11.2443 0.483251L11.617 0.116476C11.7748 -0.0388253 12.03 -0.0388253 12.1862 0.116476L17.8816 5.71914C18.0395 5.87444 18.0395 6.12556 17.8816 6.27921L12.1862 11.8835C12.0284 12.0388 11.7731 12.0388 11.617 11.8835L11.2443 11.5167C11.0848 11.3598 11.0881 11.1037 11.251 10.9501L15.7056 6.66085L0.402962 6.66085C0.179654 6.66085 0 6.48408 0 6.26434L0 5.73566C0 5.51592 0.179654 5.33914 0.402962 5.33914L15.7056 5.33914L11.251 1.04993C11.0864 0.896285 11.0831 0.640204 11.2443 0.483251Z" fill="white" />
                    </svg>
                  </div>
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