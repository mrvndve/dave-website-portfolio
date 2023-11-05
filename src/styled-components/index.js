import styled from 'styled-components';
import { SCREENS } from '../utils';

const {
  desktop,
  laptop,
  tablet,
  mobile
} = SCREENS;

const GREY1 = '#55527C';
const GREY2 = '#B4B2C5';
const WHITE = 'white';
const BLACK = 'black';
const RED1 = '#E9322E';
const RED2 = '#fbd6d5';

export const ButtonPrimary = styled.button`
  width: 100%;
  border: none;
  border-radius: 25px ;
  background-color: ${BLACK};
  color: ${WHITE};
  font-family: karla, sans-serif;
  font-size: 18px;
  padding: 15px 20px;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-2px);
  }
`;

export const ButtonSecondary = styled.button`
  width: 100%;
  border: none;
  border-radius: 25px ;
  background-color: ${RED1};
  color: ${WHITE};
  font-family: karla, sans-serif;
  font-size: 18px;
  padding: 15px 20px;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-2px);
  }
`;

export const GoUpButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  transform: translateY(-50%);
  background-color: ${WHITE};
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  font-size: 16px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
`;

export const Card = styled.div`
  background: white;
  border-radius: 25px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 40px;
  height: 350px;
  width: 500px;

  @media ${mobile} {
    height: 500px;
    width: auto;
  }
`;

export const MainPageStyles = {
  Container: styled.div`
    background-color: white;
    height: 100vh;
  `
};

export const BannerSectionStyles = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap-reverse;
    gap: 60px;

    @media ${desktop} {
      padding: 200px;
    }

    @media ${laptop} {
      padding: 150px;
    }

    @media ${tablet} {
      padding: 70px;
    }

    @media ${mobile} {
      padding: 125px 50px 125px 50px;
    }
  `,
  JobTitle: styled.span`
    font-family: karla, sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: ${GREY2};
    opacity: 0.5;

    @media ${mobile} {
      font-size: 14px;
    }
  `,
  Title: styled.span`
    font-family: Poppins, sans-serif;
    font-weight: bold;
    font-size: 60px;
    line-height: 1;

    @media ${mobile} {
      font-size: 40px;
    }
  `,
  ColoredTitle: styled.div`
    color: ${RED1}
  `,
  SubTitle: styled.span`
    font-family: karla, sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: ${GREY1};

    @media ${mobile} {
      font-size: 16px;
    }
  `,
  ImageContainer: styled.div`
    border-radius: 50%;
    overflow: hidden;
    background-color: ${RED2};
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${desktop} {
      width: 450px;
      height: 450px;
    }

    @media ${laptop} {
      width: 450px;
      height: 450px;
    }

    @media ${tablet} {
      width: 400px;
      height: 400px;
    }

    @media ${mobile} {
      width: 250px;
      height: 250px;
    }
  `,
  Image: styled.img`
    width: 100%;
    height: auto;
    display: block;
    margin-right: 5%;
    margin-top: 10%;
  `,
  ButtonContainer: styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: start;
    flex: wrap;
    gap: 20px;
  `
};

export const ServiceSectionStyles = {
  Container: styled.div`
    text-align: center;

    @media ${desktop} {
      padding: 200px;
    }

    @media ${laptop} {
      padding: 150px;
    }

    @media ${tablet} {
      padding: 70px;
    }

    @media ${mobile} {
      padding: 125px 50px 125px 50px;
    }
  `,
  Title: styled.span`
    font-family: Poppins, sans-serif;
    font-weight: bold;
    font-size: 60px;
    letter-spacing: -.05em;

    @media ${mobile} {
      font-size: 40px;
    }
  `,
  SubTitle: styled.span`
    font-family: karla, sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: ${GREY1};

    @media ${mobile} {
      font-size: 16px;
    }
  `,
  CardContainer: styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
  `,
  Card: styled.div`
    border-radius: 25px;

    text-align: center;
    height: auto;
    width: 450px;

    @media ${laptop} {
      width: 300px;
      height: auto;
    }

    @media ${tablet} {
      width: auto;
      height: auto;
    }

    @media ${mobile} {
      text-align: center;
      height: auto;
      width: auto;
    }
  `,
  CardTitle: styled.span`
    font-family: karla, sans-serif;
    font-size: 24px;
    font-weight: bold;

    @media ${mobile} {
      font-size: 22px;
    }
  `,
  CardDescription: styled.span`
    font-family: karla, sans-serif;
    font-size: 18px;
    line-height: 1.75rem;

    @media ${mobile} {
      font-size: 16px;
    }
  `
};

export const WorkHistoryStyles = {
  Container: styled.div`
    background-color: ${BLACK};
    @media ${desktop} {
      padding: 200px;
    }

    @media ${laptop} {
      padding: 150px;
    }

    @media ${tablet} {
      padding: 70px;
    }

    @media ${mobile} {
      padding: 125px 50px 125px 50px;
    }
  `,
  TitleContainer: styled.div`
    text-align: center;
  `,
  PreTitle: styled.span`
    color: ${GREY2};
    font-family: Karla, sans-serif;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: .1em;

    @media ${mobile} {
      font-size: 14px;
    }
  `,
  Title: styled.h3`
    color: ${WHITE};
    font-family: Poppins, sans-serif;
    font-weight: bold;
    font-size: 60px;
    letter-spacing: -.05em;

    @media ${mobile} {
      font-size: 40px;
    }
  `,
  HistoryContainer: styled.div`
    text-align: center;
    padding: 32px;
    height: auto;
    width: auto;
  `,
  HistoryDate: styled.span`
    color: ${RED1};
    font-family: Karla, sans-serif;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: .1em;

    @media ${mobile} {
      font-size: 16px;
    }
  `,
  HistoryTitle: styled.span`
    color: ${WHITE};
    font-family: Karla, sans-serif;
    font-size: 36px;
    font-weight: bold;
    line-height: 2.5rem;

    @media ${mobile} {
      font-size: 30px;
    }
  `,
  HistoryDescription: styled.span`
    color: ${WHITE};
    font-family: Karla, sans-serif;
    font-size: 18px;
    line-height: 1.75rem;

    @media ${mobile} {
      font-size: 16px;
    }
  `,
  HistoryLine: styled.hr`
    display: flex;
    justify-content: center;

    border: none;
    border-left: 2px solid ${RED1};
    height: 50px;
    position: relative;
    margin: 0 auto;

    &::before, &::after {
      content: '';
      width: 10px; /* Adjust the size of the dots */
      height: 10px;
      background-color: ${RED1}; /* Change the dot color as needed */
      border-radius: 50%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    &::before {
      top: -5px; /* Adjust the distance of the top dot from the line */
    }

    &::after {
      bottom: -5px; /* Adjust the distance of the bottom dot from the line */
    }
  `
  // BlobRect: styled.div`
  //   background-color: #fbd6d5;
  //   border-top-right-radius: 3.5rem;
  //   border-bottom-right-radius: 3.5rem;
  //   position: absolute;
  //   top: 1%; /* Adjust this value to position it further up */
  //   left: 0;
  //   width: 60%; /* Adjust this value to make it narrower */
  //   padding-top: 30rem;
  //   z-index: -1;
  // `
};

export const SkillsSectionStyles = {
  Container: styled.div`
    @media ${desktop} {
      padding: 200px;
    }

    @media ${laptop} {
      padding: 150px;
    }

    @media ${tablet} {
      padding: 70px;
    }

    @media ${mobile} {
      padding: 125px 50px 125px 50px;
    }
  `,
  TitleContainer: styled.div`
    text-align: center;
  `,
  PreTitle: styled.span`
    color: ${GREY2};
    font-family: Karla, sans-serif;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: .1em;

    @media ${mobile} {
      font-size: 14px;
    }
  `,
  Title: styled.h3`
    font-family: Poppins, sans-serif;
    font-weight: bold;
    font-size: 60px;
    letter-spacing: -.05em;

    @media ${mobile} {
      font-size: 40px;
    }
  `,
  ImageContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
  `,
  Image: styled.img`
    width: 60px;
    height: 60px;

    @media ${mobile} {
      width: 50px;
      height: 50px;
    }
  `
};

export const ProjectsStyles = {
  Container: styled.div`
    text-align: left;

    @media ${desktop} {
      padding: 200px;
    }

    @media ${laptop} {
      padding: 150px;
    }

    @media ${tablet} {
      padding: 70px;
    }

    @media ${mobile} {
      padding: 125px 50px 125px 50px;
    }
  `,
  TitleContainer: styled.div`
    text-align: left;

    @media ${tablet} {
      text-align: center;
    }

    @media ${mobile} {
      text-align: center;
    }
  `,
  PreTitle: styled.span`
    color: ${GREY2};
    font-family: Karla, sans-serif;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: .1em;

    @media ${mobile} {
      font-size: 14px;
    }
  `,
  Title: styled.h3`
    font-family: Poppins, sans-serif;
    font-weight: bold;
    font-size: 60px;
    letter-spacing: -.05em;

    @media ${mobile} {
      font-size: 40px;
    }
  `,
  Card: styled.div`
    cursor: pointer;
    text-align: left;
    transition: transform 0.2s;
    &:hover {
      transform: translateY(-10px);
    }
  `,
  CardPreTitle: styled.span`
    color: ${RED1};
    font-family: Karla, sans-serif;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: .1em;

    @media ${mobile} {
      font-size: 16px;
    }
  `,
  CardTitle: styled.span`
    font-family: Karla, sans-serif;
    font-size: 24px;
    font-weight: bold;
    line-height: 2.5rem;

    @media ${mobile} {
      font-size: 20px;
    }
  `,
  CardDescription: styled.span`
    font-family: Karla, sans-serif;
    font-size: 18px;
    line-height: 1.75rem;

    @media ${mobile} {
      font-size: 16px;
    }
  `
};

export const ContactStyles = {
  Container: styled.div`
    text-align: center;

    @media ${desktop} {
      padding: 200px;
    }

    @media ${laptop} {
      padding: 150px;
    }

    @media ${tablet} {
      padding: 70px;
    }

    @media ${mobile} {
      padding: 125px 50px 125px 50px;
    }
  `,
  TitleContainer: styled.div`
    text-align: center;

    @media ${tablet} {
      text-align: center;
    }

    @media ${mobile} {
      text-align: center;
    }
  `,
  PreTitle: styled.span`
    color: ${GREY2};
    font-family: Karla, sans-serif;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: .1em;

    @media ${mobile} {
      font-size: 14px;
    }
  `,
  Title: styled.h3`
    font-family: Poppins, sans-serif;
    font-weight: bold;
    font-size: 60px;
    letter-spacing: -.05em;

    @media ${mobile} {
      font-size: 40px;
    }
  `,
  Email: styled.h3`
    word-break: break-all;
    cursor: pointer;
    color: ${GREY2};
    font-family: Karla, sans-serif;
    font-weight: bold;
    font-size: 30px;
    transition: transform 0.2s;

    &:hover {
      text-decoration: underline;
      transform: translateY(-2px);
    }

    @media ${mobile} {
      font-size: 25px;
    }
  `,
  ImageContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
  `,
  Image: styled.img`
    width: 60px;
    height: 60px;
    transition: transform 0.2s;

    &:hover {
      cursor: pointer;
      transform: translateY(-2px);
    }

    @media ${mobile} {
      width: 50px;
      height: 50px;
      transform: translateY(-2px);
    }
  `,
  CopyRight: styled.h3`
    cursor: pointer;
    color: ${GREY2};
    font-family: Karla, sans-serif;
    font-weight: bold;
    font-size: 16px;

    @media ${mobile} {
      font-size: 14px;
    }
  `
};