import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@layouts/menu/Card';
import FruedRice from '@utils/datas/FriedRice.json';
import RiceBowl from '@utils/datas/RiceBowl.json';
import Steak from '@utils/datas/Steak.json';
import Noodle from '@utils/datas/Noodle.json';
import '@scss/pages/Menu.scss';

const Menu = () => {
  const { kind } = useParams();
  const [menuList, setMenuList] = useState([]);
  useEffect(() => {
    switch (kind) {
      case 'friedrice':
        setMenuList(FruedRice);
        break;
      case 'ricebowl':
        setMenuList(RiceBowl);
        break;
      case 'steak':
        setMenuList(Steak);
        break;
      case 'noodle':
        setMenuList(Noodle);
        break;
      default:
        setMenuList([...FruedRice, ...RiceBowl, ...Steak, ...Noodle]);
        break;
    }
  }, [kind]);
  return (
    <div className="menu">
      {menuList.map(item => {
        return (
          <Card
            key={item.name}
            id={item.name}
            initialPrice={item.price}
            menuName={item.name}
            image={item.src}
          />
        );
      })}
    </div>
  );
};

export default Menu;
