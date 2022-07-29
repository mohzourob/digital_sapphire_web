import styled from "@emotion/styled";
import { Grid, Stack, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

import checkIcon from "../../../public/Check.svg";

type NFTItemProps = {
  name: string;
  sales: number;
  image: StaticImageData;
  verified: boolean;
};

const SellerCard = ({ name, sales, image, verified }: NFTItemProps) => {
  return (
    <StyledDiv>
      <Grid
        container
        wrap="nowrap"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
      >
        <Grid item xs={4} position="relative">
          <ProfileImage
            alt={name}
            src={image}
            width={80}
            height={80}
            loading="lazy"
          />
          {verified && (
            <VerifiedIcon>
              <Image src={checkIcon} loading="lazy" alt="verifid icon" />
            </VerifiedIcon>
          )}
        </Grid>
        <Grid item xs={7}>
          <Stack>
            <CollectionName variant="subtitle1">{name}</CollectionName>
            <ItemsNumber variant="body2">{sales} ETH</ItemsNumber>
          </Stack>
        </Grid>
      </Grid>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 12rem;

  a: {
    color: #6464a3;
    text-decoration: none;
    font-size: 0.8rem;
  }

  @media (max-width: 500px) {
    width: 9rem;
  }
`;

const ProfileImage = styled(Image)`
  border-radius: 1rem;
`;

const CollectionName = styled(Typography)(({ theme }: any) => {
  return {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "0.9rem",
    color: theme.palette.text.primary,
  };
});

const ItemsNumber = styled(Typography)(({ theme }: any) => {
  return {
    fontSize: "0.8rem",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: theme.palette.text.secondary,
  };
});

const VerifiedIcon = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 1rem;
  color: #755cff;
`;

export default SellerCard;
