import styled from "styled-components";

export const NavContainer = styled.div`
	background-color: ${({theme}) => theme.colors.lightGrey};
	color: #fff;
	padding: 1.5rem 20px;

	@media screen and (min-width: 768px) {
		padding: 1.5rem 30px;
	}

	@media screen and (min-width: 1024px) {
		padding: 1.5rem 50px;
	}
`;
export const NavItems = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;

	@media screen and (min-width: 1024px) {
		max-width: 1200px;
		margin: 0 auto;
	}
`;
export const Logo = styled.img``;
export const MenuBar = styled.div`
	cursor: pointer;
	color: ${({ color }) => color};
	font-size: ${({ size }) => size};

	@media screen and (min-width: 768px) {
		display: none;
	}
`;
export const MenuItems = styled.div`
	position: absolute;
	/* top: 0; */
	top: ${({ top }) => top};
	opacity: ${({ opacity }) => opacity};
	width: 100%;
	height: 100%;
	overflow: hidden;
	padding: 1.5rem 20px;
	background-color: ${({ theme }) => theme.colors.orange};
	transition: all 0.3s ease-in-out;
`;
export const BarContainer = styled.div`
	display: flex;
	justify-content: flex-end;
`;
export const NavLinks = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const NavLink = styled.a`
	text-decoration: none;
	color: ${({ theme }) => theme.colors.white};
	font-size: 1.5rem;
	padding: 1rem 0;

	:hover {
		color: ${({ theme }) => theme.colors.dark};
	}
`;
export const MenuLinks = styled.div`
	display: none;
	@media (min-width: 768px) {
		display: flex;
		align-items: center;
	}
`;
export const MenuLink = styled.a`
	text-decoration: none;
	color: ${({ theme }) => theme.colors.dark};
	font-size: 90%;
	margin: 0 0.75rem;
	:hover {
		color: ${({ theme }) => theme.colors.orange};
	}
	:nth-child(6) {
		margin-right: 2rem;
	}
`;

export const MenuButton = styled.div`
	display: none;
	@media screen and (min-width: 1024px) {
		display: flex;
	}
`;
