import styled from "styled-components";

export const SectionContainer = styled.div`
    padding: 5rem 15px;
    position: relative;
    overflow: hidden;

	@media screen and (min-width: 768px) {
		padding: 1.5rem 30px;
	}

	@media screen and (min-width: 1024px) {
		padding: 5rem 50px;
		max-width: 1200px;
		margin: 0 auto;
	}
`