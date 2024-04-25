import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export function FitemFood(props) {
  const [isWidth, setWidth] = useState(document.documentElement.clientWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(document.documentElement.clientWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let urlCurrent = window.location.href;
  let checkUrl = (urlCurrent = urlCurrent.includes('Food-Rice-Restaurant-Location') ? true : false);
  let checkState = false;
  if (checkUrl && isWidth <= 767) {
    checkState = true;
  } else {
    checkState = false;
  }

  let elementFlex = checkUrl ? 'grid-cols-[96px_auto] grid gap-3 ' : null;
  let elementImg = checkUrl ? 'h-24 w-24 object-cover' : null;
  let nameRes = checkState ? (
    <p className={`text-sm font-bold `}>{props.title}</p>
  ) : (
    <p className={`mb-3 text-lg font-bold `}>{props.title}</p>
  );
  let elementInfo = checkUrl ? '' : null;
  return (
    <Link to={props.href} className={`h-fit w-auto ${checkState ? elementFlex : ''}`}>
      <img
        src={props.src}
        alt={props.alt}
        loading="lazy"
        className={`ttlS-rounded-md ${checkState ? elementImg : ''}`}
      />

      <div className={`max-h-48 min-h-32 w-fit`}>
        {nameRes}

        <div className=" text-base font-normal text-gray-400">
          <p className="line-clamp-1">{props.moreInfo}</p>
          <div className={`my-1 ${checkState ? 'flex-row gap-4 text-sm' : 'flex-col'} flex sm:flex-row sm:gap-2`}>
            <div className="ttlS-flex justify-normal gap-1">
              <img src="https://food.grab.com/static/images/icons/icon-star.svg" alt="star-food" className="h-6 w-6" />
              {props.rating}
            </div>
            <div className="ttlS-flex justify-normal gap-1">
              <img
                src="https://food.grab.com/static/images/icons/icon-clock.svg"
                alt="time-ship-food"
                className=" h-6 w-6"
              />
              {props.time} &nbsp;&nbsp;•&nbsp;&nbsp; {props.distance}
            </div>
          </div>

          <div className="my-2 flex flex-row items-start">
            <img
              src="https://food.grab.com/static/images/icons/icon-promo-tag.svg"
              alt="special-food"
              className="mr-2 h-6 w-6"
            />
            {props.special}
          </div>

          {props.warn !== '' && <div class="border-t pt-2">{props.warn}</div>}
        </div>
      </div>
    </Link>
  );
}
