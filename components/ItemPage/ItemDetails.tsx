import styled from "@emotion/styled";
import {
  Container,
  Divider,
  Grid,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import Image from "next/image";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import NFTImage from "../../public/NFT.png";
import ItemDetailsDescription from "./ItemDetailsDescription";
import MainButton from "../Global/Common/MainButton";
import ETH from "../../public/ETH.svg";
import { Create } from "@mui/icons-material";
import Link from "next/link";

const ItemDetails = () => {
  return (
    <Container maxWidth="lg">
      <Grid container marginY={4} columnSpacing={3}>
        <Grid item xs={12} sm={4}>
          <ImageWraper>
            <Image
              src={NFTImage}
              layout="responsive"
              priority
              alt="NFT Image"
            />
          </ImageWraper>
        </Grid>

        <Grid item xs={12} sm={8}>
          <Stack>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item xs={6}>
                <HeaderName>“The Fantasy Flower illustration ”</HeaderName>
              </Grid>

              <Grid item container xs={6} justifyContent="end">
                <MainButton>Buy now</MainButton>
              </Grid>
            </Grid>

            <Divider sx={{ my: 2 }} />

            <Grid container alignItems="center" marginY={2}>
              <Grid item container xs={6}>
                <Grid item marginRight={1}>
                  <Typography color="text.primary" variant="body1">
                    Current Price
                  </Typography>
                </Grid>

                <Grid
                  item
                  container
                  xs={12}
                  md={2}
                  wrap="nowrap"
                  alignItems="center"
                  justifyContent="flex-start"
                >
                  <Tooltip title="0.0000000000000000024" placement="top">
                    <Price xs={8}>0.024</Price>
                  </Tooltip>

                  <Grid item xs={4} container alignItems="center">
                    <Image
                      alt="Eth icon"
                      src={ETH}
                      width={18}
                      height={18}
                      loading="lazy"
                    />
                  </Grid>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Typography color="text.primary" variant="body1">
                    (61.31$)
                  </Typography>
                </Grid>
              </Grid>

              <Grid item container xs={6} justifyContent="flex-end">
                <ViewsAndLikes>
                  <RemoveRedEyeOutlinedIcon
                    style={{ fontSize: "1rem", marginRight: "2px" }}
                  />
                  255
                </ViewsAndLikes>
                <ViewsAndLikes>
                  <FavoriteBorderIcon
                    style={{ fontSize: "1rem", marginRight: "2px" }}
                  />
                  100
                </ViewsAndLikes>
              </Grid>
            </Grid>

            <Grid
              container
              justifyContent="space-between"
              marginY={2}
              columnSpacing={3}
            >
              <Grid item xs={6}>
                <CreatBy>
                  <Grid
                    container
                    alignItems="center"
                    width="100%"
                    height="100%"
                    paddingX={2}
                  >
                    <Grid item xs={4} lg={2}>
                      <Image
                        src={NFTImage}
                        width={40}
                        height={40}
                        layout="fixed"
                        objectFit="fill"
                        loading="lazy"
                        alt="profile-pic"
                        style={{ borderRadius: "8px" }}
                      />
                    </Grid>
                    <Grid item xs={8} lg={10}>
                      <Stack>
                        <Typography
                          color="text.button"
                          fontWeight={100}
                          variant="body2"
                        >
                          Owned By
                        </Typography>
                        <Link href={"#"} passHref>
                          <OwnedBy variant="body1">Ralph Garraway</OwnedBy>
                        </Link>
                      </Stack>
                    </Grid>
                  </Grid>
                </CreatBy>
              </Grid>

              <Grid item xs={6}>
                <CreatBy>
                  <Grid
                    container
                    alignItems="center"
                    width="100%"
                    height="100%"
                    paddingX={2}
                  >
                    <Grid item xs={4} lg={2}>
                      <Image
                        src={NFTImage}
                        width={40}
                        height={40}
                        layout="fixed"
                        objectFit="fill"
                        loading="lazy"
                        alt="profile-pic"
                        style={{ borderRadius: "8px" }}
                      />
                    </Grid>

                    <Grid item xs={8} lg={10}>
                      <Stack>
                        <Typography
                          color="text.button"
                          fontWeight={100}
                          variant="body2"
                        >
                          Created By
                        </Typography>
                        <CreatorName variant="body1">
                          Freddie Carpenter
                        </CreatorName>
                      </Stack>
                    </Grid>
                  </Grid>
                </CreatBy>
              </Grid>
            </Grid>

            <Body color="text.primary" fontWeight={400} variant="body2">
              Habitant sollicitudin faucibus cursus lectus pulvinar dolor non
              ultrices eget. Facilisi lobortisal morbi fringilla urna amet sed
              ipsum vitae ipsum malesuada. Habitant sollicitudin faucibus cursus
              lectus pulvinar dolor non ultrices eget. Facilisi lobortisal morbi
              fringilla urna amet sed ipsum
            </Body>

            <ItemDetailsDescription />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

const ImageWraper = styled.div`
  width: 100%;
  position: relative;
  border-radius: 16px;
  margin-bottom: 1rem;
`;

const NFTName = styled(Typography)(({ theme }: any) => {
  return {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: theme.palette.text.button,
  };
});

const HeaderName = styled(NFTName)(({ theme }: any) => {
  return {
    color: theme.palette.text.primary,
  };
});

const OwnedBy = styled(NFTName)`
  cursor: pointer;
  width: fit-content;

  &:hover {
    opacity: 0.8;
  }
`;

const CreatorName = styled(OwnedBy)``;

const Price = styled(HeaderName)``;

const Body = styled(Typography)`
  max-height: 80px;
  overflow: auto;
`;

const ViewsAndLikes = styled(Typography)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6a1d4c;
  font-size: 0.8rem;
  border-radius: 8px;
  padding: 3px 8px;
  color: #fff;
  margin-left: 1rem;
  &:hover {
    background-color: #692750;
  }
`;

const CreatBy = styled.div(({ theme }: any) => {
  return {
    width: "100%",
    height: "70px",
    borderRadius: "12px",
    backgroundColor: theme.palette.secondary.back,
  };
});

export default ItemDetails;
