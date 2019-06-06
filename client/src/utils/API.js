import axios from "axios";

export default {
    //grabs news
    getNews: function() {
        return axios.get("/api/news");
    },
    //posts new article
    postNews: function(newsData) {
        return axios.post("/api/news", newsData);
    },
    //grabs article by id
    getNewsId: function(id) {
        return axios.get(`/api/news/${id}`);
    },    
    //updates article by id
    putNewsId: function(id) {
        return axios.put(`/api/news/${id}`);
    },
    //deletes article by id
    deleteNewsId: function(id) {
        return axios.delete(`/api/news/${id}`);
    },
    //grabs images for gallery
    getImg: function() {
        return axios.get("/api/gals/images");
    },
    //grabs videos for gallery 
    getVid: function() {
        return axios.get("/api/gals/videos");
    },
    // 
    // get: function() {
    //     return axios.get("/api/");
    // },
    // // 
    // get: function() {
    //     return axios.get("/api/");
    // },
    // // 
    // get: function() {
    //     return axios.get("/api/");
    // },
    // // 
    // get: function() {
    //     return axios.get("/api/");
    // },
    // // 
    // get: function() {
    //     return axios.get("/api/");
    // },
    // // 
    // get: function() {
    //     return axios.get("/api/");
    // },
    // // 
    // get: function() {
    //     return axios.get("/api/");
    // },
    // // 
    // get: function() {
    //     return axios.get("/api/");
    // },
    
}