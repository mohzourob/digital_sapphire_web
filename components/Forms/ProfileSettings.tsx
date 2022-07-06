import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

import { DiscordSVG, FacebookSVG, TwitterSVG } from "../SVG";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import WebIcon from "@mui/icons-material/Web";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Link from "next/link";
import MainButton from "../Global/MainButton";

const ProfileSettings = () => {
  const [selectedImage, setSelectedImage] = useState<any>();
  const [previewImage, setPreviewImage] = useState<any>();

  const [selectedBanner, setSelectedBanner] = useState<any>();
  const [previewBanner, setPreviewBanner] = useState<any>();

  const [name, setName] = useState("");

  const handelNameChange = (e: { target: { value: string } }) => {
    setName(e.target.value);
  };

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedImage) {
      setPreviewImage(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedImage);
    setPreviewImage(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedImage]);

  useEffect(() => {
    if (!selectedBanner) {
      setPreviewBanner(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedBanner);
    setPreviewBanner(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedBanner]);

  const onSelectImage = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedImage(undefined);
      return;
    }
    // I've kept this example simple by using the first image instead of multiple
    setSelectedImage(e.target.files[0]);
  };

  const onRemoveImage = (e: any) => {
    e.preventDefault();
    setSelectedImage(undefined);
  };

  const onSelectBanner = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedBanner(undefined);
      return;
    }
    // I've kept this example simple by using the first image instead of multiple
    setSelectedBanner(e.target.files[0]);
  };

  const onRemoveBanner = (e: any) => {
    e.preventDefault();
    setSelectedBanner(undefined);
  };

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        marginY="2rem"
      >
        <Typography variant="h6" color="text.primary">
          Profile Settings
        </Typography>

        <Link href={"/profile"} passHref>
          <MainButton startIcon={<RemoveRedEyeIcon />}>Preview</MainButton>
        </Link>
      </Grid>

      <Grid container columnSpacing={4}>
        <Grid item md={10} xs={12}>
          <Wrapper>
            <form>
              <Typography variant="subtitle2" color="text.primary">
                Profile Image
              </Typography>

              <UploadImage>
                <UploadImageWrap>
                  <UploadImageInput
                    type="file"
                    name="item"
                    accept="audio/*,video/*,image/*"
                    onChange={onSelectImage}
                    required
                  />
                  {previewImage && (
                    <Image
                      layout="fill"
                      alt="your-image"
                      src={previewImage}
                      style={{ borderRadius: "50%" }}
                    />
                  )}
                </UploadImageWrap>

                <RemoveButton onClick={onRemoveImage}>Remove</RemoveButton>
              </UploadImage>

              <Typography variant="subtitle2" color="text.primary">
                Profile Banner
              </Typography>

              <Typography
                variant="body2"
                fontSize={12}
                color="text.primary"
                marginY={1}
              >
                This image will appear at the top of your collection page. Avoid
                including too much text in this banner image, as the dimensions
                change on different devices. 1400 x 400 recommended.
              </Typography>

              <UploadImage>
                <UploadBannerWrap>
                  <UploadImageInput
                    type="file"
                    name="item"
                    accept="audio/*,video/*,image/*"
                    onChange={onSelectBanner}
                    required
                  />
                  {previewBanner && (
                    <Image layout="fill" alt="your-image" src={previewBanner} />
                  )}
                </UploadBannerWrap>

                <RemoveButton onClick={onRemoveBanner}>Remove</RemoveButton>
              </UploadImage>

              <Typography
                variant="subtitle2"
                color="text.primary"
                marginBottom={1}
              >
                Username
              </Typography>

              <NameInput
                type="text"
                onChange={handelNameChange}
                value={name}
                placeholder="Username"
              />

              <Typography
                variant="subtitle2"
                color="text.primary"
                marginBottom={1}
              >
                Bio
              </Typography>

              <TextArea rows="4" placeholder="Talk about yourself" />

              <Typography
                variant="subtitle2"
                color="text.primary"
                marginBottom={1}
              >
                Email Address
              </Typography>

              <NameInput
                type="email"
                onChange={handelNameChange}
                value={name}
                placeholder="Email Address"
              />

              <Typography variant="subtitle2" color="text.primary" marginY={1}>
                Links
              </Typography>

              <Links>
                <IconLink>
                  <WebIcon
                    color="primary"
                    fontSize="medium"
                    sx={{ marginLeft: "3px", marginTop: "3px" }}
                  />
                  <input type="url" placeholder="yoursite.com" />
                </IconLink>
                <IconLink>
                  <DiscordSVG fill="white" width={30} />
                  <input type="url" placeholder="yoursite.com" />
                </IconLink>
                <IconLink>
                  <InstagramIcon
                    color="primary"
                    fontSize="medium"
                    sx={{ marginLeft: "3px", marginTop: "3px" }}
                  />
                  <input type="url" placeholder="yoursite.com" />
                </IconLink>
                <IconLink>
                  <EmailIcon
                    color="primary"
                    fontSize="medium"
                    sx={{ marginLeft: "3px", marginTop: "3px" }}
                  />
                  <input type="url" placeholder="yoursite.com" />
                </IconLink>
                <IconLink>
                  <TelegramIcon
                    color="primary"
                    fontSize="medium"
                    sx={{ marginLeft: "3px", marginTop: "3px" }}
                  />
                  <input type="url" placeholder="yoursite.com" />
                </IconLink>
                <IconLink>
                  <TwitterSVG fill="white" width={30} />
                  <input type="url" placeholder="yoursite.com" />
                </IconLink>
                <IconLink>
                  <FacebookSVG fill="white" width={30} />
                  <input type="url" placeholder="yoursite.com" />
                </IconLink>
              </Links>
            </form>
          </Wrapper>

          <MainButton style={{ margin: "1rem 0 2rem" }}>Save</MainButton>
        </Grid>
      </Grid>
    </Container>
  );
};

const Wrapper = styled(Stack)`
  margin-top: "2rem";
`;

const UploadImage = styled.div(({ theme }: any) => {
  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "1rem 0rem",
    border: "1px solid",
    borderColor: theme.palette.border,
    borderRadius: "8px",
    padding: "1rem",
  };
});

const UploadImageInput = styled.input(({ theme }: any) => {
  return {
    cursor: "pointer",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    color: "transparent",

    "::-webkit-file-upload-button": {
      visibility: "hidden",
    },
    "::before": {
      content: "unset",
    },
  };
});

const UploadImageWrap = styled.div(({ theme }: any) => {
  return {
    width: "6rem",
    height: "6rem",
    position: "relative",
    boxShadow: "0px 0px 0px 2px gray inset",
    borderRadius: "50%",
  };
});

const UploadBannerWrap = styled.div(({ theme }: any) => {
  return {
    width: "25rem",
    height: "5rem",
    position: "relative",
    boxShadow: "0px 0px 0px 2px gray inset",
    borderRadius: "8px",
  };
});

const RemoveButton = styled.button(({ theme }: any) => {
  return {
    cursor: "pointer",
    width: "140px",
    height: "45px",
    border: "none",
    backgroundColor: "rgba(255, 119, 70, 0.4)",
    borderRadius: "30px",
    color: theme.palette.text.primary,
  };
});

const NameInput = styled.input(({ theme }: any) => {
  return {
    width: "100%",
    padding: "1rem",
    border: `1px solid ${theme.palette.border}`,
    color: theme.palette.text.primary,
    borderRadius: "8px",
    background: "transparent",
    marginBottom: "1rem",

    ":focus": {
      outline: `1px solid ${theme.palette.primary.main}`,
    },
  };
});

const TextArea = styled.textarea(({ theme }: any) => {
  return {
    width: "100%",
    padding: "0.5rem 1rem",
    border: `1px solid ${theme.palette.border}`,
    color: theme.palette.text.primary,
    borderRadius: "8px",
    background: "transparent",
    marginBottom: "1rem",
    resize: "vertical",

    ":focus": {
      outline: `1px solid ${theme.palette.primary.main}`,
    },
  };
});

const Links = styled.div(({ theme }: any) => {
  return {
    width: "100%",
    margin: "1rem 0",
    border: `1px solid ${theme.palette.border}`,
    borderRadius: "8px",

    div: {
      input: {
        width: "100%",
        padding: "1rem 1rem 1rem 2.5rem",
        background: "transparent",
        color: theme.palette.text.primary,
        border: "none",
        borderBottom: `1px solid ${theme.palette.border}`,

        ":focus": {
          borderRadius: "8px",
          outline: `1px solid ${theme.palette.primary.main}`,
        },
      },

      ":last-of-type": {
        input: {
          border: "none",
        },
      },
    },
  };
});

const IconLink = styled.div(({ theme }: any) => {
  return {
    width: "100%",
    position: "relative",

    svg: {
      position: "absolute",
      top: "8px",
      left: "7px",
    },
  };
});

export default ProfileSettings;
