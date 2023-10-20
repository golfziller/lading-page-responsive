import { NextPage } from "next";
import '../styles/step.css';
import { ReactNode } from "react";
import SubTitleAndNumberProps from './sub_title';

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
     
      <div className={` lg:basis-1/2  ${isReverse? 'md:basis-[57%]' : 'md:basis-[65%]'} ${isReverse ?' xl:pl-[150px]' : ''}   ${title ? '' : 'lg:py-14 md:py-6'} ${classNameDivContent}`}>
        {title &&<h1 className={`mb-10 text-gray-01 ml-5 md:ml-0 ${isReverse ? 'lg:pt-20' : ''}    title`}>{title}</h1>}
        <SubTitleAndNumberProps 
          classNameDivSubTitle={classNameDivSubTitle} 
          numberClass={numberClass} colorUnderlineClass={colorUnderlineClass} subTitle={subTitle} number={number}></SubTitleAndNumberProps>
        <span  className={`${descriptionClass} hidden md:block text-desc`}>{detail}</span>
      </div>
      {children}
    </div>
  </div>
  );
}
export default Step;