import { ReactElement } from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: "center";
  padding: 10px;
  color: #333;
  background-color: #e6e6e6;
  border: solid 1px gba(168, 168, 168, 0.29);
  border-radius: 15px;
  box-shadow: 0px 0px 3px 3px rgba(168, 168, 168, 0.29);
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 50%;
  overflow: hidden;
`;

interface SearchCardProps {
  image: string;
  title: string;
  subtitle: string;
  body: ReactElement;
  onClick?: Function;
}

/**
 * This should be a React component that, at the very least, comprises an image component a title and a description or subheading.
 * Types/Interfaces should be defined in a separate module and imported here
 *
 * @param props
 * @returns
 *
 */
const SearchCard = (props: SearchCardProps) => {
  const { image, title, subtitle, body, onClick } = props;
  return (
    <Card
      onClick={(e) => {
        onClick && onClick(e);
      }}
    >
      {image && image.length && (
        <ImageWrapper>
          <img src={image} alt={`${title} image`} width={`100%`} />
        </ImageWrapper>
      )}
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      {body}
    </Card>
  );
};

export default SearchCard;
