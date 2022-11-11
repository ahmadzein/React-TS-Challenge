import { ReactElement } from "react";
import Card from "../style/card";
import { Image } from "./Image";

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
        <Image
          src={image}
          alt={`${title} image`}
          width={`100%`}
          height={`50%`}
        />
      )}
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      {body}
    </Card>
  );
};

export default SearchCard;
