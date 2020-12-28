import Topping from '@utils/datas/Topping.json';

const ADDITEM = 'cart/ADDITEM';
const CHANGEITEM = 'cart/CHANGEITEM';
const CHANGETOPPING = 'cart/CHANGETOPPING';

export const addItem = item => ({
  item,
  type: ADDITEM,
});
export const changeItem = (name, number) => ({
  name,
  number,
  type: CHANGEITEM,
});
export const changeTopping = (name, number) => ({
  name,
  number,
  type: CHANGETOPPING,
});

const initialState = {
  items: [],
  toppings: [...Topping],
};

export default function game(state = initialState, action) {
  switch (action.type) {
    case ADDITEM:
      return {
        ...state,
        items: [
          ...state.items.filter(item => {
            return item.name !== action.item.name;
          }),
          action.item,
        ],
      };
    case CHANGEITEM:
      return {
        ...state,
        items: state.items.map(item => {
          if (item.name === action.name) {
            return { ...item, number: action.number };
          }
          return item;
        }),
      };
    case CHANGETOPPING:
      return {
        ...state,
        toppings: state.toppings.map(item => {
          if (item.name === action.name) {
            return { ...item, number: action.number };
          }
          return item;
        }),
      };
    default:
      return state;
  }
}
