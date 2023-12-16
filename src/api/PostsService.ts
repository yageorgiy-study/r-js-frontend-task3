import axios from "axios";

export default class PostsService {
    static async getAll(limit: number = 10, page: number = 1) {
        return await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        });
    }

    static async getById(id: number) {
        return await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
    }

    static async getCommentsByPostId(id: number) {
        return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    }
}
