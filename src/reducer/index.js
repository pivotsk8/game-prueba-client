import { avatars } from "../Aux_Data";

const inizialstate = {
  form: {},
  player: {},
  searchPlayer: [],
  players: [],
  avatars: avatars,
  nickname: "",
  avatar: "",
  order: "",
  status: "",
  orderbyRanking: []
};

function rootReducer(state = inizialstate, action /* { type, payload } */) {
  switch (action.type) {
    case "GET_PLAYER_ID":
      return {
        ...state,
        player: action.payload,
      };
    case "GET_PLAYERS":
      return {
        ...state,
        players: action.payload,
      };
    case "SEARCH_PLAYERS":
      return {
        ...state,
        searchPlayer: action.payload,
      };
    case "CREATE_PLAYER":
      return {
        ...state,
        form: action.payload,
      };
    case "GET_AVATAR":
      return {
        ...state,
        avatars: action.payload,
      };
    case "SET_ORDER":
      return {
        ...state,
        order: action.payload,
      };
    case "SET_NICKNAME":
      return {
        ...state,
        nickname: action.payload,
      };
    case "SET_STATUS":
      return {
        ...state,
        status: action.payload,
      };

        case "ORDER_BY_RANKING" :
          const orderPlayers = action.payload === "Asc" ?  
          state.searchPlayer.sort(function(a, b) {              
              if(a.ranking > b.ranking) return 1;              
              if(b.ranking > a.ranking) return -1;
              return 0;                                 
          }) :                                          
          state.searchPlayer.sort(function(a, b) {
              if(a.ranking > b.ranking) return -1;
              if(b.ranking > a.ranking) return 1;
              return 0;
          });
          return {
              ...state,
              orderbyRanking: orderPlayers
          };

    default:
      return state;
  }
}
export default rootReducer;
