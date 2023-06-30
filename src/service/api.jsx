import axios  from "axios";
const apiKey = "8290bc1aad36426194f4244a27b09403";

 const axiosCreate= axios.create({
    baseURL:'https://api.rawg.io/api'
})
 export const getGenralList = axiosCreate.get("/genres?key=" + apiKey);
 export const getAllGames = axiosCreate.get("/games?key=" + apiKey);
 export const getGenreId=(id) => axiosCreate.get("/games?key=" + apiKey + '&genres=' +id);
