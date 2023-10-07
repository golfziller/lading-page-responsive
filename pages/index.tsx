import Step from '@/components/step';
import { NextPage } from 'next'
import ShowImage from '@/components/show_image';
import ShowBasketballImage from '@/components/show_basketball';
import { dataPage } from '@/constants';
import CarouselInfo from '@/components/carousel';
const Main: NextPage =() => {
  return (
    <div>
      <ShowImage id="football-img"></ShowImage>
      <div>
        <Step
          title={dataPage.football[0].title} 
          number={dataPage.football[0].number} 
          subTitle={dataPage.football[0].subTitle} 
          detail={dataPage.football[0].desc}
          classNameDivSubTitle='lg:mb-6 md:mb-4 hidden md:block'
          classNameParent='md:pt-[60px] lg:pt-3 md:pl-10 md:pr-10  lg:pl-0 lg:pr-0' 
          descriptionClass='lg:pb-8 md:pb-0'></Step>

        <Step  
          number={dataPage.football[1].number}
          subTitle={dataPage.football[1].subTitle}
          detail={dataPage.football[1].desc}
          classNameDivSubTitle='lg:mb-6 md:mb-4 hidden md:block'
          bgClass='bg-white-smoke'
          classNameParent='md:pl-10 md:pr-10  lg:pl-0 lg:pr-0'
          descriptionClass='lg:pr-[130px]'>
            <CarouselInfo renderFootball></CarouselInfo>
          </Step>


        <Step 
          number={dataPage.football[2].number} 
          subTitle={dataPage.football[2].subTitle}
          detail={dataPage.football[2].desc}
          classNameParent='hidden md:block  md:pl-10 md:pr-10  lg:pl-0 lg:pr-0' 
          classNameDivSubTitle='lg:mb-6 md:mb-4 hidden md:block lg:pt-3'  
          bgClass='bg-purple-01'
          colorUnderlineClass='bg-white'
          descriptionClass='text-white  lg:pr-[180px] lg:pb-5 md:pb-5' ></Step> 
      </div>

      <ShowBasketballImage  id="basketball-img"></ShowBasketballImage>
      <Step 
        isReverse
        title={dataPage.basketball[0].title}
        number={dataPage.basketball[0].number} 
        subTitle={dataPage.basketball[0].subTitle}
        detail={dataPage.basketball[0].desc}
        classNameDivSubTitle='lg:mb-6 md:mb-4 hidden md:block md:pb-1 lg:pb-0'
        classNameDivContent="lg:basis-[45%]"
        classNameParent='md:pl-6 lg:pl-0 md:pt-[55px] lg:pt-0'
        descriptionClass='pb-5'></Step>

      <Step 
        number={dataPage.basketball[1].number} 
        subTitle={dataPage.basketball[1].subTitle}
        detail={dataPage.basketball[1].desc}
        classNameDivSubTitle='lg:mb-6 md:mb-4 hidden md:block'
        classNameParent='md:pl-6 lg:pl-0' 
        classNameDivContent='md:pt-10 ' 
        isReverse  
        descriptionClass=' pb-8 ' 
        bgClass='bg-white-smoke'>
          <CarouselInfo></CarouselInfo>
        </Step>
      <Step 
        number={dataPage.basketball[2].number} 
        subTitle={dataPage.basketball[2].subTitle}
        detail={dataPage.basketball[2].desc}
        isReverse  
        classNameDivSubTitle='lg:mb-6 md:mb-4 hidden md:block md:pt-8 lg:pt-0' 
        classNameParent='hidden  md:block md:pl-8 lg:pl-0' 
        numberClass='text-purple-03' 
        bgClass='bg-dark-blue'
        colorUnderlineClass='bg-white' 
        descriptionClass='text-white md:pb-8 lg:pb-0'></Step> 
   </div>
  )
}

 
export default Main