import React from "react";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import {
    AboutCard,
    AboutCardAmount,
    AboutCardContainer,
	AboutCardDesc,
	AboutCardIcon,
	AboutCardTitle,
	AboutContainer,
	AboutContentContainer,
	AboutFlexContainer,
	AboutImage,
	AboutImageContainer,
	AboutSectionDesc,
} from "./About.styled";
import AboutImg from "../../assets/images/about-left-image.png";
import { AboutData } from "../../data/AboutData";

const About = () => {
	return (
		<AboutContainer>
			<AboutFlexContainer>
				<AboutImageContainer>
					<AboutImage src={AboutImg} />
				</AboutImageContainer>
				<AboutContentContainer>
					<SectionHeading
						spanOne='Grow your website with our '
						spanTwo='SEO tools '
						spanThree='& '
						spanFour='Project Management'
						subTitle
					/>
					<AboutSectionDesc>{AboutData.desc}</AboutSectionDesc>
					<AboutCardContainer>
						{AboutData.cards.map((card, index) => (
							<AboutCard key={index}>
								<AboutCardIcon></AboutCardIcon>
								<AboutCardAmount>{card.amount}</AboutCardAmount>
								<AboutCardTitle>{card.title}</AboutCardTitle>
								<AboutCardDesc>{card.desc}</AboutCardDesc>
							</AboutCard>
						))}
					</AboutCardContainer>
				</AboutContentContainer>
			</AboutFlexContainer>
		</AboutContainer>
	);
};

export default About;
