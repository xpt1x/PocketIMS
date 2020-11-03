import { create } from "apisauce";

const localURL = "http://127.0.0.1:5000/api";
//const productionURL = "https://pocketims.herokuapp.com/api";
const productionURL = "http://143.110.240.76:5000/api";

const Api = create({
  baseURL:
    !process.env.NODE_ENV || process.env.NODE_ENV === "development"
      ? localURL
      : productionURL,
});

export default Api;
