import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '3611a460-0cbe-4609-be7d-da43d8f91c2e'
    }
});

export const usersApi = {
    getUsers: (countUsersOnThePage, currentPage) => {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/users?count=${countUsersOnThePage}&page=${currentPage}`).
            then(response => response.data);
    },
    login: () => {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`);
    },
    getUserId: (userId) => {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId);
    },
    follow: (id) => {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {});
    },
    unfollow: (id) => {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`);
    }
}