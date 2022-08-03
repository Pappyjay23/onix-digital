import styled from "styled-components";

export const Button = styled.a`
	text-decoration: none;
	color: ${({ color }) => color};
	padding: ${({btnSmall}) => btnSmall ? '8px 20px' : '15px 30px'};
	background-color: ${({ bg }) => bg};
	border-radius: 25px;
	font-size: 90%;
	cursor: pointer;
`;
