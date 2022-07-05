import React from "react";
import { FaPhone } from "react-icons/fa";
import { Button } from "../../components/Button/Button.styled";
import {
	CallIcon,
	HeroImage,
	HeroImageContainer,
	HomeContactGroup,
	HomeContainer,
	HomeContent,
	HomeCover,
	HomeDesc,
	HomeHeading,
	HomeLine,
	HomeLineText,
	HomeTitle,
	TitleSpan,
} from "./Home.styled";
import Hero from "../../assets/images/banner-right-image.png";

const Home = () => {
	return (
		<HomeCover>
			<HomeContainer>
				<HomeContent>
					<HomeHeading>Video Tutorials</HomeHeading>
					<HomeTitle>
						<TitleSpan color='#2a2a2a'>Get the </TitleSpan>
						<TitleSpan color='#03a4ed'>best ideas </TitleSpan>{" "}
						<TitleSpan color='#2a2a2a'>for </TitleSpan>
						<TitleSpan color='#ff695f'> your website</TitleSpan>
					</HomeTitle>
					<HomeDesc>
						Various designers are active here and always post ideas useful for
						building beautiful websites.
					</HomeDesc>
					<HomeContactGroup>
						<Button color='#fff' bg='#03a4ed'>
							Our Services
						</Button>
						<HomeLine>
							<CallIcon>
								<FaPhone />
							</CallIcon>
							<HomeLineText>010-020-0340</HomeLineText>
						</HomeLine>
					</HomeContactGroup>
				</HomeContent>
			</HomeContainer>
			<HeroImageContainer>
				<HeroImage src={Hero} />
			</HeroImageContainer>
		</HomeCover>
	);
};

export default Home;
