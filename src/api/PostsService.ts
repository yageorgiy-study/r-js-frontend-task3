import axios from "axios";

export default class PostsService {
    static async getAll(limit: number = 10, page: number = 1) {
        return await axios.get(`${process.env.REACT_APP_MOCK_API_BASE_URL}/posts`, {
            params: {
                _limit: limit,
                _page: page
            }
        });
    }

    static async getById(id: number) {
        return await axios.get('${process.env.REACT_APP_MOCK_API_BASE_URL}/posts/' + id);
    }

    static async getCommentsByPostId(id: number) {
        return await axios.get(`${process.env.REACT_APP_MOCK_API_BASE_URL}/posts/${id}/comments`);
    }
}
