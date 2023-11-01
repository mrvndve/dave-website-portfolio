import React, { Fragment } from 'react';
import { ServiceSectionStyles } from '../../../styled-components';
import { SERVICES } from '../../../utils';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Services = () => {
  const {
    Container,
    Title,
    CardContainer,
    Card,
    CardTitle,
    CardSubTitle
  } = ServiceSectionStyles;

  return <>
    <Container>
      <div className='mb-5'>
        <Title>
          My Services
        </Title>
      </div>

      <div>
        <CardContainer>
          {SERVICES.map((i, index) => (
            <Fragment key={index}>
              <Card>
                <div className='mb-4'>
                  <FontAwesomeIcon className='mx-3' icon={faCode} size='xl'/>

                  <CardTitle>
                    {i.title}
                  </CardTitle>
                </div>

                <div>
                  <CardSubTitle>
                    {i.subTitle}
                  </CardSubTitle>
                </div>
              </Card>
            </Fragment>
          ))}
        </CardContainer>
      </div>
    </Container>
  </>;
};

export default Services;