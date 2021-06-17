const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			characters: [],
			favorites: []
		},
		actions: {
			loadSomeData: () => {
				// People
				fetch("https://www.swapi.tech/api/planets")
					.then(res => res.json())
					.then(data => {
						localStorage.setItem("planets", JSON.stringify(data.results));
						setStore({ planets: data.results });
					})
					.catch(error => console.log(error));
				// Planets
				fetch("https://www.swapi.tech/api/people")
					.then(res => res.json())
					.then(data => {
						localStorage.setItem("characters", JSON.stringify(data.results));
						setStore({ characters: data.results });
					})
					.catch(error => console.log(error));
			},
			uploadData: () => {
				setStore({
					planets: JSON.parse(localStorage.getItem("planets")),
					characters: JSON.parse(localStorage.getItem("characters"))
				});
			},
			addFavorite: newFavorite => {
				setStore({
					favorites: [...getStore().favorites, newFavorite]
				});
				console.log(getStore().favorites);
			},
			removeFavorite: favorite => {
				setStore({
					favorites: [
						...getStore().favorites.filter(element => {
							return element != favorite;
						})
					]
				});
				console.log(getStore().favorites);
			}
		}
	};
};

export default getState;
