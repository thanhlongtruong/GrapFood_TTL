import React, { useState, useEffect } from 'react';
import '../index.css';

function FHeader() {
  const [isBgColor, setBgColor] = useState('inherit');
  const [isBgImg, setBgImg] = useState('https://food.grab.com/static/images/logo-grabfood2.svg');
  const [isWidth, setWidth] = useState(document.documentElement.clientWidth);

  useEffect(() => {
    const handCroll = () => {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop === 0) {
        setBgColor('sm:bg-inherit');
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

  useEffect(() => {
    const handleResize = () => {
      setWidth(document.documentElement.clientWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  let currentURL = window.location.href;
  let state = currentURL.includes('GrapFood_TTL') ? true : false;
  let logoSm;
  if (isWidth <= 425) {
    logoSm = (
      <img
        src="https://food.grab.com/static/images/logo-grabfood2.svg"
        alt="Logo-GrapFood-ThanhLong xin tài trợ"
        className="h-8 w-[90px] sm:h-14 sm:w-36"
      />
    );
  } else {
    logoSm = (
      <img src={`${isBgImg}`} alt="Logo-GrapFood-ThanhLong xin tài trợ" className="h-8 w-[90px] sm:h-14 sm:w-36" />
    );
  }
  let shipFoodLocation;
  if (!state) {
    shipFoodLocation = (
      <div className="ttlS-flex rounded-md border border-gray-300 bg-white p-1">
        <p className="whitespace-nowrap font-semibold">Giao đến</p>
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
    );
  } else {
    shipFoodLocation = null;
  }

  return (
    <header className={`ttlS-flex ttlS-repon sticky top-0 z-10 h-12 bg-white sm:h-20 ${isBgColor}`}>
      <a href="/GrapFood_TTL" className="inline-block h-8 w-[90px] sm:h-14 sm:w-36">
        {!state ? (
          <img
            src="https://food.grab.com/static/images/logo-grabfood2.svg"
            alt="Logo-GrapFood-ThanhLong xin tài trợ"
            loading="lazy"
            className="h-8 w-[90px] sm:h-14 sm:w-36"
          />
        ) : (
          logoSm
        )}
      </a>
      {isWidth >= 1101 ? shipFoodLocation : null}
      <div className="flex h-7 w-fit flex-row gap-4 sm:h-fit">
        <a href="/" className="ttlS-header hidden sm:block">
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

        <a href="/" className="sm:ttlS-header ttlS-flex ttlS-header-sm">
          <p className="text-sm">Đăng nhập/Đăng kí</p>
        </a>

        <a href="/" className="sm:ttlS-header ttlS-header-sm ttlS-flex">
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
      </div>
    </header>
  );
}
export default FHeader;
