import { useEffect } from "react";
import styled from "@emotion/styled";
import { Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import Router from "next/router";
import { useMoralis } from "react-moralis";

declare global {
  interface Window {
    ethereum?: any;
  }
}

const Login = () => {
  const { authenticate, isAuthenticated } = useMoralis();

  useEffect(() => {
    if (isAuthenticated) {
      Router.push("/");
    }
  }, [isAuthenticated]);

  const metaMaskLogin = async () => {
    if (!window.ethereum) {
      window.open("https://metamask.io/download/");
    }
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Log in to Digital Sapphire" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user!.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const walletLogin = async () => {
    if (!isAuthenticated) {
      await authenticate({ provider: "walletconnect" })
        .then(function (user) {
          console.log(user!.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <Container maxWidth="sm" sx={{ minHeight: "80vh" }}>
      <Typography variant="h4" color="text.primary" marginTop="4rem">
        Connect your wallet. {isAuthenticated ? "true" : "false"}
      </Typography>

      <Typography variant="h6" fontSize={12} color="text.primary" marginY={2}>
        Connect with one of our available wallet providers.
      </Typography>

      <Wallets>
        <Wallet
          onClick={metaMaskLogin}
          variant="text"
          startIcon={
            <Image
              src={"/metamask.webp"}
              width={24}
              height={24}
              layout="fixed"
            />
          }
        >
          MetaMask
        </Wallet>
        <Wallet
          variant="text"
          onClick={walletLogin}
          startIcon={
            <Image
              src={"/walletconnect.webp"}
              width={24}
              height={24}
              layout="fixed"
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
