import CustomLink from "../CustomLink";
import {
  ContentWrapper,
  HeadTitle,
  LeftColumn,
  ReusableSectionWrap,
  RightColumn,
  Row,
  SectionDesc,
  SectionImage,
} from "./styles";

const ReuslableSection = ({
  isDark,
  imgFirst,
  img,
  headTitle,
  descText,
  headTitleDark,
  descDark,
  btnLable,
  id,
}) => {
  return (
    <ReusableSectionWrap isDark={isDark} id={id}>
      <ContentWrapper>
        <Row imgFirst={imgFirst}>
          <LeftColumn>
            <HeadTitle headTitleDark={headTitleDark}>{headTitle}</HeadTitle>
            <SectionDesc descDark={descDark}>{descText}</SectionDesc>
            <CustomLink text={btnLable} target={id} isMargin="35px 0" />
          </LeftColumn>
          <RightColumn>
            <SectionImage src={img} alt="first" />
          </RightColumn>
        </Row>
      </ContentWrapper>
    </ReusableSectionWrap>
  );
};

export default ReuslableSection;
