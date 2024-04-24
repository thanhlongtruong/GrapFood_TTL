export function FitemFood(props) {
  return (
    <a href={props.href} className="h-fit w-72">
      <img src={props.src} alt={props.alt} loading="lazy" className="ttl-style-rounded-md-img-food" />

      <div className="max-h-48 min-h-32 w-fit">
        <p className="mb-3 text-lg font-bold">{props.title}</p>

        <div className=" text-base font-normal text-gray-400">
          <p className="line-clamp-1">{props.moreInfo}</p>
          <div className="my-1 flex flex-row gap-2">
            <img src="https://food.grab.com/static/images/icons/icon-star.svg" alt="star-food" className="h-6 w-6" />
            {props.rating}
            <img
              src="https://food.grab.com/static/images/icons/icon-clock.svg"
              alt="time-ship-food"
              className="ml-4 h-6 w-6"
            />
            {props.time} &nbsp;&nbsp;•&nbsp;&nbsp; {props.distance}
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
    </a>
  );
}
