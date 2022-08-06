import React from "react";
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
	VideoTag,
	VidTitle,
} from "./Project.styled";

const Project = () => {
	return (
		<ProjectContainer>
			<ProjectVideosCover>
				<VideoCard>
					<VideoTag>
						<VidTitle>Project One</VidTitle>
						<VidDesc>SEO & Marketing</VidDesc>
					</VideoTag>
				</VideoCard>
				<ProjectIdCards>
					<ProjectIdCard>
						<ProjectIdTag>
							<IdTagTitle>Project One</IdTagTitle>
						</ProjectIdTag>
						<ProjectIdOverlay>
							<VidTitle>Project One</VidTitle>
							<VidDesc>SEO & Marketing</VidDesc>
						</ProjectIdOverlay>
					</ProjectIdCard>
				</ProjectIdCards>
			</ProjectVideosCover>
		</ProjectContainer>
	);
};

export default Project;
