import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://burger-project-2fc59.firebaseio.com/'
});

export default instance;