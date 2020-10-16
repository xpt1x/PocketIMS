import { create } from "apisauce";

//const Api = create({baseURL: 'http://127.0.0.1:5000/api'})
const localURL = "http://127.0.0.1:5000/api";
const productionURL = "";
const Api = create({
  baseURL:
    !process.env.NODE_ENV || process.env.NODE_ENV === "development"
      ? localURL
      : productionURL,
});

export default Api;
