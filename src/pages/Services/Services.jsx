import React from "react";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { HeadingContainer, ServicesContainer, ServicesLeftBg, ServicesRightBg } from "./Services.styled";
import LeftBg from '../../assets/images/services-left-dec.png'
import RightBg from '../../assets/images/services-right-dec.png'

const Services = () => {
	return (
		<ServicesContainer id="services">
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
		</ServicesContainer>
	);
};

export default Services;
