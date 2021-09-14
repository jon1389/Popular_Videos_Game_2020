import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Genres from "../components/Genres";
import Platforms from "../components/Platforms";
import Slider from "../components/Slider";
import Stores from "../components/Stores";

function Game(game) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => {
		setShow(true);
	};

	const genres = game.game.genres;
	const screenshots = game.game.short_screenshots;
	const platforms = game.game.platforms;
	const stores = game.game.stores;

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				More info
			</Button>
			<Modal show={show} onHide={handleClose} animation={false}>
				<Modal.Header className="game__header">
					<Modal.Title className="game__title">{game.game.name}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Genres genres={genres} />
					<hr />
					<Platforms platforms={platforms} />
					<hr />
					<Stores stores={stores} />
					<hr />
					<Slider screenshots={screenshots} />
				</Modal.Body>
				<Modal.Footer>
					<Button className="game__footerBtn" variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default Game;
