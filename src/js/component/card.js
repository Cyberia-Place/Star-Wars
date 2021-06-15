import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const CardList = () => {
	const { store, actions } = useContext(Context);

	// const cardList = store.characters.map((element, i) => {
	// 	return <h1>Hello there</h1>;
	// });

	return (
		<div>
			<div className="d-inline">{cardList}</div>
		</div>
	);
};
