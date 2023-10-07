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
const ShowFootball:NextPage<ShowImgProps> = ({id, }) => {
  return (
    <OverLab  className='w-full' >
    <div className={`lg:container mx-auto lg:pt-10 md:pt-[93px] pt-[75px]  flex flex-row justify-center md:justify-start `}>
      <div className="md:basis-1/2  ">
        <img id={id} alt="my picture eiei"  className={`xl:w-[83%] lg:w-full md:w-[83%]  '}`} />
      </div>
    </div>
  </OverLab>
  );
  
}

export default ShowFootball;