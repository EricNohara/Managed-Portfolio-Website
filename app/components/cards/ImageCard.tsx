import React, { useState } from "react";
import styled from "styled-components";
import LoadingSpinner from "../LoadingSpinner";

interface ImageCardProps {
  imageUrl: string;
  alt?: string;
  link?: string;
  title?: string;
  flipped?: boolean;
}

const CardLink = styled.a`
  border-radius: 10px;
  text-decoration: none;
  display: block;
  position: relative;
`;

const CardImage = styled.img.withConfig({
  shouldForwardProp: (prop) => prop !== "flipped" && prop !== "loaded",
})<{ flipped?: boolean; loaded?: boolean }>`
  object-fit: cover;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
  transition: opacity 0.5s;
  ${({ flipped }) => flipped && "transform: scaleX(-1);"}
  display: block;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 200px;
`;

const Loader = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(17, 24, 36, 0.1);
  border-radius: 10px;
  z-index: 1;
  font-size: 1.2rem;
  color: var(--txtgrey);
`;

const ImageCard: React.FC<ImageCardProps> = ({
  imageUrl,
  alt = "",
  link = "",
  flipped = false,
}) => {
  const [loaded, setLoaded] = useState(false);

  const image = (
    <ImageWrapper>
      {!loaded && (
        <Loader>
          <LoadingSpinner />
        </Loader>
      )}
      <CardImage
        src={imageUrl}
        alt={alt}
        flipped={flipped}
        loaded={loaded}
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
    </ImageWrapper>
  );

  if (link !== "") {
    return (
      <CardLink href={link} target="_blank" rel="noopener noreferrer">
        {image}
      </CardLink>
    );
  } else {
    return image;
  }
};

export default ImageCard;
