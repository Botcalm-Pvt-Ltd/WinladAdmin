import axios from "axios";

  export const addApi = ({data}) => {

    const config = {
        method: "POST",
        url: 'http://localhost:3001/addFaq',
        headers: {
            'Content-Type': 'application/json',
        },
        data: data,
      };
  
      axios(config)
      .then((response) => {
        console.log(response);
        dispatch(addfaqSuccess(response.data));
      })
      .catch((error) => {
        console.error("Error deleting collection:", error);
        dispatch(addfaqFailure(error));

      });
    };

