import Step from '@/components/step';
import { NextPage } from 'next'
import ShowImage from '@/components/show_image';

const Main: NextPage =() => {
  return (
    <div>
      <ShowImage id="football-img"></ShowImage>
      <div>
        <Step title='ATHLETS' number='01' subTitle='CONNECTION' detail='Connect with coaches directly, you can ping coaches to view profile.'></Step>
        <Step  number='02' bgClass='bg-white-smoke' subTitle='COLLABORATION' detail='Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.'></Step>
        <Step  number='03' bgClass='bg-purple-01'colorUnderlineClass='bg-white' descriptionClass='text-white'  subTitle='GROWTH' detail='Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc.'></Step> 
      </div>

      <ShowImage isRevers id="basketball-img"></ShowImage>
      <Step isReverse title='PLAYERS' number='01' subTitle='CONNECTION' detail='Connect with talented athlete directly, you can watch their 
skills through video showreels directly from Surface 1.'></Step>
      <Step isReverse  number='02' bgClass='bg-white-smoke' subTitle='COLLABORATION' detail='Work with recruiter to increase your chances of finding
talented athlete.'></Step>
      <Step isReverse  numberClass='text-purple-03' number='03' bgClass='bg-dark-blue'colorUnderlineClass='bg-white' descriptionClass='text-white'  subTitle='GROWTH' detail='Save your time, recruit proper athlets for your team.'></Step> 
   </div>
  )
}

 
export default Main