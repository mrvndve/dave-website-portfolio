import React, { Fragment } from 'react';
import { ContactStyles } from '../../../styled-components';
import {
  EMAIL,
  SOCIAL_MEDIAS
} from '../../../utils';

const ContactSection = () => {
  const {
    Container,
    TitleContainer,
    PreTitle,
    Title,
    Email,
    ImageContainer,
    Image,
    CopyRight
  } = ContactStyles;

  const handleEmailToClick = () => {
    window.location.href = `mailto:${EMAIL}`;
  };

  const handleSocialMediaClick = (link) => {
    window.open(link);
  };

  return <>
    <Container>
      <div data-aos='fade-up' className='row g-5'>
        <div className='col-12'>
          <TitleContainer>
            <div>
              <PreTitle>
                CONTACT ME
              </PreTitle>
            </div>

            <div>
              <Title>
                Got a Project? Lets Talk!
              </Title>
            </div>
          </TitleContainer>
        </div>

        <div className='col-12'>
          <Email onClick={() => handleEmailToClick()}>
            {EMAIL}
          </Email>
        </div>

        <div className='col-12'>
          <ImageContainer>
            {SOCIAL_MEDIAS.map((i, index) => (
              <Fragment key={index}>
                <Image
                  src={`${process.env.PUBLIC_URL}/assets/images/${i.img}`}
                  onClick={() => handleSocialMediaClick(i.link)}
                />
              </Fragment>
            ))}
          </ImageContainer>
        </div>

        <div className='col-12'>
          <CopyRight>
            {`© ${new Date().getFullYear()} Marvin Dave Gajultos, All rights reserved.`}
          </CopyRight>
        </div>
      </div>
    </Container>
  </>;
};

export default ContactSection;