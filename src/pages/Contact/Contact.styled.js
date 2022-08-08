import styled from "styled-components";
import ContactCardBg from "../../assets/images/contact-form-bg.png";
import ImageCardBg from "../../assets/images/video-big-thumb-03.png";

export const ContactSection = styled.div`
	position: relative;
`;
export const LeftContactBg = styled.img`
	position: absolute;
	top: 100px;
	left: 0;
	z-index: -5;
	`;
export const RightContactBg = styled.img`
	position: absolute;
	right: 0;
	bottom: 0;
	z-index: -5;
`;
export const ContactCardContent = styled.div`
	margin-top: 3rem;
`;
export const ContactCardContainer = styled.div`
	position: relative;
`;
export const ContactImageCard = styled.div`
	/* background-color: #ddd; */
	/* width: 600px; */
	box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
	background-image: url(${ImageCardBg});
	background-size: cover;
	background-position: center;
	border-radius: 20px;
	height: 350px;
	width: 55%;
	position: absolute;
	top: 80px;
	z-index: -1;
	display: none;

	@media (min-width:1024px){
		display: flex;
	}
`;
export const ContactCard = styled.div`
	background-image: url(${ContactCardBg});
	background-size: cover;
	background-position: center;
	padding: 4rem 2rem;
	border-radius: 20px;
	box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
	margin-bottom: 4rem;

	@media (min-width: 1024px) {
		width: 50%;
		margin-left: auto;
		padding: 6rem 4rem;
	}
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
	@media (min-width: 768px) {
		flex-direction: row;
	}
`;
export const ContactInfoGroup = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 1rem;
	@media (min-width: 768px) {
		margin-bottom: 0;
		margin-right: 3rem;
	}
`;
export const ContactInfoIcon = styled.div`
	margin-right: 1rem;
	background: ${({ theme }) => theme.colors.orangeGrad};
	padding: 1rem;
	border-radius: 50%;
	width: 46px;
	height: 46px;
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
	margin-bottom: 0.3rem;
`;
