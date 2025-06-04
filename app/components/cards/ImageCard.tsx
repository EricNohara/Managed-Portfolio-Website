import React from "react";
import styled from "styled-components";

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
`;

const CardImage = styled.img.withConfig({
  shouldForwardProp: (prop) => prop !== "flipped",
})<{ flipped?: boolean }>`
  object-fit: cover;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  ${({ flipped }) => flipped && "transform: scaleX(-1);"}
`;

const ImageCard: React.FC<ImageCardProps> = ({
  imageUrl,
  alt = "",
  link = "",
  flipped = false,
}) => {
  if (link !== "") {
    return (
      <CardLink href={link} target="_blank" rel="noopener noreferrer">
        <CardImage src={imageUrl} alt={alt} flipped={flipped} />
      </CardLink>
    );
  } else {
    return <CardImage src={imageUrl} alt={alt} flipped={flipped} />;
  }
};

export default ImageCard;
