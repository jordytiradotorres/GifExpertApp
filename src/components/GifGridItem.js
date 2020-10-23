import React from "react";

const GifGridItem = ({ title, url }) => {
	return (
		<figure className="card animate__animated animate__fadeIn">
			<img src={url} alt={title} />
			<p>{title}</p>
		</figure>
	);
};

export default GifGridItem;
