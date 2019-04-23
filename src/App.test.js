const fakeData = {
	results: [
		{
			name: {
				first: 'Marysia',
				last: 'Micek',
			}
		}
	]
}

const fakeFetch = () => {
	return new Promise((resolve, reject) => {
		resolve({
			json: () => fakeData
		})
	})
}

const getRandomName = (fetch) => {
	return fetch('https://randomuser.me/api')
		.then(response => response.json())
		.then(data => `${data.results[0].name.first} ${data.results[0].name.last}`)
}

describe('Using user Api', () => {
	test('expect name to be mine', () => {
		return expect(getRandomName(fakeFetch))
		.resolves.toBe('Marysia Micek')
	})
})