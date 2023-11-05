import React, { Fragment } from 'react';
import { ServiceSectionStyles } from '../../../styled-components';
import { SERVICES } from '../../../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServicesSection = () => {
  const {
    Container,
    Title,
    CardContainer,
    Card,
    CardTitle,
    CardDescription
  } = ServiceSectionStyles;

  return <>
    <Container>
      <div data-aos='fade-up' className='mb-5'>
        <Title>
          Offered Services
        </Title>
      </div>

      <div data-aos='fade-up'>
        <CardContainer>
          {SERVICES.map((i, index) => (
            <Fragment key={index}>
              <Card>
                <div className='mb-4'>
                  <div className='mb-3'>
                    <FontAwesomeIcon className='mx-3' icon={i.icon} size='3x' color='#E9322E'/>
                  </div>

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
            </Fragment>
          ))}
        </CardContainer>
      </div>
    </Container>
  </>;
};

export default ServicesSection;