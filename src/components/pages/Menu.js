import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Card from '@layouts/menu/Card';

import { addItem } from '@modules/cart';

import FruedRice from '@utils/datas/FriedRice.json';
import RiceBowl from '@utils/datas/RiceBowl.json';
import Steak from '@utils/datas/Steak.json';
import Noodle from '@utils/datas/Noodle.json';

import '@scss/pages/Menu.scss';

const Menu = () => {
  const dispatch = useDispatch();
  const { kind } = useParams();
  const [menuList, setMenuList] = useState([]);
  const onClick = (_id, _number) => {
    const item = {
      number: _number,
      ...menuList.find(_ => {
        return _id === _.name;
      }),
    };
    dispatch(addItem(item));
  };

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
            onClick={onClick}
          />
        );
      })}
    </div>
  );
};

export default Menu;
