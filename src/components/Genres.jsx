import React from "react";

function Genres(genres) {
	return (
		<div className="game__genres">
			Genres :
			<>
				{genres.genres.map((genre) => {
					return (
						<span className="game__genre" key={genre.id}>
							{genre.name}
						</span>
					);
				})}
			</>
		</div>
	);
}

export default Genres;
