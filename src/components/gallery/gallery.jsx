import { useRandomQuotes } from '@hooks/use-random-quotes';
import { useRandomQuoteNavigation } from '@hooks/use-random-quote-navigation';

import '@styles/components/gallery/gallery.scss';

export default () => {
  const { randomQuotes, selectedIndex } = useRandomQuotes();
  const { select } = useRandomQuoteNavigation();

  const renderGalleryItems = () => {
    return randomQuotes.map(({ image }, index) => {
      const isSelected = selectedIndex === index;

      return (
        <div className="gallery-item-container" key={`gallery-item-${index}`}>
          <p className={`gallery-item-index ${isSelected && 'selected'}`}>
            {index + 1 < 10 ? `0${index + 1}` : index + 1}
          </p>
          <div
            className={`gallery-item ${isSelected && 'selected'}`}
            onClick={() => select(index)}
            key={index}
            style={{
              backgroundImage: `url(${image.data})`,
            }}
          ></div>
        </div>
      );
    });
  };

  return <div className="gallery">{renderGalleryItems()}</div>;
};
