import React, { useState, useEffect } from 'react';
import '../index.css';

function FHeader() {
  const [isBgColor, setBgColor] = useState('inherit');
  const [isBgImg, setBgImg] = useState('https://food.grab.com/static/images/logo-grabfood2.svg');

  useEffect(() => {
    const handCroll = () => {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop === 0) {
        setBgColor('bg-inherit');
        setBgImg('https://food.grab.com/static/images/logo-grabfood-white2.svg');
      } else {
        setBgColor('bg-white shadow shadow-gray-300');
        setBgImg('https://food.grab.com/static/images/logo-grabfood2.svg');
      }
    };
    window.addEventListener('scroll', handCroll);
    return () => {
      window.removeEventListener('scroll', handCroll);
    };
  }, []);
  let currentURL = window.location.href;
  console.log(currentURL);
  let state = currentURL === 'http://localhost:3000/FE-GrapFood-TTL' ? true : false;

  return (
    <header className={`a mb-6 h-12 w-44 bg-slate-400`}>
      {/* <a href="/FE-GrapFood-TTL" className="inline-block h-8 w-[90px] sm:h-14 sm:w-36">
        {currentURL !== 'http://localhost:3000/FE-GrapFood-TTL' ? (
          <img
            src="https://food.grab.com/static/images/logo-grabfood2.svg"
            alt="Logo-GrapFood-ThanhLong xin tài trợ"
            loading="lazy"
            className="h-8 w-[90px] sm:h-14 sm:w-36"
          />
        ) : (
          <img src={`${isBgImg}`} alt="Logo-GrapFood-ThanhLong xin tài trợ" className="h-8 w-[90px] sm:h-14 sm:w-36" />
        )}
      </a> */}

      {/* {!state && (
        <div className="ttl-style-header flex h-[42px] w-96 flex-row items-center p-0 px-2 ">
          <p className="whitespace-nowrap">Giao đến</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="ml-3 mr-1 h-8 w-8 text-red-600"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <p className="line-clamp-1">780 Sư Vạn Hạnh, P.12, Q.10, Hồ Chí Minh, 70000, Vietnam</p>
        </div>
      )} */}

      {/* <div className="absolute right-0 flex h-7 w-fit flex-row gap-4 sm:h-fit">
        <a href="/" className="ttl-style-header hidden sm:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6 text-gray-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </a>

        <a href="/" className="sm:ttl-style-header ttl-style-header-sm">
          Đăng nhập/Đăng kí
        </a>

        <a href="/" className="sm:ttl-style-header ttl-style-header-sm flex">
          <span className="">VI</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="my-auto h-4 w-4 text-gray-400"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </a>
      </div> */}
    </header>
    // <header className={`${isBgColor} sticky top-0 z-10 flex h-12 w-screen bg-red-400 sm:h-20 sm:bg-white`}>
    //   <div className="lg:ttl-style-box-1200 relative min-w-full max-w-screen-sm justify-normal items-center">
    //     <a href="/FE-GrapFood-TTL" className="inline-block h-8 w-[90px] sm:h-14 sm:w-36">
    //       {currentURL !== 'http://localhost:3000/FE-GrapFood-TTL' ? (
    //         <img
    //           src="https://food.grab.com/static/images/logo-grabfood2.svg"
    //           alt="Logo-GrapFood-ThanhLong xin tài trợ"
    //           loading="lazy"
    //           className="h-8 w-[90px] sm:h-14 sm:w-36"
    //         />
    //       ) : (
    //         <img
    //           src={`${isBgImg}`}
    //           alt="Logo-GrapFood-ThanhLong xin tài trợ"
    //           className="h-8 w-[90px] sm:h-14 sm:w-36"
    //         />
    //       )}
    //     </a>

    //     {!state && (
    //       <div className="ttl-style-header flex h-[42px] w-96 flex-row items-center p-0 px-2 ">
    //         <p className="whitespace-nowrap">Giao đến</p>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke-width="1.5"
    //           stroke="currentColor"
    //           class="ml-3 mr-1 h-8 w-8 text-red-600"
    //         >
    //           <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    //           <path
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
    //           />
    //         </svg>
    //         <p className="line-clamp-1">780 Sư Vạn Hạnh, P.12, Q.10, Hồ Chí Minh, 70000, Vietnam</p>
    //       </div>
    //     )}

    //     <div className="absolute right-0 flex h-fit w-auto flex-row">
    //       <a href="/" className="ttl-style-header">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke-width="1.5"
    //           stroke="currentColor"
    //           className="h-6 w-6 text-gray-400"
    //         >
    //           <path
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
    //           />
    //         </svg>
    //       </a>

    //       <a href="/" className="ttl-style-header mx-3">
    //         Đăng nhập/Đăng kí
    //       </a>

    //       <a href="/" className="ttl-style-header flex">
    //         <span className="">VI</span>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke-width="1.5"
    //           stroke="currentColor"
    //           class="my-auto h-4 w-4 text-gray-400"
    //         >
    //           <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    //         </svg>
    //       </a>
    //     </div>
    //   </div>
    // </header>
  );
}
export default FHeader;
