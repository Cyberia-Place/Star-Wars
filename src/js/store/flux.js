const getState = ({ getStore, getActions, setStore }) => {
	async function getPlanets() {
		fetch("https://www.swapi.tech/api/people")
			.then(res => res.json())
			.then(data => {
				localStorage.setItem("planets", JSON.stringify(data.results));
				setStore({ planets: data.results });
			})
			.catch(error => console.log(error));
	}

	async function getStarships() {
		fetch("https://www.swapi.tech/api/starships")
			.then(res => res.json())
			.then(data => {
				localStorage.setItem("starships", JSON.stringify(data.results));
				setStore({ starships: data.results });
			})
			.catch(error => console.log(error));
	}

	const getCharacters = () => {
		fetch("https://www.swapi.tech/api/people")
			.then(res => res.json())
			.then(data => {
				localStorage.setItem("characters", JSON.stringify(data.results));
				setStore({ characters: data.results });
			})
			.catch(error => console.log(error));
	};

	return {
		store: {
			planets: [],
			starships: [],
			characters: [],
			favourites: []
		},
		actions: {
			loadSomeData: () => {
				if (
					localStorage.getItem("characters") &&
					localStorage.getItem("starships") &&
					localStorage.getItem("planets")
				) {
					setStore({
						characters: JSON.parse(localStorage.getItem("characters")),
						planets: JSON.parse(localStorage.getItem("planets")),
						starships: JSON.parse(localStorage.getItem("starships"))
					});
				} else {
					getPlanets();
					getCharacters();
					getStarships();
				}
			}
		}
	};
};

export default getState;
