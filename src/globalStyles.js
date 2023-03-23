import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	font-family: 'Montserrat', sans-serif;
}
`;

export const Container = styled.div`
  margin: 0 auto auto 200px;
  padding: 100px;
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

export const Row = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : '')};
  align-items: ${({ align }) => (align ? align : '')};
  gap: ${({ gap }) => (gap ? gap : '')};
  padding: ${({ padding }) => (padding ? padding : '')};
  margin: ${({ margin }) => (margin ? margin : '')};
  margin-bottom: ${({ mb }) => (mb ? mb : '')};
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
  background: ${({ background }) => (background ? background : '#1635fc')};
  white-space: nowrap;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  outline: none;
  border: 3px solid #1635fd;
  cursor: pointer;
`;

export default GlobalStyle;
