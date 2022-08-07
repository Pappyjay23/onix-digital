import styled from "styled-components";
import ContactCardBg from "../../assets/images/contact-form-bg.png";

export const ContactSection = styled.div``;
export const ContactContainer = styled.div`
	padding: 5rem 15px;
	@media screen and (min-width: 768px) {
		padding: 1.5rem 30px;
	}

	@media screen and (min-width: 1024px) {
		padding: 1.5rem 50px;
		max-width: 1200px;
		margin: 0 auto;
	}
`;
export const ContactCardContent = styled.div`
	margin-top: 3rem;
`;
export const ContactCard = styled.div`
	background-image: url(${ContactCardBg});
	background-size: cover;
	background-position: center;
	padding: 4rem 2rem;
	border-radius: 20px;
	box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
	margin-bottom: 4rem;
`;
export const CForm = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const CInput = styled.input`
	width: 100%;
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.colors.lightBlue};
	outline: none;
	padding-bottom: 0.5rem;
	margin-bottom: 2.5rem;
	background-color: transparent;
	font-size: 90%;

	::placeholder {
		color: #b2b2b2;
	}
`;
export const ContactInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	/* align-items: center; */
	padding-left: 2rem;
`;
export const ContactInfoGroup = styled.div`
	display: flex;
	margin-bottom: 1rem;
`;
export const ContactInfoIcon = styled.div`
	margin-right: 1rem;
	background: ${({ theme }) => theme.colors.orangeGrad};
	padding: 1rem;
	border-radius: 50%;
	width: 48px;
	height: 48px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${({ theme }) => theme.colors.white};
`;
export const IconSpan = styled.span`
	font-size: 1.2rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const ContactInfoItemGroup = styled.div`
	display: flex;
	flex-direction: column;
`;
export const ContactInfoItem = styled.p`
	font-size: 90%;
	color: ${({ theme }) => theme.colors.orange};
`;
