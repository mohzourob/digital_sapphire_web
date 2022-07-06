import styled from "@emotion/styled";
import { Grid, Link, Stack, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

import SecondaryButton from "../../Global/SecondaryButton";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

type NFTItemProps = {
  name: string;
  creator: string;
  image: StaticImageData;
  itemsNumber: number;
  verified?: Boolean;
};

const CollectionCard = ({
  name,
  creator,
  image,
  itemsNumber,
  verified,
}: NFTItemProps) => {
  const router = useRouter();
  const { t } = useTranslation("homePage");

  return (
    <StyledDiv>
      <Stack>
        <Grid
          container
          wrap="nowrap"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={2} position="relative">
            {image && (
              <ProfileImage src={image} width={50} height={50} loading="lazy" />
            )}
            {verified && (
              <VerifiedIcon>
                <Image
                  alt="Verified Icon"
                  src={"/Check.svg"}
                  width={16}
                  height={16}
                  loading="lazy"
                />
              </VerifiedIcon>
            )}
          </Grid>
          <Grid item xs={4}>
            <Stack>
              <CollectionName variant="subtitle1">{name}</CollectionName>
              <ItemsNumber
                variant="body2"
                dir={router.locale === "en" ? "ltr" : "rtl"}
              >
                {itemsNumber} {t("items")}
              </ItemsNumber>
            </Stack>
          </Grid>
          <Grid item xs={5}>
            <SecondaryButton size="small">
              + {t("addToWatchlist")}
            </SecondaryButton>
          </Grid>
        </Grid>
        <CreatorName
          variant="subtitle1"
          dir={router.locale === "en" ? "ltr" : "rtl"}
        >
          {t("createdBy")} <Link href={`/creators/${creator}`}>{creator}</Link>
        </CreatorName>
      </Stack>

      <Grid
        container
        wrap="nowrap"
        columnSpacing={2}
        height="100%"
        paddingBottom="0.5rem"
      >
        <Grid item xs={6}>
          <ImageWraper>
            {!image && <ImageReplace />}
            {image && (
              <Image
                src={"/NFT3.png"}
                alt={name}
                layout="fill"
                loading="lazy"
              />
            )}
          </ImageWraper>
        </Grid>

        <Grid item container xs={6} rowSpacing={1}>
          <Grid
            item
            container
            spacing={1}
            justifyContent="space-between"
            xs={12}
            height="40%"
          >
            <Grid item xs={6}>
              <ImageWraper>
                {!image && <ImageReplace />}
                {image && (
                  <Image
                    src={"/NFT2.png"}
                    alt={name}
                    layout="fill"
                    loading="lazy"
                  />
                )}
              </ImageWraper>
            </Grid>
            <Grid item xs={6}>
              <ImageWraper>
                {!image && <ImageReplace />}
                {image && (
                  <Image
                    src={"/NFT.png"}
                    alt={name}
                    layout="fill"
                    loading="lazy"
                  />
                )}
              </ImageWraper>
            </Grid>
          </Grid>
          <Grid item xs={12} height="60%">
            <ImageWraper>
              {!image && <ImageReplace />}
              {image && (
                <Image
                  src={"/NFT2.png"}
                  alt={name}
                  layout="fill"
                  loading="lazy"
                />
              )}
            </ImageWraper>
          </Grid>
        </Grid>
      </Grid>
    </StyledDiv>
  );
};

const StyledDiv = styled(Stack)(({ theme }: any) => {
  return {
    margin: "2rem auto",
    border: "1px solid",
    borderColor: theme.palette.border,
    borderRadius: "20px",
    padding: "0.5rem 1rem",
    width: "22rem",
    height: "24rem",

    a: {
      color: "#6464a3",
      textDecoration: "none",
      fontSize: "0.8rem",
    },

    "@media (max-width: 500px)": {
      width: "20rem",
    },
  };
});

const ProfileImage = styled(Image)`
  border-radius: 35%;
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

const CreatorName = styled(Typography)(({ theme }: any) => {
  return {
    fontSize: "0.8rem",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: theme.palette.text.secondary,
    marginBottom: "0.5rem",
  };
});

const ImageWraper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    border-radius: 8px;
  }
`;

const ImageReplace = styled.div`
  width: 100%;
  height: 100%;
  background-color: gray;
  border-radius: 8px;
`;
export default CollectionCard;
