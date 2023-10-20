import { NextPage } from "next";
import styled from 'styled-components';

const SubTitle = styled.span`


`
const Number = styled.span`

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
      <span className="relative z-10 sm:bottom-3 bottom-2"><span className={`${numberClass} number`}>{number}</span></span>
      <span className={`absolute left-0 right-0 bottom-2 h-1 ${ colorUnderlineClass ?? 'bg-purple-02'}  rounded-full bottom-0 transform translate-y-1`}></span>
    </span>
    <span className="sub-title text-gray-02"> {subTitle}</span>
  </div>
  )
}
export default SubTitleAndNumber;