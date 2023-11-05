import React, {
  useState,
  useEffect
} from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

import {
  MainPageStyles,
  GoUpButton
} from '../../styled-components';

import BannerSection from './sections/banner';
import ServicesSection from './sections/services';
import WorkHistorySection from './sections/work-history';
import SkillSection from './sections/skills';
import ProjectsSection from './sections/projects';
import ContactSection from './sections/contact';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const MainPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { Container } = MainPageStyles;

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
      once: false
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return <>
    <Container>
      <BannerSection/>

      <ServicesSection/>

      <SkillSection/>

      <ProjectsSection/>

      <WorkHistorySection/>

      <ContactSection/>

      <div style={{ display: isVisible ? 'block' : 'none' }}>
        <GoUpButton onClick={() => scrollToTop()}>
          <FontAwesomeIcon icon={faArrowUp} color='black'/>
        </GoUpButton>
      </div>
    </Container>
  </>;
};

export default MainPage;