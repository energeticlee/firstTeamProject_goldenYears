import React from "react";
import HomeNavBar from "./HomeNavBar";

const Landing = () => {
	return (
		<>
			<HomeNavBar />

			<h1
				className="is-size-1 has-text-centered has-text-primary"
				id="home-title"
			>
				GoldenYears
			</h1>

			<p className="content is-medium has-text-centered" id="home-content">
				Make the sunset years of your life the best years of your life. Let us
				help you get into better shape so you can continue to enjoy all that
				live has to offer. Age is just a number - do not let it stop you from
				doing all the things you want to do - scuba diving, bungee jumping,
				cliff diving, mountain biking... All these activities are within your
				grasp as long as you partake in our fitness tests regularly!
			</p>

			<div
				id="carouselExampleCaptions"
				className="carousel slide"
				data-bs-ride="carousel"
			>
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="1"
						aria-label="Slide 2"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="2"
						aria-label="Slide 3"
					></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src="" className="d-block w-100" alt="..." />
						<div className="carousel-caption d-none d-md-block">
							<h5>First slide label</h5>
							<p>
								Some representative placeholder content for the first slide.
							</p>
						</div>
					</div>
					<div className="carousel-item">
						<img src="..." className="d-block w-100" alt="..." />
						<div className="carousel-caption d-none d-md-block">
							<h5>Second slide label</h5>
							<p>
								Some representative placeholder content for the second slide.
							</p>
						</div>
					</div>
					<div className="carousel-item">
						<img src="..." className="d-block w-100" alt="..." />
						<div className="carousel-caption d-none d-md-block">
							<h5>Third slide label</h5>
							<p>
								Some representative placeholder content for the third slide.
							</p>
						</div>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</>
	);
};
export default Landing;
