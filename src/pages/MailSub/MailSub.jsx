import React from "react";
import { Button } from "../../components/Button/Button.styled";
import {
    ButtonContainer,
	EmailContainer,
	EmailInput,
	MailCardContainer,
	MailContainer,
	MailTitle,
	WebContainer,
	WebInput,
} from "./Mail.styled";

const MailSub = () => {
	return (
		<MailContainer>
			<MailCardContainer>
				<MailTitle>Know Your Website SEO Score by Email</MailTitle>
				<WebContainer>
					<WebInput placeholder='Your Website URL' type='text' />
				</WebContainer>
				<EmailContainer>
					<EmailInput placeholder='Your Email' type='email' />
				</EmailContainer>
				<ButtonContainer>
					<Button color='#fff' bg='#ff695f'>
						Subscribe
					</Button>
				</ButtonContainer>
			</MailCardContainer>
		</MailContainer>
	);
};

export default MailSub;
