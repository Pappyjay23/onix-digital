import React from "react";
import {
	BottomFooterText,
	FCDesc,
	FCLogo,
	FCSocial,
	FCSocialGroup,
	FooterCompanyInfo,
	FooterContainer,
	FooterFlexGroup,
	FooterLink,
	FooterLinkGroup,
	FooterLinks,
	FooterLinkTitle,
	FooterMailDesc,
	FooterMailGroup,
	FooterMailInputContainer,
	FooterSection,
	MailButton,
	MailInput,
	SocialIcon,
} from "./Footer.styled";
import Logo from "../../assets/images/logo.png";
import { FooterIconData, FooterLinkData } from "../../data/FooterData";
import {FaPaperPlane} from 'react-icons/fa'

const Footer = () => {
	return (
		<FooterSection>
			<FooterContainer>
				<FooterFlexGroup>
					<FooterCompanyInfo>
						<FCLogo src={Logo} />
						<FCDesc>info@onixdigital.com</FCDesc>
						<FCSocialGroup>
							{FooterIconData.map((icon, index) => (
								<FCSocial key={index}>
									<SocialIcon>{icon}</SocialIcon>
								</FCSocial>
							))}
						</FCSocialGroup>
					</FooterCompanyInfo>

					{FooterLinkData.map((link, index) => (
						<FooterLinkGroup key={index}>
							<FooterLinkTitle>{link.title}</FooterLinkTitle>
							<FooterLinks>
								{link.links.map((idLink, index) => (
									<FooterLink key={index} href='/'>
										{idLink}
									</FooterLink>
								))}
							</FooterLinks>
						</FooterLinkGroup>
					))}

					<FooterMailGroup>
						<FooterLinkTitle>Subscribe Newsletters</FooterLinkTitle>
						<FooterMailDesc>Get our latest news and ideas to your inbox</FooterMailDesc>
						<FooterMailInputContainer>
							<MailInput type='email' placeholder="Your Email" />
							<MailButton><FaPaperPlane /></MailButton>
						</FooterMailInputContainer>
					</FooterMailGroup>
				</FooterFlexGroup>

				<BottomFooterText>Copyright © 2021 Onix Digital Co., Ltd. All Rights Reserved. 
            </BottomFooterText>
			</FooterContainer>
		</FooterSection>
	);
};

export default Footer;
