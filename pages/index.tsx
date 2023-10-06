import Step from '@/components/step';
import { NextPage } from 'next'
import ShowImage from '@/components/show_image';
import ShowBasketballImage from '@/components/show_basketball';

const Main: NextPage =() => {
  return (
    <div>
      <ShowImage id="football-img"></ShowImage>
      <div>
        <Step title='ATHLETS' classNameParent='md:pt-[60px] lg:pt-3 md:pl-10 md:pr-10  lg:pl-0 lg:pr-0'  number='01' subTitle='CONNECTION'
         descriptionClass='lg:pb-8 md:pb-0' detail='Connect with coaches directly, you can ping coaches to view profile.'></Step>
        <Step  number='02'classNameParent='md:pl-10 md:pr-10  lg:pl-0 lg:pr-0'   bgClass='bg-white-smoke' subTitle='COLLABORATION' 
        descriptionClass='lg:pr-[130px]' 
         detail='Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.'></Step>
        <Step  number='03' classNameParent='hidden md:block  md:pl-10 md:pr-10  lg:pl-0 lg:pr-0' classNameDivSubTitle='lg:pt-3'  bgClass='bg-purple-01'colorUnderlineClass='bg-white'
         descriptionClass='text-white  lg:pr-[180px] lg:pb-5 md:pb-5'  subTitle='GROWTH' detail='Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc.'></Step> 
      </div>

      <ShowBasketballImage  id="basketball-img"></ShowBasketballImage>
      <Step classNameDivSubTitle='md:pb-1 lg:pb-0' classNameDivContent="lg:basis-[45%]" classNameParent='md:pl-6 lg:pl-0 md:pt-[55px] lg:pt-0' isReverse title='PLAYERS' number='01'
       descriptionClass='pb-5'  subTitle='CONNECTION' detail='Connect with talented athlete directly, you can watch their 
skills through video showreels directly from Surface 1.'></Step>
      <Step classNameParent='md:pl-6 lg:pl-0' classNameDivContent='md:pt-10 '  isReverse  number='02' descriptionClass=' pb-8 ' bgClass='bg-white-smoke' subTitle='COLLABORATION' detail='Work with recruiter to increase your chances of finding
talented athlete.'></Step>
      <Step isReverse  classNameDivSubTitle='md:pt-8 lg:pt-0' classNameParent='hidden md:block md:pl-8 lg:pl-0' numberClass='text-purple-03' number='03' bgClass='bg-dark-blue'colorUnderlineClass='bg-white' 
      descriptionClass='text-white md:pb-8 lg:pb-0'  subTitle='GROWTH' detail='Save your time, recruit proper athlets for your team.'></Step> 
   </div>
  )
}

 
export default Main