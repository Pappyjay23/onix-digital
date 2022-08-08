import styled from "styled-components";
import MailBg from "../../assets/images/subscribe-bg.png";

export const MailCardContainer = styled.div`
	background-image: url(${MailBg});
	background-position: center;
	background-size: cover;
	padding: 4rem 2rem;
	border-radius: 20px;

    @media (min-width: 768px){
        padding: 4rem;
    }
`;
export const MailBgd = styled.img`
    position: absolute;
    top: 10px;
    right: 30px;
    display: none;

    @media (min-width: 1024px){
        display: flex;
    }
`
export const MailTitle = styled.p`
	color: ${({ theme }) => theme.colors.white};
	font-size: 1.8rem;
	font-weight: 700;
	text-align: center;
	margin-bottom: 2rem;
`;
export const CardContentContainer = styled.div`
	@media screen and (min-width: 768px) {
		display: none;
	}
`;
export const CardRoundedContainer = styled.div`
	display: none;
	@media screen and (min-width: 768px) {
		background-color: ${({ theme }) => theme.colors.white};
		padding: 1rem 1.5rem;
		display: flex;
		justify-content: space-between;
		border-radius: 70px;
	}
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

	::placeholder {
		color: #b2b2b2;
	}
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

	::placeholder {
		color: #b2b2b2;
	}
`;
export const ButtonContainer = styled.div`
	margin-top: 1rem;
	display: flex;
	justify-content: center;
`;
