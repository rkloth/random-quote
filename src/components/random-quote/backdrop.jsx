import '@styles/components/random-quote/backdrop.scss';

export const Backdrop = ({ image }) => {
  return (
    <div
      className="backdrop"
      style={{ backgroundImage: `url(${image.data})` }}
    />
  );
};
