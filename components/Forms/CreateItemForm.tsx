import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import {
  Button,
  Container,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";

import NFTItemCard from "../HomePage/TopItems/NFTItemCard";

import ETHSVG from "../SVG/ETH";
import MainButton from "../Global/Common/MainButton";

const CreateItemForm = () => {
  const [selectedFile, setSelectedFile] = useState<any>();
  const [preview, setPreview] = useState<any>();
  const [price, setPrice] = useState<any>();
  const [name, setName] = useState("");
  const [collectionName, setCollectionName] = useState("");

  const handelNameChange = (e: { target: { value: string } }) => {
    setName(e.target.value);
  };

  const handelPriceChange = (e: { target: { value: string } }) => {
    setPrice(e.target.value);
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    setCollectionName(event.target.value as string);
  };

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  const onRemoveFile = (e: any) => {
    e.preventDefault();
    setSelectedFile(undefined);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h6" color="text.primary" marginTop={4}>
        Create New Item
      </Typography>

      <Grid container columnSpacing={4}>
        <Grid item md={3} sx={{ display: { xs: "none", md: "flex" } }}>
          <NFTItemCard
            image={preview}
            creator="Sami Sabbah"
            name={name}
            price={price}
          />
        </Grid>
        <Grid item md={9} xs={12}>
          <Wrapper>
            <form>
              <Typography variant="subtitle2" color="text.primary">
                File *
              </Typography>

              <UploadImage>
                <UploadImageWrap>
                  <UploadImageInput
                    type="file"
                    name="item"
                    accept="audio/*,video/*,image/*"
                    onChange={onSelectFile}
                    required
                  />
                  {preview && (
                    <Image layout="fill" alt="your-image" src={preview} />
                  )}
                </UploadImageWrap>

                <RemoveButton onClick={onRemoveFile}>Remove</RemoveButton>
              </UploadImage>

              <Typography
                variant="subtitle2"
                color="text.primary"
                marginBottom={1}
              >
                Name *
              </Typography>

              <NameInput
                type="text"
                onChange={handelNameChange}
                value={name}
                placeholder="NFT name"
              />

              <Typography
                variant="subtitle2"
                color="text.primary"
                marginBottom={1}
              >
                Description
              </Typography>

              <Typography
                variant="body2"
                fontSize={12}
                color="text.primary"
                marginBottom={1}
              >
                The description will be included on the item's detail page
                underneath its image. Markdown syntax is supported.
              </Typography>

              <TextArea rows="4" placeholder="Item Description" />

              <Typography
                variant="subtitle2"
                color="text.primary"
                marginBottom={1}
              >
                Collection
              </Typography>

              <Typography
                variant="body2"
                fontSize={12}
                color="text.primary"
                marginBottom={1}
              >
                This is the collection where your item will appear.
              </Typography>

              <Select
                fullWidth
                value={collectionName}
                onChange={handleSelectChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Art"}>Art</MenuItem>
                <MenuItem value={"Random"}>Random</MenuItem>
              </Select>

              <Typography
                variant="subtitle2"
                color="text.primary"
                marginBottom={1}
                marginTop={2}
              >
                Price *
              </Typography>
              <span style={{ width: "100%", position: "relative" }}>
                <PriceInput
                  type="text"
                  onChange={handelPriceChange}
                  value={price}
                  placeholder="Price"
                />
                <ETHSVG
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "-2px",
                    width: "25px",
                    height: "25px",
                  }}
                />
              </span>

              <Typography
                variant="subtitle2"
                color="text.primary"
                marginBottom={1}
              >
                External link
              </Typography>

              <Typography
                variant="body2"
                fontSize={12}
                color="text.primary"
                marginBottom={1}
              >
                The site will include a link to this URL on that item details
                page, so users can click on it to learn more about it. Welcome
                to link to your web page with more details.
              </Typography>

              <NameInput type="text" placeholder="http://www.example.com" />
            </form>
          </Wrapper>

          <Grid
            container
            justifyContent="flex-end"
            alignItems="center"
            columnSpacing={2}
            marginBottom={3}
          >
            <Grid item>
              <Button
                variant="text"
                sx={{
                  textTransform: "none",
                  color: "text.secondary",
                  padding: "0.5rem 1.5rem",
                }}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <MainButton>Create</MainButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

const Wrapper = styled(Stack)(({ theme }: any) => {
  return {
    marginTop: "1rem",
    border: "1px solid",
    borderColor: theme.palette.border,
    borderRadius: "8px",
    padding: "1rem",
    marginBottom: "3rem",
  };
});

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
    width: "4rem",
    height: "4rem",
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

const PriceInput = styled.input(({ theme }: any) => {
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
export default CreateItemForm;
