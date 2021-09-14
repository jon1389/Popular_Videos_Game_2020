import React from "react";
import { Carousel } from "react-bootstrap";

export default function Slider(screenshots) {
	return (
		<>
			<h4 className="slider__title">Screenshots :</h4>
			<Carousel fade variant="dark" className="slider__body">
				{screenshots.screenshots.map((screenshot) => {
					return (
						<Carousel.Item key={screenshot.id}>
							<img className="d-block w-100" src={screenshot.image} alt="Screenshot" />
						</Carousel.Item>
					);
				})}
			</Carousel>
		</>
	);
}
