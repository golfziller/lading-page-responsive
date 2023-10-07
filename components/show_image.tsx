import { NextPage } from "next";
import styled from 'styled-components';
import '../styles/show_image.css';

const OverLab =styled.div`
position: absolute;
z-index: 3;
`
type ShowImgProps = {
  id: string,
}
const ShowImage:NextPage<ShowImgProps> = ({id, }) => {
  return (
    <OverLab  className='w-full' >
    <div className={`container mx-auto lg:pt-10 md:pt-[93px] pt-[75px]  flex flex-row justify-center md:justify-start `}>
      <div className="md:basis-1/2  ">
        <img id={id} alt="my picture eiei"  className={`md:w-[82%]  '}`} />
      </div>
    </div>
  </OverLab>
  //   <OverLab  className='w-full' >
  //   <div className={`container mx-auto lg:pt-10 md:pt-[93px]   grid md:grid-cols-2  sm:grid-cols-1   place-content-center md:place-content-start sm:place-content-center `}>
  //     <img id={id} alt="my picture eiei"  className={`md:w-[82%]  sm:w-2/4'}`} />
  //   </div>
  // </OverLab>
  );
  
}

export default ShowImage;