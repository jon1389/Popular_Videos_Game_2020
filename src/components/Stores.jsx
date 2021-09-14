import React from "react";

function Stores(stores) {
	return (
		<div className="game__genres">
			Stores :
			<>
				{stores.stores.map((store) => {
					return (
						<span className="game__genre" key={store.store.id}>
							{store.store.name}
						</span>
					);
				})}
			</>
		</div>
	);
}

export default Stores;
