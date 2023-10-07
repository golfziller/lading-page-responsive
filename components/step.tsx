import { NextPage } from "next";
import styled from 'styled-components';
import '../styles/step.css';
import { ReactNode } from "react";
import SubTitleAndNumberProps from './sub_title';
// const Title = styled.h1`
//   font-size: 90px;
//   font-weight: 400;
//   line-height: 105px;
//   letter-spacing: 0px;
//   text-align: left;
// `;


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
  children?: ReactNode
}

const Step: NextPage<StepProps> = ({ children, classNameDivContent, classNameDivSubTitle, classNameParent, title, number, subTitle, detail, bgClass, descriptionClass, colorUnderlineClass, isReverse, numberClass })=> {
  return (
    <div className={`${ bgClass ?? 'bg-white'} ${classNameParent ?? ''}   `}>
    <div className={`container mx-auto flex ${isReverse ? '': 'md:flex-row-reverse'} container-step`} >
     
      <div className={`${classNameDivContent} lg:basis-1/2  ${isReverse? 'md:basis-[55%]' : 'md:basis-[60%]'} ${isReverse ?' lg:pl-[150px]' : ''}   ${title ? 'md:pb-6 pt-3' : 'lg:py-14 md:py-6'} `}>
        {title &&<h1 className={`mb-10 text-gray-01 ml-5 md:ml-0 ${isReverse ? 'lg:pt-20' : ''}    title`}>{title}</h1>}
        <SubTitleAndNumberProps 
          classNameDivSubTitle={classNameDivSubTitle} 
          numberClass={numberClass} colorUnderlineClass={colorUnderlineClass} subTitle={subTitle} number={number}></SubTitleAndNumberProps>
        {/* <div className={`lg:mb-6 md:mb-4 hidden md:block ${classNameDivSubTitle ??''}`}>
          <span className="relative inline-block">
            <span className="relative z-10 bottom-3"><Number className={numberClass}>{number}</Number></span>
            <span className={`absolute left-0 right-0 bottom-2 h-1 ${ colorUnderlineClass ?? 'bg-purple-02'}  rounded-full bottom-0 transform translate-y-1`}></span>
          </span>
          <SubTitle className="text-gray-02"> {subTitle}</SubTitle>
        </div> */}
        <span  className={`${descriptionClass} hidden md:block text-desc`}>{detail}</span>
      </div>
      {children}
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