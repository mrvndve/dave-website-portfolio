import React from 'react';
import { MainPageStyles } from '../../styled-components';

import BannerSection from './sections/banner';

const MainPage = () => {
  const { Container } = MainPageStyles;

  return <>
    <Container>
      <BannerSection/>
    </Container>
  </>;
};

export default MainPage;