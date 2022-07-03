import styled from "@emotion/styled";
import { Container } from "@mui/material";

const YouTubeVideo = () => {
  return (
    <Container maxWidth="xl">
      <Video>
        <iframe
          src="https://www.youtube-nocookie.com/embed/kHybf1aC-jE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Video>
    </Container>
  );
};

const Video = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 5rem 0;

  iframe {
    width: 800px;
    height: 450px;
  }
`;

export default YouTubeVideo;
