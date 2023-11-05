import React, { Fragment } from 'react';
import { SkillsSectionStyles } from '../../../styled-components';
import { SKILLS } from '../../../utils';

const SkillSection = () => {
  const {
    Container,
    TitleContainer,
    PreTitle,
    Title,
    ImageContainer,
    Image
  } = SkillsSectionStyles;

  return <>
    <Container>
      <div className='row g-5'>
        <div data-aos='fade-up' className='col-12'>
          <TitleContainer>
            <div>
              <PreTitle>
                EXPERTISE
              </PreTitle>
            </div>

            <div className='mb-3'>
              <Title>
                My Tech Stacks
              </Title>
            </div>
          </TitleContainer>
        </div>

        <div data-aos='fade-up' className='col-12'>
          <ImageContainer>
            {SKILLS.map((i, index) => (
              <Fragment key={index}>
                <Image src={`${process.env.PUBLIC_URL}/assets/images/${i.img}`}/>
              </Fragment>
            ))}
          </ImageContainer>
        </div>
      </div>
    </Container>
  </>;
};

export default SkillSection;