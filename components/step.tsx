import { NextPage } from "next";
import styled from 'styled-components';
import '../styles/step.css';

// const Title = styled.h1`
//   font-size: 90px;
//   font-weight: 400;
//   line-height: 105px;
//   letter-spacing: 0px;
//   text-align: left;
// `;

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
// const Description = styled.span`
// font-size: 20px;
// font-weight: 400;
// line-height: 28px;
// letter-spacing: 0px;
// text-align: left;

// `
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
  classNameParent?: string,
  classNameDivSubTitle?: string,
  classNameDivContent?: string,
}

const Step: NextPage<StepProps> = ({classNameDivContent, classNameDivSubTitle, classNameParent, title, number, subTitle, detail, bgClass, descriptionClass, colorUnderlineClass, isReverse, numberClass })=> {
  return (
    <div className={`${ bgClass ?? 'bg-white'} ${classNameParent ?? ''}   `}>
    <div className={`container mx-auto flex ${isReverse ? '': 'flex-row-reverse'}`} >
     
      <div className={`${classNameDivContent} lg:basis-1/2  ${isReverse? 'md:basis-[55%]' : 'md:basis-[60%]'} ${isReverse ?' lg:pl-[150px]' : ''}   ${title ? 'md:pb-6 pt-3' : 'lg:py-14 md:py-6'} `}>
        {title &&<h1 className={`mb-10 text-gray-01 ${isReverse ? 'lg:pt-20' : ''}    title`}>{title}</h1>}
        <div className={`lg:mb-6 md:mb-4 hidden sm:block ${classNameDivSubTitle ??''}`}>
          <span className="relative inline-block">
            <span className="relative z-10 bottom-3"><Number className={numberClass}>{number}</Number></span>
            <span className={`absolute left-0 right-0 bottom-2 h-1 ${ colorUnderlineClass ?? 'bg-purple-02'}  rounded-full bottom-0 transform translate-y-1`}></span>
          </span>
          <SubTitle className="text-gray-02"> {subTitle}</SubTitle>
        </div>
        <span  className={`${descriptionClass} hidden sm:block text-desc`}>{detail}</span>
      </div>
    
    </div>
  </div>





  // <div className={`${ bgClass ?? 'bg-white'} ${classNameParent ?? ''}   `}>
  //   <div className={`container mx-auto grid lg:grid-cols-2 md:grid-cols-3`} >
      
  //     {!isReverse &&<div></div>}
  //     <div className={`${isReverse ?' lg:pl-[135px] lg:col-span-1 md:col-span-2' : ' lg:col-span-1'}  md:col-span-2 ${title ? 'md:pb-6 pt-3' : 'lg:py-14 md:py-6'} `}>
  //       {title &&<h1 className={`mb-10 text-gray-01 ${isReverse ? 'lg:pt-20' : ''}    title`}>{title}</h1>}
  //       <div className={`lg:mb-6 md:mb-4 hidden sm:block ${classNameDivSubTitle ??''}`}>
  //         <span className="relative inline-block">
  //           <span className="relative z-10 bottom-3"><Number className={numberClass}>{number}</Number></span>
  //           <span className={`absolute left-0 right-0 bottom-2 h-1 ${ colorUnderlineClass ?? 'bg-purple-02'}  rounded-full bottom-0 transform translate-y-1`}></span>
  //         </span>
  //         <SubTitle className="text-gray-02"> {subTitle}</SubTitle>
  //       </div>
  //       <span  className={`${descriptionClass} hidden sm:block text-desc`}>{detail}</span>
  //     </div>
  //     {isReverse &&<div></div>}
  //   </div>
  // </div>
  );
}
export default Step;