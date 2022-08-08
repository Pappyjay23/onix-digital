import React from "react";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import {
	PContentDesc,
	PlanCardContents,
	PlanMiniSale,
	PlanSale,
	PlansCard,
	PlansCardContainer,
	PlansContainer,
	PlansImageOne,
	PlansImageTwo,
	PlansTitle,
	SalesContainer,
} from "./Plans.styled";
import ImageOne from "../../assets/images/tables-left-dec.png";
import ImageTwo from "../../assets/images/tables-right-dec.png";
import { Button } from "../../components/Button/Button.styled";
import { PlansCardData } from "../../data/PlansCardData";
import { SectionContainer } from "../../components/SectionContainer/SectionContainer.styled";

const Plans = () => {
	return (
		<PlansContainer>
			<PlansImageOne src={ImageOne} />
			<PlansImageTwo src={ImageTwo} />
			<SectionContainer>
				<SectionHeading
					spanOne='Select a suitable'
					spanTwo='Plan'
					spanThree='For your next'
					spanFour='projects'
					subTitle='Our plans'
				/>
				<PlansCardContainer>
					{PlansCardData.map((data, item) => (
						<PlansCard key={item}>
							<PlansTitle>{data.title}</PlansTitle>
							<SalesContainer>
								<PlanMiniSale>{data.miniSale}</PlanMiniSale>
								<PlanSale>{data.sale}</PlanSale>
							</SalesContainer>
							<PlanCardContents>
								{data.cardContent.map((content, index) =>(
                                    <PContentDesc key={index}>{content}</PContentDesc>
                                ))}
							</PlanCardContents>
							<Button color='#fff' btnSmall bg='#03a4ed'>
								{data.btnContent}
							</Button>
						</PlansCard>
					))}
				</PlansCardContainer>
			</SectionContainer>
		</PlansContainer>
	);
};

export default Plans;
