import React from 'react';
import { WorkHistoryStyles } from '../../../styled-components';
import { WORK_HISTORY } from '../../../utils';

const WorkHistorySection = () => {
  const {
    Container,
    TitleContainer,
    PreTitle,
    Title,
    HistoryContainer,
    HistoryDate,
    HistoryTitle,
    HistoryDescription,
    HistoryLine
  } = WorkHistoryStyles;

  return <>
    <Container>
      <div data-aos='fade-up'className='row g-5'>
        <div className='col-12'>
          <TitleContainer>
            <div>
              <PreTitle>
                EXPERIENCES
              </PreTitle>
            </div>

            <div>
              <Title>
                Work History
              </Title>
            </div>
          </TitleContainer>
        </div>

        <div className='col-12'>
          {WORK_HISTORY.map((i, index) => (
            <div key={index}>
              <HistoryContainer>
                <div>
                  <HistoryDate>
                    {i.date}
                  </HistoryDate>
                </div>

                <div>
                  <HistoryTitle>
                    {i.title}
                  </HistoryTitle>
                </div>

                <div>
                  <HistoryDescription>
                    {i.company}
                  </HistoryDescription>
                </div>
              </HistoryContainer>

              {index !== WORK_HISTORY.length - 1 && (
                <div className='d-flex justify-content-center align-items-center'>
                  <HistoryLine />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Container>
  </>;
};

export default WorkHistorySection;