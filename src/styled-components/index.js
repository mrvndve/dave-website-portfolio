import styled from 'styled-components';
import {
  PALLETES,
  SCREENS
} from '../utils';

const {
  desktop,
  laptop,
  tablet,
  mobile
} = SCREENS;

export const ButtonPrimary = styled.button`
  border: none;
  border-radius: 25px ;
  background-color: ${PALLETES['light'].button.primary.bg};
  color: ${PALLETES['light'].button.primary.txt};
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
  border: none;
  border-radius: 25px ;
  background-color: ${PALLETES['light'].button.secondary.bg};
  color: ${PALLETES['light'].button.secondary.txt};
  font-family: karla, sans-serif;
  font-size: 18px;
  padding: 15px 20px;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-2px);
  }
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

export const AbstractStyles = styled.div`
  
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
      padding: 50px;
    }
  `,
  JobTitle: styled.span`
    font-family: karla, sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: ${PALLETES['light'].tertiary};
    opacity: 0.5;
  `,
  Title: styled.span`
    font-family: Poppins, sans-serif;
    font-weight: bold;
    font-size: 60px;
    line-height: 1;
  `,
  ColoredTitle: styled.div`
    color: ${PALLETES['light'].secondary}
  `,
  SubTitle: styled.span`
    font-family: karla, sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: ${PALLETES['light'].tertiary};
  `,
  ImageContainer: styled.div`
    border-radius: 50%;
    overflow: hidden;
    background-color: #fbd6d5;
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
      width: 300px;
      height: 300px;
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
      padding: 50px;
    }
  `,
  Title: styled.span`
    font-family: Poppins, sans-serif;
    font-weight: bold;
    font-size: 60px;
  `,
  SubTitle: styled.span`
    font-family: karla, sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: ${PALLETES['light'].tertiary};
  `,
  CardContainer: styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
  `,
  Card: styled.div`
    text-align: left;
    padding: 40px;
    height: 350px;
    width: 500px;

    &:hover {
      background: white;
      border-radius: 25px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    @media ${mobile} {
      height: 500px;
      width: auto;
    }
  `,
  CardTitle: styled.span`
    font-family: karla, sans-serif;
    font-size: 24px;
    font-weight: bold;
  `,
  CardSubTitle: styled.span`
    font-family: karla, sans-serif;
    font-size: 18px;
    color: ${PALLETES['light'].tertiary};
  `
};

export const SkillsSectionStyles = {
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
      padding: 50px;
    }
  `,
  Title: styled.span`
    font-family: Poppins, sans-serif;
    font-weight: bold;
    font-size: 60px;
  `,
  ImageContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
  `,
  Image: styled.img`
    width: 100px;
    height: 100px;
  `,
  ImageTitle: styled.span`
    font-family: karla, sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: ${PALLETES['light'].tertiary};
  `
};

export const WorkHistoryStyles = {
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
      padding: 50px;
    }
  `,
  Title: styled.span`
    font-family: Poppins, sans-serif;
    font-weight: bold;
    font-size: 60px;
  `
};