import styled from "@emotion/styled";
import {
  Container,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import Image from "next/image";
import { RootStateOrAny, useSelector } from "react-redux";

import SendIcon from "@mui/icons-material/Send";
import Logo from "../Navbar/Logo";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const router = useRouter();
  const { t } = useTranslation("homePage");
  const theme = useSelector((state: RootStateOrAny) => state.theme.theme);

  const onsubmit = () => {};

  return (
    <Foot>
      <Container maxWidth="lg" dir={router.locale === "en" ? "ltr" : "rtl"}>
        <Grid container justifyContent="space-between">
          <Grid item xs={5} lg={3}>
            <Stack marginBottom="2rem">
              <Logo />
              <Typography variant="body1" color="text.secondary" marginY="1rem">
                {t("footerDescription")}
              </Typography>
              <Grid container spacing={2}>
                <Grid item>
                  <Icon href="#" target="_blank">
                    <svg
                      width={15}
                      height={15}
                      viewBox="0 0 10 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.429 4.132a9.834 9.834 0 0 0-1.662-.182c-1.195 0-1.273.52-1.273 1.35v1.48h2.987l-.26 3.065H6.493v9.322h-3.74V9.845H.834V6.78h1.922V4.884c0-2.596 1.22-4.05 4.284-4.05 1.065 0 1.844.155 2.857.363l-.467 2.935Z"
                        fill={theme === "light" ? "#FFF" : "#20283B"}
                      />
                    </svg>
                  </Icon>
                </Grid>
                <Grid item>
                  <Icon href="#" target="_blank">
                    <svg
                      width={15}
                      height={15}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 1.802c2.67 0 2.986.01 4.04.058.976.045 1.505.207 1.858.344.466.182.8.399 1.15.748.35.35.566.683.748 1.15.137.353.3.882.344 1.857.048 1.055.058 1.37.058 4.04 0 2.671-.01 2.987-.058 4.042-.045.975-.207 1.504-.344 1.857-.182.466-.398.8-.748 1.15a3.1 3.1 0 0 1-1.15.748c-.353.137-.882.3-1.857.344-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-.976-.045-1.505-.207-1.858-.345a3.098 3.098 0 0 1-1.15-.748 3.099 3.099 0 0 1-.748-1.15c-.137-.352-.3-.881-.344-1.856-.048-1.055-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.045-.976.207-1.505.344-1.858.182-.467.399-.8.748-1.15.35-.35.684-.566 1.15-.748.353-.137.882-.3 1.857-.344 1.055-.048 1.37-.058 4.041-.058ZM10 0C7.284 0 6.944.012 5.877.06 4.813.11 4.086.278 3.45.525a4.902 4.902 0 0 0-1.772 1.153A4.902 4.902 0 0 0 .525 3.45C.278 4.086.109 4.813.06 5.877.012 6.944 0 7.284 0 10s.012 3.056.06 4.123c.049 1.064.218 1.791.465 2.427a4.902 4.902 0 0 0 1.153 1.772 4.901 4.901 0 0 0 1.772 1.153c.636.247 1.363.416 2.427.465 1.067.048 1.407.06 4.123.06s3.056-.012 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.902 4.902 0 0 0 1.772-1.153 4.902 4.902 0 0 0 1.153-1.772c.247-.636.416-1.363.465-2.427.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.427a4.902 4.902 0 0 0-1.153-1.772A4.902 4.902 0 0 0 16.55.525C15.914.278 15.187.109 14.123.06 13.056.012 12.716 0 10 0Z"
                        fill={theme === "light" ? "#FFF" : "#20283B"}
                      />
                      <path
                        d="M10.004 4.87a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27Zm0 8.468a3.333 3.333 0 1 1 0-6.667 3.333 3.333 0 0 1 0 6.667ZM16.543 4.664a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z"
                        fill={theme === "light" ? "#FFF" : "#20283B"}
                      />
                    </svg>
                  </Icon>
                </Grid>
                <Grid item>
                  <Icon href="#" target="_blank">
                    <svg
                      width={15}
                      height={15}
                      viewBox="0 0 20 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20 2.59a8.194 8.194 0 0 1-2.357.646 4.114 4.114 0 0 0 1.804-2.27 8.218 8.218 0 0 1-2.605.997A4.103 4.103 0 0 0 9.85 5.705a11.647 11.647 0 0 1-8.457-4.287A4.081 4.081 0 0 0 .838 3.48a4.1 4.1 0 0 0 1.825 3.416 4.09 4.09 0 0 1-1.86-.514v.052a4.108 4.108 0 0 0 3.292 4.024 4.125 4.125 0 0 1-1.853.07 4.108 4.108 0 0 0 3.833 2.85A8.235 8.235 0 0 1 0 15.076a11.616 11.616 0 0 0 6.29 1.844c7.546 0 11.673-6.252 11.673-11.674 0-.178-.003-.355-.012-.53A8.357 8.357 0 0 0 20 2.59Z"
                        fill={theme === "light" ? "#FFF" : "#20283B"}
                      />
                    </svg>
                  </Icon>
                </Grid>
                <Grid item>
                  <Icon href="#" target="_blank">
                    <svg
                      width={15}
                      height={15}
                      viewBox="0 0 26 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.094 3.18s-2.602-2.04-5.68-2.274l-.273.555c2.78.68 4.054 1.656 5.39 2.851-2.297-1.171-4.57-2.273-8.523-2.273-3.953 0-6.227 1.102-8.524 2.273 1.336-1.195 2.852-2.28 5.391-2.851L9.602.906c-3.227.305-5.68 2.274-5.68 2.274S1.016 7.398.516 15.68c2.93 3.383 7.382 3.406 7.382 3.406l.93-1.242a11.346 11.346 0 0 1-4.906-3.305c1.836 1.39 4.617 2.844 9.094 2.844 4.476 0 7.25-1.445 9.093-2.844a11.346 11.346 0 0 1-4.906 3.305l.93 1.242s4.453-.023 7.383-3.406C25 7.398 22.094 3.18 22.094 3.18ZM9.304 13.406c-1.1 0-1.992-1.015-1.992-2.273 0-1.258.891-2.274 1.993-2.274 1.101 0 1.992 1.016 1.992 2.274s-.89 2.273-1.992 2.273Zm7.391 0c-1.101 0-1.992-1.015-1.992-2.273 0-1.258.89-2.274 1.992-2.274 1.102 0 1.992 1.016 1.992 2.274s-.898 2.273-1.992 2.273Z"
                        fill={theme === "light" ? "#FFF" : "#20283B"}
                      />
                    </svg>
                  </Icon>
                </Grid>
              </Grid>
            </Stack>
          </Grid>
          <Grid item xs={5} lg={2}>
            <Stack spacing={2} marginBottom="2rem">
              <Typography variant="h6" color="text.primary">
                {t("myAccount")}
              </Typography>
              <FooterLink href="#">{t("authors")}</FooterLink>
              <FooterLink href="#">{t("collection")}</FooterLink>
              <FooterLink href="#">{t("authorProfile")}</FooterLink>
              <FooterLink href="#">{t("createCollection")}</FooterLink>
            </Stack>
          </Grid>
          <Grid item xs={5} lg={2}>
            <Stack spacing={2} marginBottom="2rem">
              <Typography variant="h6" color="text.primary">
                {t("resources")}
              </Typography>
              <FooterLink href="#">{t("authors")}</FooterLink>
              <FooterLink href="#">{t("collection")}</FooterLink>
              <FooterLink href="#">{t("authorProfile")}</FooterLink>
              <FooterLink href="#">{t("createCollection")}</FooterLink>
            </Stack>
          </Grid>
          <Grid item xs={5} lg={2}>
            <Stack spacing={2} marginBottom="2rem">
              <Typography variant="h6" color="text.primary">
                {t("company")}
              </Typography>
              <FooterLink href="#">{t("authors")}</FooterLink>
              <FooterLink href="#">{t("collection")}</FooterLink>
              <FooterLink href="#">{t("authorProfile")}</FooterLink>
              <FooterLink href="#">{t("createCollection")}</FooterLink>
            </Stack>
          </Grid>
          <Grid item xs={5} lg={2}>
            <Stack spacing={2} marginBottom="2rem">
              <Typography variant="h6" color="text.primary">
                {t("company")}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                {t("companyDescription")}
              </Typography>
              <StyledPaper
                component="form"
                elevation={1}
                onSubmit={() => onsubmit()}
                sx={{
                  paddingLeft: router.locale === "en" ? "0.8rem" : "0rem",
                  paddingRight: router.locale === "ar" ? "0.8rem" : "0rem",
                }}
              >
                <StyledSearchInput placeholder={t("sendText")} />
                <SendButton
                  type="submit"
                  size="small"
                  sx={{
                    transform: router.locale === "en" ? null : "rotate(180deg)",
                  }}
                >
                  <SendIcon fontSize="small" />
                </SendButton>
              </StyledPaper>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Foot>
  );
};

const Foot = styled.footer(({ theme }: any) => {
  return {
    width: "100%",
    borderTop: "1px solid",
    borderColor: theme.palette.divider,
    padding: "3rem 0 0 0",
  };
});

const Icon = styled.a(({ theme }: any) => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "25px",
    height: "25px",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.nav,
    borderRadius: "50%",
  };
});

const FooterLink = styled.a(({ theme }: any) => {
  return {
    fontSize: "0.8rem",
    textDecoration: "none",
    width: "fit-content",
    color: theme.palette.text.secondary,
  };
});

const StyledSearchInput = styled(InputBase)`
  width: 100%;
  font-size: 0.8rem;
`;

const StyledPaper = styled(Paper)(({ theme }: any) => {
  return {
    display: "flex",
    width: "100%",
    height: "35px",
    fontSize: "0.7rem",
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.text.primary}`,
    borderRadius: "8px",
    ":focus-within": {
      border: `1px solid ${theme.palette.secondary.main}`,
    },
  };
});

const SendButton = styled(IconButton)`
  border-radius: 0px;
  background-color: #ff7746;
  border-radius: 0 7px 7px 0;
`;

export default Footer;
