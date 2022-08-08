import React, { useState } from "react";
import { ProjectData } from "../../data/ProjectsData";
import {
	IdTagTitle,
	LeftBg,
	ProjectIdCard,
	ProjectIdCards,
	ProjectIdOverlay,
	ProjectIdTag,
	ProjectSection,
	ProjectVideosCover,
	RightBg,
	VidDesc,
	VideoCard,
	VideoCardContainer,
	VideoCardCover,
	VideoTag,
	VidTitle,
} from "./Project.styled";
import LeftBgd from "../../assets/images/videos-left-dec.png";
import RightBgd from "../../assets/images/videos-right-dec.png";
import { SectionContainer } from "../../components/SectionContainer/SectionContainer.styled";

const Project = () => {
	const [current, setCurrent] = useState(0);

	return (
		<ProjectSection id='videos'>
			<LeftBg src={LeftBgd} />
			<RightBg src={RightBgd} />
			<SectionContainer>
				<ProjectVideosCover>
					<VideoCardContainer>
						{ProjectData.map((vid, index) => (
							<VideoCardCover
								active={current === index ? true : false}
								key={index}>
								{current === index && (
									<VideoCard cardImg={vid.image}>
										<VideoTag>
											<VidTitle>{vid.title}</VidTitle>
											<VidDesc>{vid.desc}</VidDesc>
										</VideoTag>
									</VideoCard>
								)}
							</VideoCardCover>
						))}
					</VideoCardContainer>
					
					<ProjectIdCards>
						{ProjectData.map((data, index) => (
							<ProjectIdCard
								key={index}
								onClick={() => setCurrent(index)}
								smallImg={data.imgSmall}>
								<ProjectIdTag>
									<IdTagTitle>{data.title}</IdTagTitle>
								</ProjectIdTag>
								<ProjectIdOverlay active={current === index ? true : false}>
									<VidTitle>{data.title}</VidTitle>
									<VidDesc>{data.desc}</VidDesc>
								</ProjectIdOverlay>
							</ProjectIdCard>
						))}
					</ProjectIdCards>
				</ProjectVideosCover>
			</SectionContainer>
		</ProjectSection>
	);
};

export default Project;
