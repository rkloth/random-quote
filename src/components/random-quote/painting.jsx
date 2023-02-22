import '@styles/components/random-quote/painting.scss';

export const Painting = ({ image, width = 375 }) => {
  return (
    <div
      className="painting"
      style={{
        maxWidth: `${width}px`,
        minWidth: `${width}px`,
        backgroundImage: `url(${image.data})`,
      }}
    />
  );
};
