import {
    getfaqStart,
    getfaqSuccess,
    getfaqFailure,
  } from "../../Redux/FAQ/FaqSlice";
  import axios from "axios";

  export const getApi = ({dispatch}) => {

      const config = {
        method: "GET",
        url: "http://localhost:3001/getFaqs",
        headers: {
        },
      };
  
      axios(config)
        .then((response) => {
          dispatch(getfaqSuccess(response.data.data));
        })
        .catch((error) => {
          dispatch(getfaqFailure(error.message));
        });
    };

