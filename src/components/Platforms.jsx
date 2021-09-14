import React from "react";

function Platforms(platforms) {
	return (
		<div className="game__genres">
			Platforms :
			<>
				{platforms.platforms.map((platform) => {
					return (
						<span className="game__genre" key={platform.platform.id}>
							{platform.platform.name}
						</span>
					);
				})}
			</>
		</div>
	);
}

export default Platforms;
