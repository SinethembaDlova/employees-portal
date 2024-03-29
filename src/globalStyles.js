import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	font-family: 'Montserrat', sans-serif;
  background-color: #ffffffffffff;
}`;

export const Container = styled.div`
  margin: 60px auto auto 180px;
  padding: 50px;
  min-height: calc(100vh - 60px);
  background-color: #f0f2f5;
  @media only screen and (max-width: 600px) {
    margin: 0 auto auto 68px;
    padding: 65px;
  }
`;

export const Heading = styled.h2`
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  margin: ${({ margin }) => (margin ? margin : '')};
  margin-bottom: ${({ mb }) => (mb ? mb : '')};
  margin-top: ${({ mt }) => (mt ? mt : '')};
  color: ${({ inverse }) => (inverse ? '#274064' : '#fff')};
  letter-spacing: 0.1rem;
  line-height: 1.06;
  width: ${({ width }) => (width ? width : '100%')};
`;

export const SubHeading = styled.h3`
  font-size: clamp(0.8rem, 7vw, 1.5rem);
  margin: ${({ margin }) => (margin ? margin : '')};
  margin-bottom: ${({ mb }) => (mb ? mb : '')};
  margin-top: ${({ mt }) => (mt ? mt : '')};
  color: ${({ inverse }) => (inverse ? '#274064' : '#fff')};
  letter-spacing: 0.1rem;
  line-height: 2;
  width: ${({ width }) => (width ? width : '100%')};
`;

export const Row = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : '')};
  align-items: ${({ align }) => (align ? align : '')};
  gap: ${({ gap }) => (gap ? gap : '')};
  padding: ${({ padding }) => (padding ? padding : '')};
  margin: ${({ margin }) => (margin ? margin : '')};
  margin-bottom: ${({ mb }) => (mb ? mb : '30px')};
  position: ${({ position }) => (position ? position : '')};
  width: ${({ width }) => (width ? width : 'auto')};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
  height: ${({ height }) => (height ? height : 'auto')};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
  flex-wrap: ${({ wrap }) => (wrap ? wrap : '')};
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => (justify ? justify : '')};
  align-items: ${({ align }) => (align ? align : '')};
  gap: ${({ gap }) => (gap ? gap : '')};
  padding: ${({ padding }) => (padding ? padding : '')};
  margin: ${({ margin }) => (margin ? margin : '')};
  position: ${({ position }) => (position ? position : '')};
  width: ${({ width }) => (width ? width : 'auto')};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
  height: ${({ height }) => (height ? height : 'auto')};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
`;

export const Button = styled.button`
  border-radius: 5px;
  background: ${({ variant }) =>
    variant === 'primary'
      ? '#1635fc'
      : variant === 'success'
      ? '#00A884'
      : variant === 'danger'
      ? 'red'
      : 'gray'};
  white-space: nowrap;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  outline: none;
  border: ${({ variant }) =>
    variant === 'primary'
      ? '3px solid #1635fc'
      : variant === 'success'
      ? '3px solid #00A884'
      : variant === 'danger'
      ? '3px solid red'
      : '3px solid gray'};
  cursor: pointer;
  margin-bottom: ${({ mb }) => (mb ? mb : '')};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
`;

export default GlobalStyle;
