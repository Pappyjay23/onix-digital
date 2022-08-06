import React, { useState } from "react";
import { ProjectData } from "../../data/ProjectsData";
import {
	IdTagTitle,
	ProjectContainer,
	ProjectIdCard,
	ProjectIdCards,
	ProjectIdOverlay,
	ProjectIdTag,
	ProjectVideosCover,
	VidDesc,
	VideoCard,
	VideoCardContainer,
	VideoCardCover,
	VideoTag,
	VidTitle,
} from "./Project.styled";

const Project = () => {
	const [current, setCurrent] = useState(0);

	return (
		<ProjectContainer id="videos">
			<ProjectVideosCover>
				<VideoCardContainer>
					{ProjectData.map((vid, index) => (
						<VideoCardCover
							active={current == index ? true : false}
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
							<ProjectIdOverlay active={current == index ? true : false}>
								<VidTitle>{data.title}</VidTitle>
								<VidDesc>{data.desc}</VidDesc>
							</ProjectIdOverlay>
						</ProjectIdCard>
					))}
				</ProjectIdCards>
			</ProjectVideosCover>
		</ProjectContainer>
	);
};

export default Project;
