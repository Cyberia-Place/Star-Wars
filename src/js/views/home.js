import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { CardList } from "../component/card";

export const Home = () => {
	useEffect(() => {
		actions.loadSomeData();
		console.log(store);
	}, []);

	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="d-inline overflow-auto vh-15 border">{/* <CardList type={store.} /> */}</div>
		</div>
	);
};
