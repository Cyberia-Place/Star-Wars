import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Home = () => {
	useEffect(() => {
		actions.loadSomeData();
		console.log(store);
	}, []);

	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="d-inline overflow-auto vh-15 border">Hola</div>
		</div>
	);
};
