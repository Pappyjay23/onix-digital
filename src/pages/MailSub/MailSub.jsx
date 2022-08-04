import React from "react";
import { Button } from "../../components/Button/Button.styled";
import {
	ButtonContainer,
	CardContentContainer,
	CardRoundedContainer,
	EmailContainer,
	EmailInput,
	MailBgd,
	MailCardContainer,
	MailContainer,
	MailTitle,
	WebContainer,
	WebInput,
} from "./Mail.styled";
import MailBgTwo from '../../assets/images/subscribe-dec.png'

const MailSub = () => {
	return (
		<MailContainer>
			<MailCardContainer>
                <MailBgd src={MailBgTwo} />
				<MailTitle>Know Your Website SEO Score by Email</MailTitle>
				<CardContentContainer>
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
				</CardContentContainer>
				<CardRoundedContainer>
					<WebInput placeholder='Your Website URL' type='text' />
					<EmailInput placeholder='Your Email' type='email' />
					<Button color='#fff' bg='#03a4ed'>
						Subscribe
					</Button>
				</CardRoundedContainer>
			</MailCardContainer>
		</MailContainer>
	);
};

export default MailSub;
