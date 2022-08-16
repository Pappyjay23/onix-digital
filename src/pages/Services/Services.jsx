import React, { useEffect, useState } from "react";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import {
	CardContainer,
	HeadingContainer,
	ServicesCard,
	ServicesCardContainer,
	ServicesCardDesc,
	ServicesCardIcon,
	ServicesCardTitle,
	ServicesLeftBg,
	ServicesRightBg,
} from "./Services.styled";
import LeftBg from "../../assets/images/services-left-dec.png";
import RightBg from "../../assets/images/services-right-dec.png";
import { ServiceCardData } from "../../data/ServiceCardData";
import { SectionContainer } from "../../components/SectionContainer/SectionContainer.styled";

const Services = () => {
	const [marqueeWidth, setMarqueeWidth] = useState("80vw");
	const [elDisplayed, setElDisplayed] = useState(3);

	useEffect(() => {
		if (window.innerWidth >= 320) {
			setElDisplayed(1)
			setMarqueeWidth('90vw')
		}else if (window.innerWidth >= 425) {
			setElDisplayed(2)
			setMarqueeWidth('80vw')
		}
	}, []);

	return (
		<SectionContainer id='services'>
			<ServicesLeftBg src={LeftBg} />
			<ServicesRightBg src={RightBg} />
			<HeadingContainer>
				<SectionHeading
					spanOne='We '
					spanTwo='provide '
					spanThree='the best service with '
					spanFour='our tools'
					subTitle='our services'
				/>
			</HeadingContainer>
			<ServicesCardContainer
				marqueeWidth={marqueeWidth}>
				<CardContainer
					marqueeWidth={marqueeWidth}
					elDisplayed={elDisplayed}>
					{ServiceCardData.map((data, index) => (
						<ServicesCard
							key={index}
							marqueeWidth={marqueeWidth}>
							<ServicesCardTitle>{data.title}</ServicesCardTitle>
							<ServicesCardIcon>{data.icon}</ServicesCardIcon>
							<ServicesCardDesc>{data.desc}</ServicesCardDesc>
						</ServicesCard>
					))}
				</CardContainer>
			</ServicesCardContainer>
		</SectionContainer>
	);
};

export default Services;
