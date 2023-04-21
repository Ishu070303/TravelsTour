import React from 'react'
import "../styles/home.css";

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';

const Home = () => {
  return <>
  {/*=================HERO SECTION START================= */}
  <section>
  <Container>
    <Row>
      <Col lg='6'>
           <div className='hero_content'>
            <div className='hero_subtitle d-flex align-items-center'>
              <Subtitle subtitle={'Know Before You Go'} />
              <img src={worldImg} alt='' />
            </div>
            <h1>Traveling opens the door to creating 
              <span className="highlight">   memories</span>
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quisquam doloribus porro veniam unde eaque tempore odio, fugiat amet similique, quae modi. Unde voluptatem, harum debitis nobis ipsum laborum provident?</p>
           </div>
      </Col>

      <Col lg='2'> 
        <div className="hero_img-box">
          <img src={heroImg} alt='' />
        </div>
      </Col>

      <Col lg='2'> 
        <div className="hero_img-box mt-4">
          <video src={heroVideo} alt='' controls />
        </div>
      </Col>

      <Col lg='2'> 
        <div className="hero_img-box mt-5">
          <img src={heroImg02} alt='' />
        </div>
      </Col>
      <SearchBar />
    </Row>
  </Container>
  </section>
    {/*=================HERO SECTION END================= */}
  <section>
    <Container>
      <Row>
        <Col lg='3'>
          <h5 className='services_subtitle'> What we Serve </h5>
          <h2 className='services_title'>We offer our best services</h2>
        </Col>
        <ServiceList />
      </Row>
    </Container>
  </section>

  {/*=====================Featured tour section Start======================*/}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={"Explore"} />
            <h2 className='featured_tour-title'>Our Featured tours</h2>
          </Col>
        </Row>
      </Container>
    </section>
  {/*=====================Featured tour section End======================*/}
  </>
}

export default Home