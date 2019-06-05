import axios from "axios";

export default {
    //grabs news
    getNews: function(q) {
        return axios.get("/api/news"), {params:{q: q}}
    },
    //grab images
    getImages: function(q) {
        return axios.get("/api/images"), {params:{q: q}}
    }
    //other similar grabs
}