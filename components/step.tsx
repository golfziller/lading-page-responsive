import { NextPage } from "next";
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 90px;
  font-weight: 400;
  line-height: 105px;
  letter-spacing: 0px;
  text-align: left;
`;

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
const Description = styled.span`
font-size: 20px;
font-weight: 400;
line-height: 28px;
letter-spacing: 0px;
text-align: left;

`
type StepProps = {
  title?: string,
  number: string,
  subTitle: string,
  detail: string,
  bgClass?: string,
  descriptionClass?: string,
  colorUnderlineClass?: string,
  isReverse?: boolean,
  numberClass? :string,
}

const Step: NextPage<StepProps> = ({ title, number, subTitle, detail, bgClass, descriptionClass, colorUnderlineClass, isReverse, numberClass })=> {
  return (
  <div className={` ${ bgClass ?? 'bg-white'}`}>
    <div className={`container mx-auto grid lg:grid-cols-2 md:grid-cols-3`} >
      
      {!isReverse &&<div></div>}
      <div className={`${isReverse ?'col-start-1 lg:pl-32  lg:col-span-1 md:col-span-2' : 'lg:col-span-1'}  md:col-span-2  py-10`}>
      {/* <div className={`${isReverse ?'col-start-1 pl-32' : 'col-start-2'}  py-10`}> */}
        {title &&<Title className={`mb-10 text-gray-01 ${isReverse ? 'pt-10' : ''}`}>{title}</Title>}
        <div className='mb-6'>
          <span className="relative inline-block">
            <span className="relative z-10 bottom-3"><Number className={numberClass}>{number}</Number></span>
            <span className={`absolute left-0 right-0 bottom-2 h-1 ${ colorUnderlineClass ?? 'bg-purple-02'}  rounded-full bottom-0 transform translate-y-1`}></span>
          </span>
          <SubTitle className="text-gray-02"> {subTitle}</SubTitle>
          
        </div>
        <Description className={descriptionClass}>{detail}</Description>
      </div>
    </div>
  </div>
  );
}
export default Step;