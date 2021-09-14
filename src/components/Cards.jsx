import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import Axios from "axios";
import env from "react-dotenv";
import ReactPaginate from "react-paginate";
import Game from "../pages/Game";
import DayJS from "react-dayjs";

function Cards() {
	const [games, setGames] = useState([]);
	const [pageNumber, setPageNumber] = useState(0);

	const gamesPerPage = 10;
	const pagesVisited = pageNumber * gamesPerPage;

	useEffect(() => {
		Axios.get(
			`https://api.rawg.io/api/games?key=${env.API_KEY}&dates=2020-01-01,2020-12-31&ordering=-added`
		)
			.then((response) => {
				setGames(response.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const displayGames = games.slice(pagesVisited, pagesVisited + gamesPerPage).map((game) => {
		return (
			<Card className="card" key={game.id}>
				<Card.Img
					className="card__img"
					variant="top"
					src={game.background_image}
					alt={`Picture of the game ${game.name}`}
				/>
				<Card.Body className="card__body">
					<Card.Title className="card__body__title">{game.name}</Card.Title>
					<div className="card__body__texts">
						<div>
							<span className="card__body__text">Released date : </span>
							<DayJS format="DD/MM/YYYY">{game.released}</DayJS>
						</div>
						<div>
							<span className="card__body__text">Metacritic : </span>
							<span>{game.metacritic}/100</span>
						</div>
						<div>
							<span className="card__body__text">Rating : </span>
							<span>{game.rating}</span>
						</div>
					</div>
					<Game game={game} />
				</Card.Body>
			</Card>
		);
	});

	const pageCount = Math.ceil(games.length / gamesPerPage);

	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};

	return (
		<Container className="cards">
			{displayGames}
			<ReactPaginate
				className="cards_pagination"
				previousLabel={"Previous"}
				nextLabel={"Next"}
				pageCount={pageCount}
				onPageChange={changePage}
				containerClassName={"paginationBttns"}
				previousLinkClassName={"previousBttn"}
				nextLinkClassName={"nextBttn"}
				disabledClassName={"paginationDisabled"}
				activeClassName={"paginationActive"}
			/>
		</Container>
	);
}

export default Cards;
