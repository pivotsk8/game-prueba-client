import axios from "axios";

// -----------------------<Gets>------------------------

export const getPlayers = ({ nick_name, order, status }) => {
  console.log(nick_name, order, status, "console de actions");
  return async (dispatch) => {
    try {
      const json = (
        await axios.get(
          `http://localhost:3001/players?nick_name=${
            nick_name ? nick_name : ""
          }`
        )
      ).data;
      
      console.log(json, "json de actions");
      dispatch({
        type: "GET_PLAYERS",
        payload: json,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getAvatar = () => {
  return async (dispatch) => {
    try {
      const avatar = (await axios.get("http://localhost:3001/avatar/")).data;
      dispatch({
        type: "GET_AVATAR",
        payload: avatar,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
export const createPlayer = (player) => {
  return async (dispatch) => {
    try {
      const json = (await axios.post("http://localhost:3001/player/", player))
        .data;
      dispatch({
        type: "CREATE_PLAYER",
         json,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
// ______________________________________________________

export const setStatus = (status) => {
  return {
    type: "SET_STATUS",
    payload: status,
  };
};
export const setNickname = (nickname) => {
  return {
    type: "SET_NICKNAME",
    payload: nickname,
  };
};
export const setOrder = (order) => {
  return {
    type: "SET_ORDER",
    payload: order,
  };
};
