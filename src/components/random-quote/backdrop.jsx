import '@styles/components/random-quote/backdrop.scss';

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
