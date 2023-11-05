import React from 'react';
import { EMAIL } from '../../../utils';
import {
  BannerSectionStyles,
  ButtonPrimary,
  ButtonSecondary
} from '../../../styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';

const BannerSection = () => {
  const {
    Container,
    JobTitle,
    Title,
    ColoredTitle,
    SubTitle,
    ImageContainer,
    Image,
    ButtonContainer
  } = BannerSectionStyles;

  const handleEmailToClick = () => {
    window.location.href = `mailto:${EMAIL}`;
  };

  const handleDownloadCVClick = () => {
    const PDFNAME = 'Marvin Dave Gajultos CV.pdf';
    const URL = `${process.env.PUBLIC_URL}/assets/cv.pdf`;

    const link = document.createElement('a');
    link.href = URL;
    link.download = PDFNAME;
    link.click();
  };

  return <>
    <Container>
      <div data-aos='fade-up'>
        <div className='mb-2'>
          <FontAwesomeIcon icon={faCrosshairs} size='xs'/>
          <JobTitle>
            &nbsp; Fullstack Web Developer
          </JobTitle>
        </div>

        <Title>
          I Build Custom
          <ColoredTitle>Website Solutions</ColoredTitle>
          <div>That Help Your</div>
          <ColoredTitle>Business Grow</ColoredTitle>
        </Title>

        <SubTitle>
          {'I will help you to develop a website for your business in every possible way.'}
        </SubTitle>

        <ButtonContainer>
          <ButtonPrimary onClick={() => handleDownloadCVClick()}>
            Download CV
          </ButtonPrimary>

          <ButtonSecondary onClick={() => handleEmailToClick()}>
            Start a Project
          </ButtonSecondary>
        </ButtonContainer>
      </div>

      <div data-aos='fade-left'>
        <ImageContainer>
          <Image src={`${process.env.PUBLIC_URL}/assets/images/profile.png`}/>
        </ImageContainer>
      </div>
    </Container>
  </>;
};

export default BannerSection;