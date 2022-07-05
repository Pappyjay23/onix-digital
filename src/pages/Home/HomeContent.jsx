import React from "react";
import { FaPhone } from "react-icons/fa";
import { Button } from "../../components/Button/Button.styled";
import {
	CallIcon,
	HomeContactGroup,
	HomeDesc,
	HomeHeading,
	HomeLine,
	HomeLineText,
	HomeTitle,
	TitleSpan,
} from "./Home.styled";

const HomeContent = ({ data }) => {
	return (
		<>
			<HomeHeading>{data.heading}</HomeHeading>
			<HomeTitle>
				<TitleSpan color='#2a2a2a'>{data.spanOne} </TitleSpan>
				<TitleSpan color='#03a4ed'>{data.spanTwo} </TitleSpan>
				<TitleSpan color='#2a2a2a'>{data.spanThree} </TitleSpan>
				<TitleSpan color='#ff695f'> {data.spanFour}</TitleSpan>
			</HomeTitle>
			<HomeDesc>{data.desc}</HomeDesc>
			<HomeContactGroup>
				<Button color='#fff' bg='#03a4ed'>
					{data.btnName}
				</Button>
				<HomeLine>
					<CallIcon>
						<FaPhone />
					</CallIcon>
					<HomeLineText>{data.callLine}</HomeLineText>
				</HomeLine>
			</HomeContactGroup>
		</>
	);
};

export default HomeContent;
