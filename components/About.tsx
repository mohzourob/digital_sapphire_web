import styled from "@emotion/styled";
import { Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import walletSvg from "../public/walletSvg.svg";
import CollectionSvg from "../public/CollectionSvg.svg";
import ImageSvg from "../public/ImageSvg.svg";
import ListSvg from "../public/ListSvg.svg";

const about = [
  {
    image: walletSvg,
    title: "Set up your wallet",
    description:
      "Wallet that is functional for NFT purchasing. You may have a Coinbase account at this point, but very few are actually set up to buy an NFT.",
  },

  {
    image: CollectionSvg,
    title: "Create your collection",
    description:
      "Setting up your NFT collection and creating NFTs on NFTs is easy! This guide explains how to set up your first collection.",
  },
  {
    image: ImageSvg,
    title: "Add your NFTs",
    description:
      "Sed ut perspiciatis un de omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.",
  },
  {
    image: ListSvg,
    title: "List them for sale",
    description:
      "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs!",
  },
  {
    image: ListSvg,
    title: "List them for sale",
    description:
      "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs!",
  },
  {
    image: ListSvg,
    title: "List them for sale",
    description:
      "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs!",
  },
];

const About = () => {
  return (
    <Container maxWidth="lg">
      <Stack>
        <Title variant="h1" color="text.primary">
          Create and sell your NFTs
        </Title>
        <Grid container justifyContent="space-around" marginTop={4}>
          {about.map((item, index) => (
            <Grid item xs={10} md={4} lg={4} key={index} marginBottom={4}>
              <Stack>
                <Image
                  src={item.image}
                  alt="svg icon"
                  width={50}
                  height={50}
                  loading="lazy"
                />
                <SubTitle variant="subtitle1" color="text.primary">
                  {item.title}
                </SubTitle>
                <Body1 variant="body1" color="text.primary">
                  {item.description}
                </Body1>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
};

const Title = styled(Typography)`
  font-size: 2.25rem;
  font-weight: 700;
  margin-top: 3rem;
  text-align: center;

  @media (max-width: 700px) {
    margin-top: 1rem;
  }
`;

const SubTitle = styled(Typography)`
  font-size: 1.75rem;
  font-weight: 700;
  margin-top: 1rem;
  text-align: center;

  @media (max-width: 700px) {
    margin-top: 1rem;
  }
`;

const Body1 = styled(Typography)`
  font-size: 1rem;
  margin-top: 0.5rem;
  text-align: center;
  width: 90%;
  margin: auto;
`;

export default About;
