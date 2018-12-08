import axios from "axios";

//The getTaxpros method retrieves proffessional profiles from the server
// It accepts a "query" or term to search for pro that matches the query criteria

export default {
    getTaxpros: function(query) {
        return axios.get("/taxpros", {params: { q: query} });
    },
    getArticles: function(){
        return axios.get("/articles")
    }
}

// The getArticles method performs a scrape and retrieves the articles from the database
