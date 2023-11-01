import React from 'react';
import { MainPageStyles } from '../../styled-components';

import BannerSection from './sections/banner';
import Services from './sections/services';

const MainPage = () => {
  const { Container } = MainPageStyles;

  return <>
    <Container>
      <BannerSection/>

      <Services/>
    </Container>
  </>;
};

export default MainPage;