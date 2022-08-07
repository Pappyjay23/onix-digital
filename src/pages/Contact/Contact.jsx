import React from "react";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { Button } from "../../components/Button/Button.styled";
import { ContactFormData, ContactInfoData } from "../../data/ContactData";
import {
	CForm,
	CInput,
	ContactCard,
	ContactCardContent,
	ContactContainer,
	ContactInfoContainer,
	ContactInfoGroup,
	ContactInfoIcon,
	ContactInfoItem,
	ContactInfoItemGroup,
	ContactSection,
	IconSpan,
} from "./Contact.styled";

const Contact = () => {
	return (
		<ContactSection>
			<ContactContainer>
				<SectionHeading
					spanOne='Feel free to'
					spanTwo=' Contact'
					spanThree=' us via the'
					spanFour='HTML Form'
				/>
				<ContactCardContent>
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
					<ContactInfoContainer>
						{ContactInfoData.map((data, index) => (
							<ContactInfoGroup key={index}>
								<ContactInfoIcon><IconSpan>{data.icon}</IconSpan></ContactInfoIcon>
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
