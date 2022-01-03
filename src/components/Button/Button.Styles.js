import styled from 'styled-components';

export const Wrapper = styled.button`
  display: block;
  background: var(--blue);
  padding: 16px 32px;
  height: 60px;
  border-radius: 8px;
  color: var(--white);
  border: none;
  font-size: var(--fontBig);
  margin: 20px auto;
  cursor: pointer;
  transition: all 0.3s;
  outline: none;

  :hover {
    opacity: 0.8;
  }
`;
