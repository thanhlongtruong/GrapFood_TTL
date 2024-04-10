import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function FHeader() {
  const [isBgColor, setBgColor] = useState("inherit");
  const [isBgImg, setBgImg] = useState(
    "https://food.grab.com/static/images/logo-grabfood2.svg"
  );

  useEffect(() => {
    const handCroll = () => {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop === 0) {
        setBgColor("inherit");
        setBgImg(
          "https://food.grab.com/static/images/logo-grabfood-white2.svg"
        );
      } else {
        setBgColor("white");
        setBgImg("https://food.grab.com/static/images/logo-grabfood2.svg");
      }
    };
    window.addEventListener("scroll", handCroll);
    return () => {
      window.removeEventListener("scroll", handCroll);
    };
  }, []);
  return (
    <header className="box-headerHome" style={{ backgroundColor: isBgColor }}>
      <div className="container-title-grapfoodhome">
        <a href="/">
          <div className="logo-grapfood">
            <img
              src={`${isBgImg}`}
              alt="Logo-GrapFood-ThanhLong xin tài trợ"
              loading="lazy"
            />
          </div>
        </a>

        <div className="box-option-menu-action">
          <div className="btn-add-cart">
            <div className="icon-btn-add-cart"></div>
          </div>

          <div className="btn-loggin-resgister">Đăng nhập/Đăng kí</div>

          <div className="btn-choose-language">
            <h6>VI</h6>
            <span className="icon-show-list-language"></span>
          </div>
        </div>
      </div>
    </header>
  );
}
export default FHeader;
