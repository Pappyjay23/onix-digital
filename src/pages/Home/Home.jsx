import React, { useEffect, useState } from "react";
import {
	HeroImage,
	HeroImageContainer,
	HomeContainer,
	HomeContentContainer,
	HomeContentCover,
	HomeContentGroup,
	HomeCover,
	HomeLink,
	HomeLinks,
} from "./Home.styled";
import Hero from "../../assets/images/banner-right-image.png";
import HomeContent from "./HomeContent";
import { HomeContentData } from "../../data/HomeContentData";

const Home = () => {
	const slides = HomeContentData;
	const [current, setCurrent] = useState(0);
	useEffect(() => {
		const nextSlide = () => {
			setCurrent(current === slides.length - 1 ? 0 : current + 1);
		};
		setTimeout(() => {
			nextSlide();
		}, 5000);
	}, [current, slides]);

	return (
		<HomeCover>
			<HomeContainer>
				<HomeContentGroup>
					{HomeContentData.map((data, index) => (
						<HomeContentCover
							active={current === index ? true : false}
							key={index}>
							{current === index && (
								<HomeContentContainer>
									<HomeContent data={data} />
								</HomeContentContainer>
							)}
						</HomeContentCover>
					))}
				</HomeContentGroup>
				<HomeLinks>
					{slides.map((slide, index) => {
						return (
							<HomeLink
								key={index}
								active={current === index ? true : false}>
								{index + 1}
							</HomeLink>
						);
					})}
				</HomeLinks>
			</HomeContainer>
			<HeroImageContainer>
				<HeroImage src={Hero} />
			</HeroImageContainer>
		</HomeCover>
	);
};

export default Home;
