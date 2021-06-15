import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CardPersonajes = () => {
	const { store, actions } = useContext(Context);

	const img = [
		{
			LukeSkywalker:
				"https://static.wikia.nocookie.net/esstarwars/images/d/d9/Luke-rotjpromo.jpg/revision/latest/scale-to-width-down/350?cb=20071214134433"
		},
		{
			C3PO:
				"https://static.wikia.nocookie.net/esstarwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png/revision/latest/scale-to-width-down/243?cb=20200718062140"
		},
		{
			R2D2: "https://images-na.ssl-images-amazon.com/images/I/91BLCCISDTL._AC_SL1500_.jpg"
		},
		{
			DarthVader:
				"https://static.wikia.nocookie.net/hitlerparody/images/3/38/Darth-Vader.jpg/revision/latest?cb=20170109114532&path-prefix=es"
		},

		{
			LeiaOrgana: "https://pbs.twimg.com/profile_images/1131990281413365760/eVXBPmA__400x400.jpg"
		},
		{
			OwenLars:
				"https://static.wikia.nocookie.net/esstarwars/images/e/eb/OwenCardTrader.png/revision/latest?cb=20180105223041"
		},
		{
			BeruWhitesunlars:
				"https://static.wikia.nocookie.net/esstarwars/images/c/cc/BeruCardTrader.png/revision/latest?cb=20171231024525"
		},
		{
			R5D4:
				"https://static.wikia.nocookie.net/esstarwars/images/2/2c/R5d4.jpg/revision/latest/top-crop/width/360/height/450?cb=20060315232602"
		},
		{
			BiggsDarklighter:
				"https://static.wikia.nocookie.net/esstarwars/images/0/00/BiggsHS-ANH.png/revision/latest?cb=20190110214931"
		},
		{
			ObiWanKenobi:
				"https://i0.wp.com/hipertextual.com/wp-content/uploads/2019/08/hipertextual-se-confirma-serie-obi-wan-kenobi-con-ewan-mcgregor-disney-2019892534-scaled.jpg?fit=2560%2C1707&ssl=1"
		}
	];

	const cardList = store.characters.map((element, i) => {
		return (
			<div key={i} className="col-4">
				<div className="card mx-1">
					<img src={img[i]} className="card-img-top" alt="..." />
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
