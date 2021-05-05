import axios from 'axios';

const instance = axios.create({
  headers: {
    Accept: 'application/json',
  },
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      window.location = '/login';
    }
    return Promise.reject(error);
  }
);

const Api = {
  auth: {
    login(email, password) {
      return instance.post('/api/auth/login', {email, password});
    },
    logout() {
      return instance.get('/api/auth/logout');
    },
    register(data) {
      return instance.post('/api/auth/register', data);
    }
  },
  passwords: {
    reset(email) {
      return instance.post('/api/passwords', {email});
    },
    get(token) {
      return instance.get(`/api/passwords/${token}`);
    },
    update(token, password) {
      return instance.patch(`/api/passwords/${token}`, {password});
    }
  },
  gardens: {
    index(){
      return instance.get('/api/gardens')
    },
    create(data){
      return instance.post('/api/gardens', data)
    },
    get(id){
      return instance.get(`api/gardens/${id}`)
    },
    update(id, data){
      return instance.get(`api/gardens/${id}`, data)
    },
    delete(id){
      return instance.delete(`api/gardens/${id}`)
    }
  },
  users: {
    me() {
      return instance.get('/api/users/me');
    }
  }
};

export default Api;
