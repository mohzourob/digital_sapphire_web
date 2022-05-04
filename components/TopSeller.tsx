import { Container, Grid, Stack, Typography, Link } from "@mui/material";
import styled from "@emotion/styled";
import SellerCard from "./SellerCard";
import profileImage from "../public/profile-pic.png";

const sellers = [
  {
    image: profileImage,
    name: "Crispin Berry",
    sales: 22.3,
    verified: true,
  },
  {
    image: profileImage,
    name: "Crispin Berry",
    sales: 22.3,
    verified: true,
  },
  {
    image: profileImage,
    name: "Crispin Berry",
    sales: 22.3,
    verified: true,
  },
  {
    image: profileImage,
    name: "Crispin Berry",
    sales: 22.3,
    verified: true,
  },
  {
    image: profileImage,
    name: "Crispin Berry",
    sales: 22.3,
    verified: true,
  },
  {
    image: profileImage,
    name: "Crispin Berry",
    sales: 22.3,
    verified: true,
  },
  {
    image: profileImage,
    name: "Crispin Berry",
    sales: 22.3,
    verified: true,
  },
];

const TopSeller = () => {
  return (
    <Container maxWidth="lg">
      <Stack marginTop="4rem" marginBottom="2rem">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Title variant="h6" color="text.primary">
              Top Seller
            </Title>
          </Grid>
          <Grid item>
            <Explore href="/explore-more" color="text.primary">
              Explore more
            </Explore>
          </Grid>
        </Grid>

        <Wrapper>
          <Grid container spacing={2}>
            {sellers.map((seller, index) => (
              <Grid item xs={6} sm={4} md={3} lg={2.4} key={index}>
                <SellerCard
                  image={seller.image}
                  name={seller.name}
                  sales={seller.sales}
                  verified={seller.verified}
                />
              </Grid>
            ))}
          </Grid>
        </Wrapper>
      </Stack>
    </Container>
  );
};

const Explore = styled(Link)`
  position: relative;
  margin-right: 3rem;
  text-transform: uppercase;
  font-size: 1rem;
  text-decoration: none;
  border-bottom: 1px solid #ff7746;

  &:hover {
    border-bottom: 2px solid #ff7746;
  }

  @media (max-width: 500px) {
    margin-right: 1rem;
  }
`;

const Title = styled(Typography)`
  margin-left: 3rem;

  @media (max-width: 500px) {
    margin-left: 1rem;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem 3rem 1rem 3rem;

  @media (max-width: 500px) {
    padding: 1rem;
  }
`;

export default TopSeller;
