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
	MailTitle,
	WebContainer,
	WebInput,
} from "./Mail.styled";
import MailBgTwo from '../../assets/images/subscribe-dec.png'
import { SectionContainer } from "../../components/SectionContainer/SectionContainer.styled";

const MailSub = () => {
	return (
		<SectionContainer>
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
		</SectionContainer>
	);
};

export default MailSub;
