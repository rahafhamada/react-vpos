import { LinkItem, Wrapper } from "./styles";

const CustomLink = ({ text, target, isMargin }) => {
  return (
    <Wrapper isMargin={isMargin}>
      <LinkItem to={target} smooth exact="true" duration={500} offset={-68}>
        {text}
      </LinkItem>
    </Wrapper>
  );
};

export default CustomLink;
