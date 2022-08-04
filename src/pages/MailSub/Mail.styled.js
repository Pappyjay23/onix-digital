import styled from "styled-components";
import MailBg from '../../assets/images/subscribe-bg.png'

export const MailContainer = styled.div`
	padding: 5rem 15px;
	position: relative;
	@media screen and (min-width: 768px) {
		padding: 1.5rem 30px;
	}

	@media screen and (min-width: 1024px) {
		padding: 1.5rem 50px;
		max-width: 1200px;
		margin: 0 auto;
	}
`;

export const MailCardContainer = styled.div`
	background-image: url(${MailBg});
    background-position: center;
    background-size: cover;
	padding: 2rem;
	border-radius: 20px;
`;
export const MailTitle = styled.p`
	color: ${({ theme }) => theme.colors.white};
	font-size: 1.8rem;
	font-weight: 700;
	text-align: center;
	margin-bottom: 2rem;
`;
export const WebContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.white};
	padding: 0.7rem 1rem;
	border-radius: 30px;
	margin-bottom: 1rem;
`;
export const WebInput = styled.input`
	background-color: transparent;
	border: none;
	outline: none;
`;
export const EmailContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.white};
	padding: 0.7rem 1rem;
	border-radius: 30px;
	margin-bottom: 1rem;
`;
export const EmailInput = styled.input`
	background-color: transparent;
	border: none;
	outline: none;
`;
export const ButtonContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: center;
`
