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
    gap: 50px;

    @media ${desktop} {
      padding: 200px;
    }

    @media ${laptop} {
      padding: 200px;
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
    background-color: rgba(${parseInt(PALLETES['light'].secondary.slice(1, 3), 16)}, ${parseInt(PALLETES['light'].secondary.slice(3, 5), 16)}, ${parseInt(PALLETES['light'].secondary.slice(5, 7), 16)}, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${desktop} {
      width: 500px;
      height: 500px;
    }

    @media ${laptop} {
      width: 450px;
      height: 450px;
    }

    @media ${tablet} {
      width: 300px;
      height: 300px;
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