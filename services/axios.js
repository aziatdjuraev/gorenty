import axios from "axios";
import { useRouter } from "next/router";

export function getAPIСlient( url) {
//  const router = useRouter()
  const api = axios.create({
    baseURL: "https://api.gorenty.uz/api/",
      // headers: { 'accept-language': url }
  });
  // api.get(URL, { headers: { 'accept-language': locale } })
//  .then(response => {
//      // If request is good...
//      console.log(response.data);
//   })
//  .catch((error) => {
//      console.log('error ' + error);
//   });
  api.interceptors.request.use((config) => {
    // console.log(config);
    return config;
  });
  

  return api;
  
}
