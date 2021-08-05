import React from 'react';
import { Container, 
  
  // Button 

} from '../../globalStyles';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  // TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from './InfoSection.elements';

import './infoSection.scss';
import bannerimg from '../../images/herobanner.svg';
import vector1 from '../../images/Vector1.svg';
import vector2 from '../../images/Vector2.svg';
import vector3 from '../../images/Vector3.svg';
import vector4 from '../../images/Vector4.svg';
import vector5 from '../../images/Vector5.svg';
import vector6 from '../../images/Vector6.svg';

import { Button } from '../Button/Button';
import { Fade, Flip } from "react-awesome-reveal";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};



const InfoSection = ({
  // primary,
  lightBg,
  // topLine,
  // lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  // buttonLabel,
  // img,
  alt,
  imgStart,
  start
}) => {
  const onConnectWallet = () => {
    const isPhantomInstalled = window.solana && window.solana.isPhantom;
    if (!isPhantomInstalled) {
      alert("Please install Phantom to continue! \n https://phantom.app");
    } else {
      window.solana.on('connect', () => {
        alert(`Connected. Your wallet address: ${window.solana.publicKey.toString()}`);
      });
      window.solana.connect();
    }
  }
  
  return (
    <React.Fragment>
      <InfoSec lightBg={lightBg} className="hero-banner">
        <Container>
        <Fade direction="left" triggerOnce="true">
          <InfoRow imgStart={imgStart}>
        
          <InfoColumn>
       
              <ImgWrapper start={start}>
                <Img src={bannerimg} alt={alt} />
              </ImgWrapper>
             

            </InfoColumn>
         
            <InfoColumn>
            <Fade direction="right" delay={1000} triggerOnce="true">
              <TextWrapper>
                {/* <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine> */}
                <Heading lightText={lightText}>THE LEADING OVER/UNDER FANTASY GAME</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>SIGN UP NOW & WE’LL INSTANTLY MATCH YOUR DEPOSIT UP TO $100.</Subtitle>
                <div className="row justify-content-center"> 
                <div className="col-sm-5 ">
                {/* <Link to='/sign-up'> */}
                  <Button big fontBig primary onClick={onConnectWallet} >
                   SIGNUP AND PLAY NOW!
                  </Button>
                {/* </Link> */}
                </div>
                </div>
             
              </TextWrapper>
            </Fade>
            </InfoColumn>
           
          </InfoRow>
          </Fade>
          
          </Container>

                    
          <div className="container-fluid logo-container">
        <div className="transbox">
      <div className="container">
<Carousel
  swipeable={true}
  draggable={false}
  responsive={responsive}
  infinite={true}
  autoPlaySpeed={100}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={100}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["desktop"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
        <div>
        <Flip triggerOnce="true">
        <Img src={vector1} alt="vector1 Img" />
        </Flip>
        </div>
        <div >
        <Flip triggerOnce="true">
        <Img src={vector2} alt="vector2 Img" />
        </Flip>
        </div>
        <div >
        <Flip triggerOnce="true">
        <Img src={vector3} alt="vector3 Img" />
        </Flip>
        </div>
        <div>
        <Flip triggerOnce="true">
        <Img src={vector4} alt="vector4 Img" />
        </Flip>
        </div>
        <div>
        <Flip triggerOnce="true">
        <Img src={vector5} alt="vector5 Img" />
        </Flip>
        </div>
        <div >
        <Flip triggerOnce="true">
        <Img src={vector6} alt="vector6 Img" />
        </Flip>
        </div>
        </Carousel> 
      </div>
      </div>

      </div>


        
      </InfoSec>
    


    </React.Fragment>
  );
}

export default InfoSection;
