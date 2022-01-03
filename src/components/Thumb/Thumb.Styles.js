import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 6px;
  animation: animateThumb 0.5s;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Title = styled.h1`
  font-size: var(--fontSmall);
`;
export const Year = styled.p`
  font-size: var(--fontSmall);
  color: var(--medGray);
  margin-top: -8px;
`;
