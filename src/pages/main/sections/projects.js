import React, { Fragment } from 'react';
import { ProjectsStyles } from '../../../styled-components';
import { PORTFOLIO } from '../../../utils';

const ProjectsSection = () =>{
  const {
    Container,
    TitleContainer,
    PreTitle,
    Title,
    Card,
    CardPreTitle,
    CardTitle,
    CardDescription
  } = ProjectsStyles;

  const handleClickProject = (links) => {
    links.map(link => window.open(link));
  };

  return <>
    <Container>
      <div data-aos='fade-up' className='row g-5'>
        <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
          <TitleContainer>
            <div>
              <PreTitle>
                PORTFOLIO
              </PreTitle>
            </div>

            <div>
              <Title>
                Recent Works
              </Title>
            </div>
          </TitleContainer>
        </div>

        <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
          <div className='row g-5'>
            {PORTFOLIO.map((i, index) => (
              <Fragment key={index}>
                <div className='col-12'>
                  <Card onClick={() => handleClickProject(i.links)}>
                    <div>
                      <CardPreTitle>
                        • {`Project ${index + 1}`}
                      </CardPreTitle>
                    </div>

                    <div>
                      <CardTitle>
                        {i.title}
                      </CardTitle>
                    </div>

                    <div>
                      <CardDescription>
                        {i.description}
                      </CardDescription>
                    </div>
                  </Card>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </Container>
  </>;
};

export default ProjectsSection;