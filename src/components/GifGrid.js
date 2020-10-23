import React from "react";
import { useFetchGif } from "./../hooks/useFetchGif";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
	const { data, loading } = useFetchGif(category);

	console.log(data, loading);

	return (
		<>
			<h3 className="animate__animated animate__fadeInDown  titleCategory">
				{category}
			</h3>

			{loading && (
				<p className="animate__animated animate__flash">Cargando...</p>
			)}

			<div className="card-grid">
				{data.map((img) => (
					<GifGridItem key={img.id} {...img} />
				))}
			</div>
		</>
	);
};

export default GifGrid;
