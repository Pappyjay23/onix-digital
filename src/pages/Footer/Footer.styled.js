import styled from "styled-components";

export const FooterSection = styled.div`
	position: relative;
`;
export const FooterContainer = styled.div`
	padding: 2rem 15px;
	@media screen and (min-width: 768px) {
		padding: 1.5rem 30px;
	}

	@media screen and (min-width: 1024px) {
		padding: 1.5rem 50px;
		max-width: 1200px;
		margin: 0 auto;
	}
`;

export const FooterFlexGroup = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 3rem;

	@media (min-width:768px){
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}
	@media (min-width:1024px){
		flex-direction: row;
		flex-wrap: nowrap;
	}
`;
export const FooterCompanyInfo = styled.div`
	margin-bottom: 3rem;
	@media (min-width:768px){
		margin-right: 3rem;
	}
	@media (min-width:1024px){
		width: 210px;
		margin-bottom: 0;
	}
`;
export const FCLogoLink = styled.a`
	cursor: pointer;
`;
export const FCLogo = styled.img`
	width: 85px;
	height: auto;
	margin-bottom: 0.5rem;
`;
export const FCDesc = styled.p`
	color: #afafaf;
	margin-bottom: 1.5rem;
`;
export const FCSocialGroup = styled.div`
	display: flex;
`;
export const FCSocial = styled.a`
	background-color: ${({ theme }) => theme.colors.blue};
	margin-right: 1rem;
	width: 36px;
	height: 36px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	cursor: pointer;
`;
export const SocialIcon = styled.span`
	color: ${({ theme }) => theme.colors.white};
	display: flex;
    align-items: center;
`;

export const FooterLinkGroup = styled.div`
	margin-bottom: 3rem;
	display: flex;
	flex-direction: column;
	margin-bottom: 3rem;
	@media (min-width:768px){
		margin-right: 3rem;
	}
	@media (min-width:1024px){
		margin-bottom: 0;
		width: 210px;
	}
`;
export const FooterLinkTitle = styled.p`
	margin-bottom: 1.5rem;
	font-weight: 700;
	font-size: 1.1rem;
`;
export const FooterLinks = styled.div`
	display: flex;
	flex-direction: column;
`;
export const FooterLink = styled.a`
	text-decoration: none;
	font-size: 95%;
	color: #afafaf;
	margin-bottom: 1rem;
`;

export const FooterMailGroup = styled.div`
	display: flex;
	flex-direction: column;
`;
export const FooterMailDesc = styled.p`
	font-size: 95%;
	color: #afafaf;
	margin-bottom: 1rem;
`;
export const FooterMailInputContainer = styled.form`
	background-color: ${({theme}) => theme.colors.blue};
	padding: .7rem 1.5rem;
	border-radius: 30px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const MailInput = styled.input`
	width: 80%;
	background-color: transparent;
	outline: none;
	border: none;
	color: ${({theme}) => theme.colors.white};
	font-size: 90%;

	::placeholder{
		color: ${({theme}) => theme.colors.white};
	}
	`;
export const MailButton = styled.button`
	background-color: transparent;
	outline: none;
	border: none;
	color: ${({theme}) => theme.colors.white};
	font-size: 1rem;
	cursor: pointer;
	
`;

export const BottomFooterText = styled.p`
	color: #afafaf;
	font-size: 85%;
	text-align: center;
`
