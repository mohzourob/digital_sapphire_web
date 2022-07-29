import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";

import profileImage from "../../public/NFT.png";
import ETH from "../../public/ETH.svg";

const CollectionInfo = () => {
  return (
    <Grid item xs={12} md={3} paddingX={2}>
      <Info container justifyContent="center">
        <Stack marginTop="2rem" width="100%">
          <ProfileImage>
            <Image
              src={profileImage}
              alt="cover"
              layout="fill"
              objectFit="cover"
            />
          </ProfileImage>

          <Typography
            variant="h6"
            color="white"
            marginTop={5}
            textAlign="center"
          >
            Sami Sabbah
          </Typography>

          <Typography variant="body2" color="white" textAlign="center">
            Created by <Link href="#">NFTKingCreator</Link>
          </Typography>

          <div style={{ width: "80%", margin: "auto" }}>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              marginTop={2}
            >
              <Grid item xs={5}>
                <Typography variant="body2" color="white" fontWeight={200}>
                  Floor Price
                </Typography>
              </Grid>
              <Grid
                item
                container
                xs={5}
                wrap="nowrap"
                justifyContent="flex-end"
              >
                <Grid item>
                  <Image
                    alt="Eth icon"
                    src={ETH}
                    width={18}
                    height={18}
                    loading="lazy"
                  />
                </Grid>
                <Price item>0.024</Price>
              </Grid>
            </Grid>

            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              marginTop={2}
            >
              <Grid item xs={6}>
                <Typography variant="body2" color="white" fontWeight={200}>
                  Volume Traded
                </Typography>
              </Grid>
              <Grid
                item
                container
                xs={6}
                wrap="nowrap"
                justifyContent="flex-end"
              >
                <Grid item>
                  <Image
                    alt="Eth icon"
                    src={ETH}
                    width={18}
                    height={18}
                    loading="lazy"
                  />
                </Grid>
                <Price item>32.2</Price>
              </Grid>
            </Grid>

            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              marginTop={2}
            >
              <Grid item>
                <Typography variant="body2" color="white" fontWeight={200}>
                  Owners
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" color="white">
                  608
                </Typography>
              </Grid>
            </Grid>

            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              marginTop={2}
            >
              <Grid item>
                <Typography variant="body2" color="white" fontWeight={200}>
                  Items
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" color="text.button">
                  22.2k
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Stack>
      </Info>
    </Grid>
  );
};

const Info = styled(Grid)(({ theme }: any) => {
  return {
    position: "relative",
    backgroundColor: theme.palette.secondary.back,
    paddingBottom: "4rem",
    borderRadius: "0px 0px 36px 36px",

    a: {
      color: "#6a6ad6",
      ":hover": {
        opacity: "0.8",
      },
    },
  };
});

const ProfileImage = styled.div(({ theme }: any) => {
  return {
    position: "absolute",
    width: "110px",
    height: "110px",
    top: "-55px",
    left: "calc(50% - 55px)",
    borderRadius: "50%",
    border: `3px solid ${theme.palette.primary.nav}`,

    img: {
      borderRadius: "50%",
    },
  };
});

const Price = styled(Grid)(({ theme }: any) => {
  return {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "0.9rem",
    color: theme.palette.text.button,
  };
});

export default CollectionInfo;
