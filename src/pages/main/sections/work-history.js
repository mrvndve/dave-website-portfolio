import React from 'react';
import { WorkHistoryStyles } from '../../../styled-components';

const WorkHistorySection = () => {
  const { Container, Title } = WorkHistoryStyles;

  return <>
    <Container>
      <div className='mb-5'>
        <Title>
          Work History
        </Title>
      </div>
    </Container>
  </>;
};

export default WorkHistorySection;