import dataOption from '../../Components/FoodRiceLocation/ChooseOption';
import { FFoodRice } from '../../Components/FoodRiceLocation/FoodRices';

export function FoodRiceRestaurantLocation() {
  return (
    <div className="h-fit w-full border border-red-600 pb-9">
      <div className="ttl-style-box-1200 h-fit flex-col gap-y-10 pb-9 pl-1 pt-9">
        <div className="ttl-style-box-1200 h-10 w-full gap-7 rounded-3xl border pl-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input type="text" placeholder="Tìm món hoặc quán ăn" className="h-full w-full" />
        </div>

        {dataOption()}
      </div>

      <div className="border-b-8"></div>

      <div className="ttl-style-box-1200 h-fit flex-col pl-1 pt-14">
        <div className="ttl-style-title-of-box flex">
          <div className="mr-3 h-full w-fit">Ưu đãi ở</div>
          <div class="line-clamp-1 text-green-600">780 Sư Vạn Hạnh, P.12, Q.10, Hồ Chí Minh, 70000, Vietnam</div>
        </div>

        <FFoodRice />
      </div>
    </div>
  );
}
