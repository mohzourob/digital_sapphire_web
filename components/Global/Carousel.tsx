import { useState } from "react";
import { Container, IconButton } from "@mui/material";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import styled from "@emotion/styled";
import ClientOnly from "../HOC/ClientOnly";

const Carousel = ({ items, responsive }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slidePrev = () => {
    if (activeIndex === 0) return;
    setActiveIndex(activeIndex - 1);
  };
  const slideNext = () => {
    if (activeIndex === items.length) return;
    setActiveIndex(activeIndex + 1);
  };

  return (
    <ClientOnly>
      <Container maxWidth="lg">
        <SyledWarper>
          <AliceCarousel
            mouseTracking
            disableButtonsControls
            items={items}
            activeIndex={activeIndex}
            responsive={responsive}
          />
          <LeftArrow onClick={slidePrev}>
            <ChevronLeftIcon />
          </LeftArrow>
          <RightArrow onClick={slideNext}>
            <ChevronRightIcon />
          </RightArrow>
        </SyledWarper>
      </Container>
    </ClientOnly>
  );
};

const SyledWarper = styled.div`
  position: relative;
  margin: auto;

  @media (min-width: 600px) {
    .alice-carousel__dots {
      display: none;
    }
  }
`;

const RightArrow = styled(IconButton)`
  position: absolute;
  font-size: 1rem;
  top: calc(50% - 8px);
  right: -1.5rem;
  color: var(--primary-color);
  padding: 0.1rem;
  background-color: var(--secondary-color);
  &:hover {
    background-color: #9bbbd4;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const LeftArrow = styled(IconButton)`
  position: absolute;
  font-size: 1rem;
  top: calc(50% - 8px);
  left: -1.5rem;
  color: var(--primary-color);
  padding: 0.1rem;
  background-color: var(--secondary-color);
  &:hover {
    background-color: #9bbbd4;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export default Carousel;
