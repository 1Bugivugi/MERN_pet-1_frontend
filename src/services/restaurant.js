import http from '../http-common';

/**
 * Place for all the functions that are going to make API calls and return info from them
 */
class RestaurantDataService {
    /**
     * Links below are added after base url;
     * Also, the below is an example of ES6(ES2015) syntax(it is a shorthand for a function assigned to the method's name)
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions
     */
    getAll(page = 0) {
        return http.get(`?page=${page}`);
    }

    get(id) {
        return http.get(`/id/${id}`);
    }

    find(query, by = 'name', page = 0) {
        return http.get(`?${by}=${query}&page=${page}`);
    }

    createReview(data) {
        return http.post('/review', data)
    }

    updateReview(data) {
        return http.put('/review', data)
    }

    deleteReview(id, userId) {
        return http.delete(`/review?id=${id}`, {data: {user_id: userId}})
    }

    getCuisines() {
        return http.get(`/cuisines`)
    }
}

export default new RestaurantDataService();