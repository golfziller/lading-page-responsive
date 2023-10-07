import { NextPage } from "next";
import styled from 'styled-components';
const SubTitle = styled.span`
font-size: 36px;
font-weight: 400;
line-height: 42px;
letter-spacing: 1.5px;
text-align: left;

`
const Number = styled.span`
font-size: 18px;
font-weight: 400;
line-height: 21px;
letter-spacing: 0px;
text-align: left;
`
type SubTitleAndNumberProps = {
  number: string,
  subTitle: string,
  colorUnderlineClass?: string,
  numberClass? :string,
  classNameDivSubTitle?: string,
}
const SubTitleAndNumber: NextPage<SubTitleAndNumberProps> = ({ classNameDivSubTitle,numberClass, number, colorUnderlineClass, subTitle }) => {
  return (
    <div className={`${classNameDivSubTitle ??''}`}>
    <span className="relative inline-block">
      <span className="relative z-10 bottom-3"><Number className={numberClass}>{number}</Number></span>
      <span className={`absolute left-0 right-0 bottom-2 h-1 ${ colorUnderlineClass ?? 'bg-purple-02'}  rounded-full bottom-0 transform translate-y-1`}></span>
    </span>
    <SubTitle className="text-gray-02"> {subTitle}</SubTitle>
  </div>
  )
}
export default SubTitleAndNumber;