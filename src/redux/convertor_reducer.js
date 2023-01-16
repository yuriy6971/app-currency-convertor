import { getValutes } from "../api/api.js";

const SET_VALUTES = "SET_VALUTES";
const SET_VALUTE = "SET_VALUTE";
const SET_FETCHING = "SETFETCHING";
const UPDATE_CCY_VALUTE = "UPDATE_CCY_VALUTE";
const SET_CURRENT_EXCHANGE_RATE = "SET_CURRENT_EXCHANGE_RATE";
const SET_VALUE_BASE_VALUTE = "SET_VALUE_BASE_VALUTE";
const SET_CURRENT_VALUTE = "SET_CURRENT_VALUTE";
const SWAP_VALUTES = "SWAP_VALUTES";
const SET_CURRENT_ELEMENT_VALUTE = " SET_CURRENT_ELEMENT_VALUTE";
const TURN_OVER_RATE = "TURN_OVER_RATE";

let initialState = {
  valute: [
    { ccy: "EUR", base_ccy: "UAH", buy: "41.90000", sale: "42.90000" },
    { ccy: "USD", base_ccy: "UAH", buy: "39.80000", sale: "40.30000" },
  ],
 // valute :[],
  nameValute: ["Евро", "доллар США"],
  isFetching: false,
  base_valute: null,
  screen_base_valute: "",
  screen_ccy_valute: "",
  currentValute: "",
  currentElementValute: { ccy: "", base_ssy: "", buy: "", sale: "" },

  currentExchengeRate: "",
  hard_valute: [
    { ccy: "EUR", base_ccy: "UAH", buy: "41.90000", sale: "42.90000" },
    { ccy: "USD", base_ccy: "UAH", buy: "39.80000", sale: "40.30000" },
  ],
};

const convertor_reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VALUTES:
      return {
        ...state,
        valute: action.valute.map((item, index) => {
          return { ...item, title: state.nameValute[index] };
        }),
        base_valute: action.valute[0].base_ccy,
        currentValute: action.valute[0].ccy,
        currentExchengeRate: action.valute[0].buy,
        currentElementValute: action.valute[0],
      };
      case SET_VALUTE : 
      return {
        ...state,
        valute: state.valute.map((item, index) => {
          return { ...item, title: state.nameValute[index] };
        }),
        base_valute: state.valute[0].base_ccy,
        currentValute: state.valute[0].ccy,
        currentExchengeRate: state.valute[0].buy,
        currentElementValute: state.valute[0],
      }

    case SET_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case UPDATE_CCY_VALUTE:
      return {
        ...state,
        screen_ccy_valute: action.number,
      };

    case SET_CURRENT_ELEMENT_VALUTE:
      return {
        ...state,

        currentElementValute: {
          ...state.valute.find((item) => item.ccy == action.code),
        },
      };

    case SET_CURRENT_EXCHANGE_RATE:
      return {
        ...state,
        ...state.currentElementValute,
        currentExchengeRate: state.currentElementValute.buy,
      };

    case SET_VALUE_BASE_VALUTE:
      return {
        ...state,
        screen_base_valute: action.number,
      };
    case SET_CURRENT_VALUTE:
      return {
        ...state,
        currentValute: action.currentValute,
        ...state.valute,
        ...state.valute[0],
        base_valute: state.valute[0].base_ccy,
      };
    case SWAP_VALUTES:
      return {
        ...state,
        currentValute: state.base_valute,
        base_valute: state.currentValute,
      };

    case TURN_OVER_RATE:
      return {
        ...state,
        currentExchengeRate: (1 / state.currentExchengeRate).toFixed(8),
      };

    default:
      return state;
  }
};

export const setValutesActionCreator = (valutePrivat) => {
  return {
    type: SET_VALUTES,
    valute: valutePrivat,
  };
};

export const setValuteActionCreator = () => {
  return {
    type :SET_VALUTE
  }
}

export const setFetchingActionCreator = (boolFetch) => {
  return {
    type: SET_FETCHING,
    isFetching: boolFetch,
  };
};

export const setValuteThunkAC = () => {
  return (dispatch) => {
    dispatch(setFetchingActionCreator(true));
    getValutes().then((response) => {
      dispatch(setFetchingActionCreator(false));
      dispatch(setValutesActionCreator(response.data));
    });
  };
};

export const updateCcyValuteActionCreator = (number) => {
  return {
    type: UPDATE_CCY_VALUTE,
    number: number,
  };
};

export const setValueBaseValuteActionCreator = (number) => {
  return {
    type: SET_VALUE_BASE_VALUTE,
    number: number,
  };
};
export const setCurrentValuteActionCreator = (abrev) => {
  return {
    type: SET_CURRENT_VALUTE,
    currentValute: abrev,
  };
};
export const swapValutesActionCreator = () => {
  return {
    type: SWAP_VALUTES,
  };
};
export const setCurrentExchangeRateActionCreator = (code) => {
  return {
    type: SET_CURRENT_EXCHANGE_RATE,
    code: code,
  };
};

export const setCurrentElementvaluteActionCreator = (code) => {
  return {
    type: SET_CURRENT_ELEMENT_VALUTE,
    code: code,
  };
};
export const turnOverRateActionCreator = () => {
  return {
    type: TURN_OVER_RATE,
  };
};

export default convertor_reducer;
