import styled from "@emotion/styled";
import { Grid, Stack, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

import OrgIcon from "../public/Org.svg";

type NFTItemProps = {
  name: string;
  image: StaticImageData;
  bannerImage: StaticImageData;
  description: string;
};

const OrganizationCard = ({
  name,
  image,
  bannerImage,
  description,
}: NFTItemProps) => {
  return (
    <StyledDiv>
      <Grid container justifyContent="space-between">
        <Grid item xs={12} position="relative" marginBottom="2rem">
          <ImageWraper>
            <Image src={bannerImage} height={100} />
          </ImageWraper>
          <OrgImage>
            <Image src={image} layout="fill" objectFit="cover" />
          </OrgImage>
        </Grid>

        <Grid
          container
          justifyContent="center"
          alignItems="center"
          height="fit-content"
          marginTop="0.5rem"
        >
          <OrgName variant="subtitle1">{name}</OrgName>
          <Image src={OrgIcon} width={16} height={16} />
        </Grid>

        <OrgDescription variant="body2">{description}</OrgDescription>
      </Grid>
    </StyledDiv>
  );
};

const StyledDiv = styled(Stack)(({ theme }: any) => {
  return {
    margin: "2rem auto",
    border: "1px solid",
    borderColor: theme.palette.secondary.main,
    borderRadius: "20px",
    padding: "0.5rem",
    width: "16rem",
    height: "18.5rem",
  };
});

const ImageWraper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    border-radius: 10px;
  }
`;

const OrgImage = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  bottom: -30px;
  left: calc(50% - 35px);
  border: 3px solid var(--primary-color);
  border-radius: 50%;

  img {
    border-radius: 50%;
  }
`;

const OrgName = styled(Typography)(({ theme }: any) => {
  return {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "1rem",
    color: theme.palette.text.primary,
    maxWidth: "7rem",
    marginRight: "0.5rem",
  };
});

const OrgDescription = styled(Typography)(({ theme }: any) => {
  return {
    textAlign: "center",
    fontSize: "0.8rem",
    display: "-webkit-box",
    WebkitLineClamp: 4,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    color: theme.palette.text.primary,
    marginTop: "0.5rem",
    opacity: 0.8,
  };
});

export default OrganizationCard;
