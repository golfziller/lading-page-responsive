import { NextPage } from "next";
import styled from 'styled-components';
import '../styles/show_image.css';

const OverLab =styled.div`
position: absolute;
z-index: 3;
`
type ShowImgProps = {
  id: string,
  isRevers?: boolean,
}
const ShowImage:NextPage<ShowImgProps> = ({id, isRevers, }) => {
  return (
    <OverLab id="img" className='w-full'>
    <div className={`container mx-auto  grid grid-cols-2 ${isRevers ?? 'py-5'}`}>
    
      <img id={id} alt="my picture eiei"  className={`${isRevers ? 'col-start-2 ' : ' w-9/12'}`} />
    </div>
  </OverLab>
  );
  
}

export default ShowImage;