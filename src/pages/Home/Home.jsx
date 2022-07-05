import React from "react";
import {
	HeroImage,
	HeroImageContainer,
	HomeContainer,
	HomeContentContainer,
	HomeContentGroup,
	HomeCover,
} from "./Home.styled";
import Hero from "../../assets/images/banner-right-image.png";
import HomeContent from "./HomeContent";
import { HomeContentData } from "../../data/HomeContentData";

const Home = () => {
	return (
		<HomeCover>
			<HomeContainer>
				<HomeContentGroup>
					{HomeContentData.map((data, index) => (
						<HomeContentContainer key={index}>
							<HomeContent data={data} />
						</HomeContentContainer>
					))}
				</HomeContentGroup>
			</HomeContainer>
			<HeroImageContainer>
				<HeroImage src={Hero} />
			</HeroImageContainer>
		</HomeCover>
	);
};

export default Home;
