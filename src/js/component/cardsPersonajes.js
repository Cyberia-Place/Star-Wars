import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { img } from "../component/imagenes";

export const CardPersonajes = () => {
	const { store, actions } = useContext(Context);

	const cardList = store.characters.map((element, i) => {
		return (
			<div key={i} className="col-4">
				<div className="card mx-1">
					<img src={Object.values(img[i])} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{element.name}</h5>
						<p className="card-text">
							Some quick example text to build on the card title and make up the bulk of the cards
							content.
						</p>
						<Link to={`/cardView/people/${i + 1}`}>
							<button type="button" className="btn btn-primary">
								Go somewhere
							</button>
						</Link>
					</div>
				</div>
			</div>
		);
	});

	return <div className="row overflow-auto flex-nowrap p-2">{cardList}</div>;
};
