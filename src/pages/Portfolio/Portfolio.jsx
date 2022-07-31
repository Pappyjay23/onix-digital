import React from "react";
import {
	CardContainer,
	PortfolioCard,
	PortfolioCardContainer,
	PortfolioContainer,
	PortfolioSubCard,
	PSubCardContent,
	PSubCardDesc,
	PSubCardTitle,
} from "./Portfolio.styled";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { PortfolioData } from "../../data/PortfolioData";

const Portfolio = () => {
	return (
		<PortfolioContainer id='portfolio'>
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
		</PortfolioContainer>
	);
};

export default Portfolio;
