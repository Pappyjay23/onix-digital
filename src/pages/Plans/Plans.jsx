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
	PlansContent,
	PlansImageOne,
	PlansImageTwo,
    PlansTitle,
    SalesContainer,
} from "./Plans.styled";
import ImageOne from "../../assets/images/tables-left-dec.png";
import ImageTwo from "../../assets/images/tables-right-dec.png";
import { Button } from "../../components/Button/Button.styled";

const Plans = () => {
	return (
		<PlansContainer>
			<PlansImageOne src={ImageOne} />
			<PlansImageTwo src={ImageTwo} />
			<PlansContent>
				<SectionHeading
					spanOne='Select a suitable'
					spanTwo='Plan'
					spanThree='For your next'
					spanFour='projects'
					subTitle='Our plans'
				/>
				<PlansCardContainer>
					<PlansCard>
						<PlansTitle></PlansTitle>
						<SalesContainer>
							<PlanMiniSale></PlanMiniSale>
							<PlanSale></PlanSale>
						</SalesContainer>
                        <PlanCardContents>
                            <PContentDesc></PContentDesc>
                        </PlanCardContents>
                        <Button color="#fff" btnSmall bg='#03a4ed'>Yooo</Button>
					</PlansCard>
				</PlansCardContainer>
			</PlansContent>
		</PlansContainer>
	);
};

export default Plans;
