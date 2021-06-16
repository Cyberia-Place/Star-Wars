import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { CardPersonajes } from "../component/cardsPersonajes";
import { CardPlanetas } from "../component/cardsPlanetas";

export const Home = () => {
	useEffect(() => {
		actions.loadSomeData();
		console.log(store);
	}, []);

	const { store, actions } = useContext(Context);

	return (
		<div style={{ width: "100%" }}>
			<CardPersonajes />
			<CardPlanetas />
			<br />
			<br />
			<br />
		</div>
	);
};
