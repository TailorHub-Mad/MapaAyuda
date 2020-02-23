import axios from 'axios';

const MockAdapter = require('axios-mock-adapter');

const instance = axios.create({
	baseURL: `${process.env.REACT_APP_API_URL}/auth`,
	withCredentials: true,
});

var mock = new MockAdapter(instance, { delayResponse: 2000 });

mock.onPost('/login').reply(config => {
	const data = JSON.parse(config.data);
	if (data.email !== 'pepe@pepe.es') {
		return [401, { message: 'wrong username' }, {}];
	} else if (data.password !== '123456') {
		return [401, { message: 'wrong password' }, {}];
	}
	return [
		200,
		{
			name: 'pepe',
		},
		{},
	];
});

mock.onPost('/recoverPassword').reply(() => {
	return [200];
});

mock.onPost('/register').reply(config => {
	const data = JSON.parse(config.data);
	return [200, data, {}];
});
class AuthService {
	errorHandler = async e => {
		console.error('AUTH API ERROR');
		console.error(e);
		throw e;
	};

	login = async user => {
		return await instance
			.post('/login', user)
			.then(response => {
				return response.data;
			})
			.catch(AuthService.errorHandler);
	};

	register = async user => {
		return await instance
			.post('/register', user)
			.then(response => response.data)
			.catch(AuthService.errorHandler);
	};

	logout = async () => {
		return await instance
			.get('/logout')
			.then(response => response.data)
			.catch(AuthService.errorHandler);
	};

	recoverPassword = async email => {
		return await instance
			.post('/recoverPassword', email)
			.then(response => {
				return response.data;
			})
			.catch(AuthService.errorHandler);
	};
}

export default AuthService;
