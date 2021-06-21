import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { imgPl } from "../component/imagenes";

export const CardPlanetas = () => {
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
			let newSelected = selected;
			newSelected[i + 1] = "";
			setSelected([...newSelected]);
		}
	};

	const cardList = store.planets.map((element, i) => {
		return (
			<div key={i} style={{ width: "350px", height: "350" }} className="col-4">
				<div className="card mx-1 bg-dark">
					<img
						src={require("../../img/planets/" + Object.values(imgPl[i])[0])}
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
						<Link to={`/cardView/planets/${i + 1}`}>
							<button type="button" className="btn btn-primary text-light">
								Ver información
							</button>
						</Link>
						<button
							type="button"
							onClick={() => {
								actions.addFavorite(store.characters[i].name);
								selectButton(i);
							}}
							className="btn btn-warning float-right">
							{selected[i + 1] == i + 1 ? <i className="fas fa-heart" /> : <i className="far fa-heart" />}
						</button>
					</div>
				</div>
			</div>
		);
	});

	return (
		<div className="row overflow-auto flex-nowrap mx-auto p-2" style={{ width: "90vw", marginTop: "70px" }}>
			{cardList}
		</div>
	);
};
