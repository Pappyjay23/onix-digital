import React from "react";
import {TitleSpan} from '../../pages/Home/Home.styled'
import { SectionSubTitle, SectionTitle } from "./SectionHeading.styled";

const SectionHeading = ({spanOne, spanTwo, spanThree, spanFour, subTitle}) => {
	return (
		<div>
			<SectionTitle widthSmall>
				<TitleSpan color='#2a2a2a'>{spanOne} </TitleSpan>
				<TitleSpan color='#03a4ed'>{spanTwo} </TitleSpan>
				<TitleSpan color='#2a2a2a'>{spanThree} </TitleSpan>
				<TitleSpan color='#ff695f'> {spanFour}</TitleSpan>
			</SectionTitle>
            <SectionSubTitle>{subTitle}</SectionSubTitle>
		</div>
	);
};

export default SectionHeading;
