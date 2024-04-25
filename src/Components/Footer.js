import '../index.css';
import ItemAboutFooter from '../Props/DataFooter/dataItemAboutGrapFoodFooter';
import image_fb from '../images/facebook.png';
import image_instar from '../images/instagram.png';
import image_twitter from '../images/twitter.png';

function FItemAboutFooter(props) {
  return <div className={`font-medium text-white ${props.className}`}>{props.children}</div>;
}
const items = [
  {
    id: 0,
    src: '',
    ids: 0,
    title: 'Về GrabFood',
  },
  {
    id: 1,
    src: '',
    ids: 0,
    title: 'Về Grab',
  },
  {
    id: 2,
    src: '',
    ids: 0,
    title: 'Blog',
  },
  {
    id: 3,
    src: '',
    ids: 1,
    title: 'Mở quán trên GrabFood',
  },
  {
    id: 4,
    src: '',
    ids: 1,
    title: 'Trở thành tài xế Grab',
  },
  {
    id: 5,
    src: '',
    ids: 2,
    title: 'Trung tâm hỗ trợ',
  },
  {
    id: 6,
    ids: 2,
    src: '',
    title: 'Câu hỏi thường gặp',
  },
  {
    id: 7,
    ids: 3,
    src: image_fb,
    alt: 'facebook',
  },
  {
    id: 8,
    ids: 3,
    src: image_instar,
    alt: 'instargram',
  },
  {
    id: 9,
    ids: 3,
    src: image_twitter,
    alt: 'twitter',
  },
];
function FISomeOfItemsFooter(props) {
  return (
    <div className="text-lg leading-10">
      {props.title}
      {props.src === '' ? '' : <img alt={props.alt} src={props.src} loading="lazy" className="h-8 w-8" />}
    </div>
  );
}
function FFooter() {
  return (
    <footer className="h-fit w-full bg-green-500 p-4">
      <div className="ttl-style-box-1200 flex-col items-start sm:pt-6">
        <img
          src="https://food.grab.com/static/images/logo-grabfood-white2.svg"
          alt="Logo-GrapFood-ThanhLong xin tài trợ"
          loading="lazy"
          className="h-10 w-28 sm:h-16 sm:w-48"
        />
        <div className="ttlS-ruler"></div>

        <div className="grid grid-cols-1 gap-y-3 whitespace-nowrap lg:grid-cols-4">
          {ItemAboutFooter.map((item) => {
            return (
              <FItemAboutFooter key={item.id} className={item.id === 3 ? 'flex gap-5' : ''}>
                {items.map((itemss) => {
                  if (item.id === itemss.ids) {
                    return (
                      <FISomeOfItemsFooter
                        key={itemss.id}
                        title={itemss.title}
                        src={itemss.src}
                        alt={itemss.alt}
                      ></FISomeOfItemsFooter>
                    );
                  }
                  return null;
                })}
              </FItemAboutFooter>
            );
          })}
        </div>
        <div className="ttlS-ruler"></div>
        <div className="grid grid-cols-2 gap-3 sm:flex sm:grid-cols-none">
          <img src="https://food.grab.com/static/images/logo-appstore.svg" alt="" loading="lazy" />
          <img
            src="https://food.grab.com/static/images/logo-playstore.svg"
            alt=""
            loading="lazy"
            className="ttlS-flex last:justify-end"
          />
        </div>
        <div className="mt-7 grid grid-cols-2 text-white sm:grid-cols-3">
          <p className="col-span-2 sm:col-span-1">© 2024 Grab</p>
          <p className="w-fit">Câu hỏi thường gặp</p>
          <p>Chính sách bảo mật</p>
        </div>
      </div>
    </footer>
  );
}
export default FFooter;
