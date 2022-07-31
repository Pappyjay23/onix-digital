import React from 'react'
import { CardContainer, PortfolioCard, PortfolioCardContainer, PortfolioContainer } from './Portfolio.styled'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import { PortfolioData } from '../../data/PortfolioData'

const Portfolio = () => {
  return (
    <PortfolioContainer id='portfolio'>
      <SectionHeading spanOne='Our Recent' spanTwo='Projects' spanThree='& Case Studies' spanFour="for clients" subTitle='Our portfolio' />
      <PortfolioCardContainer>
				<CardContainer>
					{PortfolioData.map((data, index) => (
						<PortfolioCard key={index} image={data.image}>
							
						</PortfolioCard>
					))}
				</CardContainer>
			</PortfolioCardContainer>
    </PortfolioContainer>
  )
}

export default Portfolio