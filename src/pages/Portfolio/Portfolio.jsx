import React from "react";
import {
	CardContainer,
	PortfolioBg,
	PortfolioCard,
	PortfolioCardContainer,
	PortfolioSubCard,
	PSubCardContent,
	PSubCardDesc,
	PSubCardTitle,
} from "./Portfolio.styled";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { PortfolioData } from "../../data/PortfolioData";
import { SectionContainer } from "../../components/SectionContainer/SectionContainer.styled";
import PortfolioBgd from "../../assets/images/portfolio-left-dec.png";

const Portfolio = () => {
	return (
		<SectionContainer id='portfolio'>
			<PortfolioBg src={PortfolioBgd} />
			<SectionHeading
				spanOne='Our Recent'
				spanTwo='Projects'
				spanThree='& Case Studies'
				spanFour='for clients'
				subTitle='Our portfolio'
			/>
			<PortfolioCardContainer>
				<CardContainer>
					{PortfolioData.map((data, index) => (
						<PortfolioCard key={index} image={data.image}>
							<PortfolioSubCard>
								<PSubCardContent>
									<PSubCardTitle>{data.title}</PSubCardTitle>
									<PSubCardDesc>{data.desc}</PSubCardDesc>
								</PSubCardContent>
							</PortfolioSubCard>
						</PortfolioCard>
					))}
				</CardContainer>
			</PortfolioCardContainer>
		</SectionContainer>
	);
};

export default Portfolio;
