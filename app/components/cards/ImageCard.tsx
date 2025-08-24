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
  transition: filter 0.3s ease;

  &:hover img {
    filter: brightness(1.15);
  }
`;

const CardImage = styled.img.withConfig({
  shouldForwardProp: (prop) => prop !== "flipped" && prop !== "loaded",
})<{ flipped?: boolean; loaded?: boolean }>`
  object-fit: cover;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
  transition: opacity 0.5s, filter 0.2s;
  ${({ flipped }) => flipped && "transform: scaleX(-1);"}
  display: block;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Loader = styled.div`
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(17, 24, 36, 0.1);
  border-radius: 10px;
  z-index: 1;
  font-size: 1.2rem;
  color: var(--txtgrey);
  padding: 10%;
`;

const ImageCard: React.FC<ImageCardProps> = ({
  imageUrl,
  alt = "",
  link = "",
  title = "",
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
        title={title}
        flipped={flipped}
        loaded={loaded}
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
    </ImageWrapper>
  );

  return link ? (
    <CardLink href={link} target="_blank" rel="noopener noreferrer">
      {image}
    </CardLink>
  ) : (
    image
  );
};

export default ImageCard;
