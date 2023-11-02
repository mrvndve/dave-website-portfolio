import React, { Fragment } from 'react';
import { SkillsSectionStyles } from '../../../styled-components';
import { SKILLS } from '../../../utils';

const SkillSection = () => {
  const {
    Container,
    Title,
    ImageContainer,
    Image
  } = SkillsSectionStyles;

  return <>
    <Container>
      <div className='mb-5'>
        <Title>
          Skills
        </Title>
      </div>

      <div>
        <ImageContainer>
          {SKILLS.map((i, index) => (
            <Fragment key={index}>
              <Image src={`${process.env.PUBLIC_URL}/assets/images/${i.img}`}/>
            </Fragment>
          ))}
        </ImageContainer>
      </div>
    </Container>
  </>;
};

export default SkillSection;