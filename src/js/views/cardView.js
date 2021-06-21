import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { imgCh, imgPl } from "../component/imagenes";

export const CardView = () => {
	const params = useParams();
	const [info, setInfo] = useState({});

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
		<div className="jumbotron">
			{params.type == "people" ? (
				<div className="container">
					<div className="row">
						<div className="col-6">
							<img
								src={require("../../img/cardViewCh/LukeSkywalker.jpg")}
								// + Object.values(imgCh[params.theid - 1])[0])

								style={{ height: "400px", width: "500px", objectFit: "cover" }}
							/>
						</div>
						<div className="col-6">
							<h1 className="text-center">{info.name}</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in sem ac lectus
								accumsan egestas in a arcu. Pellentesque habitant morbi tristique senectus et netus et
								malesuada fames ac turpis egestas. Aenean consequat consequat convallis. Maecenas vitae
								mi semper, vulputate lorem eu, mollis elit.{" "}
							</p>
							<p>
								Mauris lobortis nibh sit amet pretium blandit. Curabitur maximus, justo vel posuere
								finibus, arcu dui tincidunt ante, vel varius leo massa non felis. Donec vel dolor lorem.
								Vivamus eget erat augue. Aliquam bibendum vel lectus vitae dignissim. Aenean cursus
								fermentum pellentesque. Aenean vitae purus eget orci vestibulum tempor id quis risus. In
								hac habitasse platea dictumst.
							</p>
						</div>
						<div className="row">
							<div className="col-2">
								Name
								<br />
								{info.name}
							</div>
							<div className="col-2">
								Birth-year
								<br />
								{info.birth_year}
							</div>
							<div className="col-2">
								Gender
								<br />
								{info.gender}
							</div>
							<div className="col-2">
								Height
								<br />
								{info.height}
							</div>
							<div className="col-2">
								Skin color
								<br />
								{info.skin_color}
							</div>
							<div className="col-2">
								Eye color
								<br />
								{info.eye_color}
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="container">
					<div className="row">
						<div className="col-6">
							<img
								src={require("../../img/planets/" + Object.values(imgPl[params.theid - 1])[0])}
								style={{ height: "400px", width: "500px", objectFit: "cover" }}
							/>
						</div>
						<div className="col-6">
							<h1 className="text-center">{info.name}</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in sem ac lectus
								accumsan egestas in a arcu. Pellentesque habitant morbi tristique senectus et netus et
								malesuada fames ac turpis egestas. Aenean consequat consequat convallis. Maecenas vitae
								mi semper, vulputate lorem eu, mollis elit.{" "}
							</p>
							<p>
								Mauris lobortis nibh sit amet pretium blandit. Curabitur maximus, justo vel posuere
								finibus, arcu dui tincidunt ante, vel varius leo massa non felis. Donec vel dolor lorem.
								Vivamus eget erat augue. Aliquam bibendum vel lectus vitae dignissim. Aenean cursus
								fermentum pellentesque. Aenean vitae purus eget orci vestibulum tempor id quis risus. In
								hac habitasse platea dictumst.
							</p>
						</div>
					</div>
					<hr />
					<div className="row">
						<div className="col-2">
							Name
							<br />
							{info.name}
						</div>
						<div className="col-2">
							Climate
							<br />
							{info.climate}
						</div>
						<div className="col-2">
							Population
							<br />
							{info.population}
						</div>
						<div className="col-2">
							Orbital period
							<br />
							{info.orbital_period}
						</div>
						<div className="col-2">
							Rotation period
							<br />
							{info.rotation_period}
						</div>
						<div className="col-2">
							Diameter
							<br />
							{info.diameter}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
