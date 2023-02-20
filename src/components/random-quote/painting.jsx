import '@styles/components/random-quote/painting.scss';

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
