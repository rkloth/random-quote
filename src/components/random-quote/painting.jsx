/* import '@styles/components/random-quote/painting.scss';
 */
import styled from 'styled-components';

const Painting = styled.div`
  position: relative;
  display: block;

  min-width: ${props => props.width}px;
  max-width: ${props => props.width}px;
  aspect-ratio: 512 / 768;

  border-radius: 3px;

  background-color: dodgerblue;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${({ image }) => image.data});

  transition: background-image 0.5s ease-in-out;
`;

Painting.defaultProps = {
  width: 409.6,
  image: {
    data: 'rgba(0,0,0,0)',
  },
};

export default Painting;
/*
export default function Painting({ image }) {
  return (
    <div
      className="painting"
      style={{
        backgroundImage: image ? `url(${image.data})` : 'rgba(0,0,0,0)',
      }}
    />
  );
}
 */
