import styled from "@emotion/styled";
import { Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { openModal } from "../../features/modalSlice";
import { createNonceCode, loginUser, setError } from "../../features/userSlice";
import { ethers } from "ethers";
import { useRouter } from "next/router";

declare global {
  interface Window {
    ethereum?: any;
  }
}

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const isAuthenticated = useSelector(
    (state: RootStateOrAny) => state.user.isAuth
  );

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  const metamaskConnect = async () => {
    const { ethereum } = window;
    let thereIsWallet = Boolean(ethereum && ethereum.isMetaMask);
    if (!thereIsWallet) {
      // display modal that he should install metamask
      dispatch(
        openModal({
          message: "You have to install metamask first!",
          modalType: "info",
        })
      );
    } else {
      // have a metamask and login
      try {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        const { nonceCode } = await createNonceCode(accounts[0]);

        const providerweb3 = new ethers.providers.Web3Provider(window.ethereum);
        const signer = await providerweb3.getSigner();
        const signature = await signer.signMessage(nonceCode);
        dispatch(loginUser(signature, accounts[0]));
      } catch (error) {
        dispatch(setError(error));
      }
    }
  };

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
        {/* <Wallet
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
        </Wallet> */}
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
