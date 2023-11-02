import React from 'react';
import { MainPageStyles } from '../../styled-components';

import BannerSection from './sections/banner';
import ServicesSection from './sections/services';
import SkillSection from './sections/skills';
import WorkHistorySection from './sections/work-history';

const MainPage = () => {
  const { Container } = MainPageStyles;

  return <>
    <Container>
      <BannerSection/>

      <ServicesSection/>

      <SkillSection/>

      <WorkHistorySection/>
    </Container>
  </>;
};

export default MainPage;