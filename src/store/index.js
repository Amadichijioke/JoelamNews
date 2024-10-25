import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    state: {
        l: [],
        headLine: [],
        selectedCategories: [],
        selectedNewsDetails: [],
    },
    getters: {
        getArrayNumber(state) {
            return state.l.length;
        },
        selectedNewsDetails(state) {
            return state.selectedNewsDetails.length;
        },
        selectedCategories(state) {
            return state.selectedCategories.length;
        }
    },
    mutations: {
        GET_NEWS(state, news) {
            state.news = news;
        },
        GET_HEADLINE(state, headline) {
            state.headLine = headline;
        },
        GET_CATEGORIES(state, category) {
            state.selectedCategories = category;
        },
        SET_SELECTED_NEWSDETAILS(state, newsDetails) {
            state.selectedNewsDetails = newsDetails;
        }

    },
    actions: {
        async getNews({commit}) {
            const response = await axios.get('https://alvahtek.com/projects/ota/api/news-api/news.php');
            commit("GET_NEWS", response.data);
        },
        async getHeadline({ commit }) {
            const response = await axios.get('https://alvahtek.com/projects/ota/api/news-api/news.php?type=headline');
            commit("GET_HEADLINE", response.data);
        },
        async getCategories({commit}, category) {
            const response = await axios.get(`https://alvahtek.com/projects/ota/api/news-api/news.php?categories=${category}`);
            commit("GET_CATEGORIES", response.data);
        },
        async fetchNewsDetailsByUuid({commit}, uuid) {
            const response = await axios.get(`https://alvahtek.com/projects/ota/api/news-api/news.php?uuid=${uuid}`);
            commit("SET_SELECTED_NEWSDETAILS", response.data);
        },
    }
});