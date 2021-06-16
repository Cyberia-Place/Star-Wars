import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [dropdown, setDropdown] = useState([]);

	useEffect(
		() => {
			setDropdown([...dropdown, store.favorites]);
			console.log("funciona");
			console.log(dropdown, favoritesList);
		},
		[store.favorites]
	);

	const favoritesList = dropdown.map((element, i) => {
		<a key={i} className="dropdown-item">
			{element}
		</a>;
	});

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites
						<span className="badge badge-secondary">0</span>
					</button>
					<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
						{favoritesList}
					</div>
				</div>
			</div>
		</nav>
	);
};
