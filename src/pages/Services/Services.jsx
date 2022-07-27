import React from "react";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import {
	CardContainer,
	HeadingContainer,
	ServicesCard,
	ServicesCardContainer,
	ServicesCardDesc,
	ServicesCardIcon,
	ServicesCardTitle,
	ServicesContainer,
	ServicesLeftBg,
	ServicesRightBg,
} from "./Services.styled";
import LeftBg from "../../assets/images/services-left-dec.png";
import RightBg from "../../assets/images/services-right-dec.png";
import { FaDatabase } from "react-icons/fa";
import { ServiceCardData } from "../../data/ServiceCardData";

const Services = () => {
	return (
		<ServicesContainer id='services'>
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
			<ServicesCardContainer>
			<CardContainer>
				{ServiceCardData.map((data, index) => (
					<ServicesCard key={index}>
						<ServicesCardTitle>
							{data.title}
						</ServicesCardTitle>
						<ServicesCardIcon>
							<FaDatabase />
						</ServicesCardIcon>
						<ServicesCardDesc>
							{data.desc}
						</ServicesCardDesc>
					</ServicesCard>
				))}
			</CardContainer>
			</ServicesCardContainer>
		</ServicesContainer>
	);
};

export default Services;
