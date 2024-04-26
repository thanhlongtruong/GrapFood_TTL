export function DetailRestaurant(props) {
  return (
    <div className="mb-6 h-fit pt-6">
      <p className="ttlS-title">{props.nameRestaurant}</p>
      <p className="line-clamp-1 text-gray-500">{props.nameFood}</p>
      <div className="my-2 flex flex-row gap-2 text-gray-500">
        <img src="https://food.grab.com/static/images/icons/icon-star.svg" alt="star-food" className="h-6 w-6" />
        {props.rating}
        <img
          src="https://food.grab.com/static/images/icons/icon-clock.svg"
          alt="time-ship-food"
          className="ml-8 h-6 w-6"
        />
        {props.time} &nbsp;&nbsp;•&nbsp;&nbsp; {props.distance}
      </div>
      <div className="flex flex-row gap-12 text-gray-500">
        <p className="font-semibold">Giờ mở cửa</p>
        {props.timeOpen}
      </div>
      <div className="my-3 flex flex-row items-start text-slate-900">
        <img
          src="https://food.grab.com/static/images/icons/icon-promo-tag.svg"
          alt="special-food"
          className="mr-2 h-6 w-6"
        />
        {props.special}
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="ttlS-header ttlS-flex h-[42px] justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="mx-3 h-6  w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
            />
          </svg>

          <p>Ngày giao hàng: </p>
          <p> &nbsp;Hôm nay</p>
        </div>
        <div className="ttlS-header ttlS-flex h-[42px] justify-start">
          <img
            src="https://food.grab.com/static/images/icons/icon-clock.svg"
            alt="time-ship-food"
            className="mx-3 h-6 w-6"
          />
          <div className="line-clamp-1">Thời gian giao hàng: </div>
          <div className="line-clamp-1"> &nbsp;Ngay bây giờ</div>
        </div>
      </div>
    </div>
  );
}
