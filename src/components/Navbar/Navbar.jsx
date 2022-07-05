import React, { useState } from "react";
import {
	BarContainer,
	Logo,
	LogoLink,
	MenuBar,
	MenuButton,
	MenuItems,
	MenuLink,
	MenuLinks,
	NavContainer,
	NavItems,
	NavLink,
	NavLinks,
} from "./Navbar.styled";
import { FaBars, FaTimes } from "react-icons/fa";
import LogoImg from "../../assets/images/logo.png";
import { NavLinksData } from "../../data/NavLinksData";
import { Button } from "../Button/Button.styled";

const Navbar = () => {
	const [navItems, setNavItems] = useState(false);
	const [fixed, setFixed] = useState(false);

  const toggleFixed = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setFixed(true);
		} else if (scrolled <= 300) {
			setFixed(false);
		}
	};
	window.addEventListener("scroll", toggleFixed);

	return (
		<>
			<NavContainer fixed={fixed}>
				<NavItems>
					<LogoLink href='#'>
						<Logo src={LogoImg} />
					</LogoLink>
					<MenuBar
						color='#2a2a2a'
						size='1.5rem'
						onClick={() => setNavItems(true)}>
						<FaBars />
					</MenuBar>
					<MenuLinks>
						{NavLinksData.map((data) => (
							<MenuLink href={data.path}>{data.name}</MenuLink>
						))}
						<MenuButton>
							<Button href='#' bg='#ff695f' color='#fff' btnSmall>
								Contact Us Now
							</Button>
						</MenuButton>
					</MenuLinks>
				</NavItems>
			</NavContainer>
			<MenuItems opacity={navItems ? "1" : "0"} top={navItems ? "0" : "-100%"}>
				<BarContainer>
					<MenuBar
						color='#fff'
						size='2rem'
						onClick={() => setNavItems(!navItems)}>
						<FaTimes />
					</MenuBar>
				</BarContainer>
				<NavLinks>
					{NavLinksData.map((data, index) => (
						<NavLink key={index} onClick={() => setNavItems(false)} href={data.path}>
							{data.name}
						</NavLink>
					))}
				</NavLinks>
			</MenuItems>
		</>
	);
};

export default Navbar;
