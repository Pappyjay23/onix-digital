import React from "react";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { Button } from "../../components/Button/Button.styled";
import { ContactFormData, ContactInfoData } from "../../data/ContactData";
import {
	CForm,
	CInput,
	ContactCard,
	ContactCardContainer,
	ContactCardContent,
	ContactContainer,
	ContactImageCard,
	ContactInfoContainer,
	ContactInfoGroup,
	ContactInfoIcon,
	ContactInfoItem,
	ContactInfoItemGroup,
	ContactSection,
	IconSpan,
	LeftContactBg,
	RightContactBg,
} from "./Contact.styled";
import LeftBgd from '../../assets/images/contact-left-dec.png'
import RightBgd from '../../assets/images/contact-dec.png'

const Contact = () => {
	return (
		<ContactSection>
		<LeftContactBg src={LeftBgd} />
		<RightContactBg src={RightBgd} />
			<ContactContainer>
				<SectionHeading
					spanOne='Feel free to'
					spanTwo=' Contact'
					spanThree=' us via the'
					spanFour='HTML Form'
				/>
				<ContactCardContent>
					<ContactCardContainer>
						<ContactImageCard></ContactImageCard>
						<ContactCard>
							<CForm>
								{ContactFormData.map((input, index) => (
									<CInput
										key={index}
										type={input.type}
										placeholder={input.placeholder}
									/>
								))}
								<Button bg='#ff695f' color='#fff'>
									Submit Request
								</Button>
							</CForm>
						</ContactCard>
					</ContactCardContainer>
					<ContactInfoContainer>
						{ContactInfoData.map((data, index) => (
							<ContactInfoGroup key={index}>
								<ContactInfoIcon>
									<IconSpan>{data.icon}</IconSpan>
								</ContactInfoIcon>
								<ContactInfoItemGroup>
									{data.details.map((det, index) => (
										<ContactInfoItem key={index}>{det}</ContactInfoItem>
									))}
								</ContactInfoItemGroup>
							</ContactInfoGroup>
						))}
					</ContactInfoContainer>
				</ContactCardContent>
			</ContactContainer>
		</ContactSection>
	);
};

export default Contact;
