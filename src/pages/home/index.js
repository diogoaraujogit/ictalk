import React from 'react';


import { Container, HomeInfo, HomeAbout, IctalkInfo, IctalkAbout, WhiteBlue, WhoTalk, 
          BlueWhite, SignUp, SignupCards, Card, Speakers, Speaker, Footer } from './styles';
import header_logo from '../../assets/header_logo.png'
import home_info_img from '../../assets/home_info_img.png'
import orange_dialog from '../../assets/orange_dialog.png'
import ictalk_about from '../../assets/ictalk_about.png'
import blue_dialog from '../../assets/blue_dialog.png'
import white_to_blue_dialogs from '../../assets/white_to_blue_dialogs.svg'
import blue_to_white_dialogs from '../../assets/blue_to_white_dialogs.svg'
import speaker_avatar from '../../assets/speaker_avatar.png'
import participant from '../../assets/participant.png'
import speaker_1 from '../../assets/speaker_1_09_2020.jpeg'
import speaker_2 from '../../assets/speaker_2_09_2020.jpeg'
import speaker_3 from '../../assets/speaker_3_09_2020.jpeg'
import speaker_4 from '../../assets/speaker_4_09_2020.jpg'
import ictalk_footer from '../../assets/ictalk_footer.png'
import logo_principal from '../../assets/logo_principal.png'
import footer from '../../assets/footer.png'


export default function Home() {
  //const [hoverCard, setHoverCard] = useState(false)

  return (
    <Container >
      <HomeInfo>
        <div id='home'>
          <header>
            <a href='#about'>
            <img src={header_logo} alt='header-logo' />
            </a>            
            <a href='#about'>
              <h3>O ICTALK</h3>
            </a>
            <div></div>
          </header>
          <div>
            <IctalkInfo>
              <h3>EDIÇÃO</h3>
              <h1>SET 2020</h1>
              <p>Automação . Software . Produção</p>
              <h2>10.Set 16:00h às 17:00h</h2>
              <p>Horário de Brasília</p>
              
              <a href='#signup'>
              <button>
                Inscrições
              </button>
              </a>
              <a href='#speakers'>
              <div>
                <h3>
                  Ver mais 
                </h3>
                <i className="material-icons">
                  arrow_forward
                </i>
              </div>
              </a>
            </IctalkInfo>
            <div>
              <img src={home_info_img} alt='Home Info' />
            </div>
          </div>
        </div>
      </HomeInfo>
      <HomeAbout>
        <div id='orange-balloon'>
          <img src={orange_dialog} alt='Orange Balloon' />
        </div>
        <IctalkAbout>
          <div id="about">
            <h1>ICTALK?</h1>
            <p>
                &emsp;Acreditamos que falar de tecnologia é essencial para o  desenvolvimento da comunidade
                e de nossa empresa. Por  isso, criamos o ICTALK, um <i>meetup</i> mensal, onde
                falaremos  de tecnologia e outras modinhas.
            </p>
          </div>
          <img src={ictalk_about} alt='ICTALK About' />
          <footer>
            <h1>Quem Vamos?</h1>
            <p>Todos do ICTS podem participar, até a mucurinha vem. Você não vai ficar de fora, né?</p>
          </footer>
        </IctalkAbout>
        <div id='blue-balloon'>
          <img src={blue_dialog} alt='Blue Balloon' />
        </div>
      </HomeAbout>
      <WhiteBlue>
        <img src={white_to_blue_dialogs} alt='White to blue dialogs' />
      </WhiteBlue>
      <WhoTalk>
        <div>
          <h1>Posso Palestrar?</h1>
          <h2>Mas claro!</h2>
          <p>Separa um tema bem legal do seu conhecimento técnico e vem palestrar.</p>
        </div>
      </WhoTalk>
      <BlueWhite>
        <img src={blue_to_white_dialogs} alt='Blue to white dialogs' />
      </BlueWhite>
      <SignUp>
        <h1 id='signup'>Inscrições <span>SET 2020</span></h1>
        <SignupCards>
          {/* <a href='https://forms.gle/edR8ijya7EUUq6WVA' target='_blank' rel="noopener noreferrer">
          <Card>
            <div >
              <img src={participant} alt='participant' /> 
            </div>
            <button>
              Participante
            </button>
          </Card>
          </a> */}
          <a href='https://docs.google.com/forms/d/e/1FAIpQLScKE_7yHsJh-_L_t6PevlWOn0hilO25lqEKKwNlQFRwx7ac9Q/viewform' target='_blank' rel="noopener noreferrer">
          <Card speaker >
            <div>
              <img src={speaker_avatar} alt='Speaker' /> 
            </div>
            <button>
              Palestrante
            </button>
          </Card>
          </a>
        </SignupCards>
      </SignUp>
      <Speakers id='speakers'>
        <h1>Palestras Edição SET 2020</h1>
        <div>
          <Speaker>
            <img src={speaker_1} alt='Speaker' />  
            <h3>Lucas Melo</h3>
            <h4>Framework Angular</h4>
          </Speaker>
          <Speaker>
            <img src={speaker_2} alt='Speaker' />  
            <h3>Igor Oliveira</h3>
            <h4>Google Cloud: custos, cotas e orçamentos</h4>
          </Speaker>
          <Speaker>
            <img src={speaker_3} alt='Speaker' />  
            <h3>Oliveira</h3>
            <h4>Aprenda a aprender</h4>
          </Speaker>
          <Speaker>
            <img src={speaker_4} alt='Speaker' />  
            <h3>Emerson Domingos</h3>
            <h4>BDD (Behaviour Drive Development)</h4>
          </Speaker>
        </div>
      </Speakers>
      <Footer>
        <div>
          <a href='#home'>
            <img src={ictalk_footer} alt='ICTALK Logo' />
          </a>
          <a href='https://www.grupoicts.com.br/' target='_blank' rel="noopener noreferrer"> 
            <img src={logo_principal} alt='ICTS Logo' /> 
          </a>
        </div>
        <img src={footer} alt='Footer' /> 
      </Footer>
      </Container>
  );
}
