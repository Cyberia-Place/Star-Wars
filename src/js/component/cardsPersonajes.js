import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { imgCh } from "../component/imagenes";

export const CardPersonajes = () => {
	const { store, actions } = useContext(Context);

	useEffect(
		() => {
			setSelected(new Array(store.characters.length + 1).fill(""));
		},
		[store.characters]
	);

	const [selected, setSelected] = useState();
	const selectButton = i => {
		if (selected[i + 1] != i + 1) {
			let newSelected = selected;
			newSelected[i + 1] = i + 1;
			setSelected([...newSelected]);
		} else {
			actions.removeFavorite(store.favorites[i]);
			let newSelected = selected;
			newSelected[i + 1] = "";
			setSelected([...newSelected]);
		}
	};

	const cardList = store.characters.map((element, i) => {
		return (
			<div key={i} style={{ width: "350px", height: "350" }} className="col-4">
				<div className="card mx-1 bg-dark">
					<img
						src={require("../../img/characters/" + Object.values(imgCh[i])[0])}
						style={{ height: "150px", objectFit: "cover" }}
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title text-light">{element.name}</h5>
						<p className="card-text text-truncate text-light">
							Some quick example text to build on the card title and make up the bulk of the cards
							content.
						</p>
						<Link to={`/cardView/people/${i + 1}`}>
							<button type="button" className="btn btn-primary text-light">
								Ver información
							</button>
						</Link>
						<button
							type="button"
							onClick={() => {
								if (store.characters[i].name) {
									actions.addFavorite(store.characters[i].name);
								} else {
									actions.removeFavorite(store.characters[i].name);
								}
								selectButton(i);
							}}
							className="btn btn-warning float-right">
							{store.favorites.includes(store.characters[i].name) ? (
								<i className="fas fa-heart" />
							) : (
								<i className="far fa-heart" />
							)}
						</button>
					</div>
				</div>
			</div>
		);
	});

	return (
		<div className="row overflow-auto flex-nowrap my-4 mx-auto p-2" style={{ width: "90vw" }}>
			{cardList}
		</div>
	);
};
