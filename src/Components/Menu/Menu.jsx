import React from "react";
import "./Menu.scss";
// import images from '../../../public/Images/dinner_one.jpg'

const Menu = ({ dataInfomation }) => {
  return (
    <>
      <section className="menuBox">
        <div className="eatBox">
          {dataInfomation.map(itemMenu => {
            const { id, title, img, price, desc } = itemMenu;
            return (
              <div key={id} className="menuItem">
                <img src={img} alt={title} className='photo' />
                <div className="itemInfo">
                  <header>
                    <h4>{title}</h4>
                    <h4 className="price">{price}</h4>
                  </header>
                  <p className="item_text">{desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  );
};

export default Menu;
