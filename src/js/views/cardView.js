import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

export const CardView = () => {
	const params = useParams();
	const [info, setInfo] = useState();

	useEffect(() => {
		fetch(`https://www.swapi.tech/api/${params.type}/${params.theid}`)
			.then(resp => resp.json())
			.then(data => {
				setInfo(data.result.properties);
				console.log(data.result.properties);
			})
			.catch(error => console.log(error));
		console.log(params);
	}, []);

	return (
		<div className="jumbotron">{params.type == "people" ? <p>{info.birth_year}</p> : <p>{info.climate}</p>}</div>
	);
};
