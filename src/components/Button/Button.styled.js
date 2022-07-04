import styled from "styled-components";

export const Button = styled.a`
	text-decoration: none;
	color: ${({ color }) => color};
	padding: 10px 20px;
	background-color: ${({ bg }) => bg};
	border-radius: 25px;
	font-size: 90%;
`;
