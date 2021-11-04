import { useState } from "react";
import { InfoContainer1,InfoContainer2, InfoRow, InfoWrapper, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img } from "./InfoElements";
import { ArrowForward, ArrowRight, MainBg, MainBtnWrapper, MainContainer, MainContent, MainH1, MainP, VideoBg,} from "./MainElements";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";
import { Link } from "react-router-dom";
import logorooms from '../../images/stopwatchlogo.png';
import logocreep from '../../images/skulllogo.jpg';

function Main() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <div>
    <MainContainer id="home">
      <MainBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </MainBg>
      <MainContent>
        <MainH1>Decrypt 🗝he c🔒de...</MainH1>
        <MainP>
        Sign up if you're new around here
        </MainP>
        <MainBtnWrapper>
          <Button
          
          as={Link}      
          to="/SignUp"
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          primary={true}
          dark={true}
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}>

            Sign Up {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </MainBtnWrapper>
      </MainContent>
    </MainContainer>
      <InfoContainer1 lightBg={true} id={"stories"}>
      <InfoWrapper>
        <InfoRow imgStart={false}>
          <Column1>
      
            <TextWrapper>
              <TopLine>Creepypasta</TopLine>
              <Heading lightText={false}>By the community</Heading>
              <Subtitle darkText={true}>The best short stories to read online for free.</Subtitle>            
            </TextWrapper>
            <Button
          as={Link}      
          to={"/Stories"}
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          primary={true}
          dark={true}
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          Go {hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
          </Column1>
          <Column2>
   
            <ImgWrap>
            <Img src={logorooms} alt="Logo" />
            </ImgWrap>
            
          </Column2>
          
        </InfoRow>
        
      </InfoWrapper>

    
     
    </InfoContainer1>


    <InfoContainer2 lightBg={true} id={"publishone"}>
      <InfoWrapper>
        <InfoRow imgStart={true}>
          <Column1>
      
            <TextWrapper>
              <TopLine>Publish one</TopLine>
              <Heading lightText={false}>The pen is yours</Heading>
              <Subtitle darkText={true}>The horror story taps into our fears by combining the ordinary with the shocking, the unnatural, and the grotesque. Don't be boring...</Subtitle>            
            </TextWrapper>
            <Button
          as={Link}      
          to={"/Addstory"}
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          primary={true}
          dark={true}
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          Go {hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
          </Column1>
          <Column2>
   
            <ImgWrap>
            <Img src={logocreep} alt="Logo" />
            </ImgWrap>
            
          </Column2>
          
        </InfoRow>
        
      </InfoWrapper>

    
     
    </InfoContainer2>

    </div>
  );
}

export default Main;