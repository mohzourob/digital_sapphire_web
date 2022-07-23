import styled from "@emotion/styled";
import { Button, Container, Typography } from "@mui/material";
import Image from "next/image";

declare global {
  interface Window {
    ethereum?: any;
  }
}

const Login = () => {
  const metamaskConnect = () => {};
  const walletConnect = () => {};

  return (
    <Container maxWidth="sm" sx={{ minHeight: "80vh" }}>
      <Typography variant="h4" color="text.primary" marginTop="4rem">
        Connect your wallet.
      </Typography>

      <Typography variant="h6" fontSize={12} color="text.primary" marginY={2}>
        Connect with one of our available wallet providers.
      </Typography>

      <Wallets>
        <Wallet
          onClick={metamaskConnect}
          variant="text"
          startIcon={
            <Image
              src={"/metamask.webp"}
              width={24}
              height={24}
              layout="fixed"
              alt="metamask icon"
            />
          }
        >
          MetaMask
        </Wallet>
        <Wallet
          variant="text"
          onClick={walletConnect}
          startIcon={
            <Image
              src={"/walletconnect.webp"}
              width={24}
              height={24}
              layout="fixed"
              alt="walletconnect icon"
            />
          }
        >
          WalletConnect
        </Wallet>
      </Wallets>
    </Container>
  );
};

const Wallets = styled.div(({ theme }: any) => {
  return {
    width: "100%",
    border: `1px solid ${theme.palette.border}`,
    borderRadius: "4px",
  };
});

const Wallet = styled(Button)(({ theme }: any) => {
  return {
    width: "100%",
    justifyContent: "flex-start",
    padding: "1rem",

    ":not(:last-child)": {
      borderBottom: `1px solid ${theme.palette.border}`,
      borderRadius: "4px 4px 0px 0px",
    },
  };
});

export default Login;
