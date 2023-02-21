import '@styles/components/random-quote/backdrop.scss';

import styled, { keyframes } from 'styled-components';

const backdropAnimation = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(5);
  }
  50% {
    transform: translate(50%, -50%) scale(5);
  }
  100% {
    transform: translate(-50%, -50%) scale(5);
  }
`;

const Backdrop = styled.div`
  position: absolute;
  display: block;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(5);

  width: 1024px;
  height: 1520px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${({ image }) => image.data});

  filter: blur(25px);
  opacity: 0.5;

  z-index: 0;
  transition: background-image 0.5s ease-in-out;

  animation-name: ${backdropAnimation};
  animation-duration: 45s;
  animation-iteration-count: infinite;
`;

export default Backdrop;
/*
export default function Backdrop({ image }) {
  return (
    <div className="backdrop-container">
      <div
        className="backdrop"
        style={{
          backgroundImage: image ? `url(${image.data})` : 'rgba(0,0,0,0)',
        }}
      />
    </div>
  );
}
 */
