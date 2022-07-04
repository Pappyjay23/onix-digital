import styled from "styled-components";

export const NavContainer = styled.div`
	background-color: transparent;
	color: #fff;
	padding: 1.5rem 20px;
`;
export const NavItems = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
    position: relative;
`;
export const Logo = styled.img``;
export const MenuBar = styled.div`
	cursor: pointer;
	color: ${({ color }) => color};
	font-size: ${({size}) => size};
`;
export const MenuItems = styled.div`
    position: absolute;
    /* top: 0; */
    top: ${({top}) => top};
    opacity: ${({opacity}) => opacity};
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 1.5rem 20px;
    background-color:${({ theme }) => theme.colors.orange} ;
    transition: all 0.3s ease-in-out;
`
export const BarContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`
export const NavLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const NavLink = styled.a`
    text-decoration: none;
    color: ${({theme}) => theme.colors.white};
    font-size: 1.5rem;
    padding: 1rem 0;
    
    :hover{
        color: ${({theme}) => theme.colors.dark};
        
    }
`
