import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [dropdown, setDropdown] = useState([]);

	useEffect(
		() => {
			setDropdown(store.favorites);
			console.log("funciona");
			console.log(dropdown, favoritesList);
		},
		[store.favorites]
	);

	const favoritesList = dropdown.map((element, i) => {
		return (
			<a key={i} className="dropdown-item">
				{element}
				<button
					type="button"
					className="btn btn-primary btn-sm float-right"
					onClick={() => actions.removeFavorite(element)}>
					<i className="fas fa-trash" style={{ fontSize: "13px" }} />
				</button>
			</a>
		);
	});

	return (
		<nav className="navbar navbar-light bg-dark border-bottom border-warning mb-3">
			<Link to="/">
				<img src={require("../../img/sw-logo.png")} style={{ width: "100px", height: "50px" }} />
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button
						className="btn btn-warning dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites
						<span className="badge badge-secondary mx-1">{store.favorites.length}</span>
					</button>
					<div className="dropdown-menu dropdown-menu-right text-center" aria-labelledby="dropdownMenuButton">
						{favoritesList.length == 0 ? "(empty)" : favoritesList}
					</div>
				</div>
			</div>
		</nav>
	);
};
