import styled from "styled-components";

export interface ImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}
const ImageWrapper = styled.div<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  overflow: hidden;
`;

export function Image(props: ImageProps) {
  return (
    <ImageWrapper
      width={props.width || "100px"}
      height={props.height || "100px"}
    >
      <img src={props.src} alt={props.alt} width={`100%`} />
    </ImageWrapper>
  );
}
