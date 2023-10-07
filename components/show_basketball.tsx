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
const ShowBasketballImage:NextPage<ShowImgProps> = ({id, }) => {
  return (
    <OverLab id="img" className='w-full '>
    <div className="container  lg:w-full lg:max-w-[1350px]  pt-[80px]   mx-auto 
     flex md:flex-row-reverse md:pt-[50px] lg:pt-0 flex-row md:justify-start justify-center">
      <img id={id} alt="my picture eiei"  className='md:w-[58%] lg:w-[65%] '  />
    </div>
  </OverLab>
  );
  
}

export default ShowBasketballImage;