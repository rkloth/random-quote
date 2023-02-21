import styled from 'styled-components';
import Painting from '@components/random-quote/painting';

import { useRandomQuotes } from '@hooks/use-random-quotes';
import { useRandomQuoteNavigation } from '@hooks/use-random-quote-navigation';

export default () => {
  const { randomQuotes, selectedIndex } = useRandomQuotes();
  const { select } = useRandomQuoteNavigation();

  const renderGalleryItems = () => {
    return randomQuotes.map(({ quote, image }, index) => {
      const isSelected = selectedIndex === index;

      return (
        <GalleryItem
          onClick={() => select(index)}
          key={index}
          className={isSelected && 'selected'}
        >
          <Painting image={image} width={45} diffused={!isSelected} />
          <IndexText className={isSelected && 'selected'}>
            {index + 1 < 10 ? `0${index + 1}` : index + 1}
          </IndexText>
        </GalleryItem>
      );
    });
  };

  return <Gallery>{renderGalleryItems()}</Gallery>;
};

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
`;

const GalleryItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  opacity: 0.65;
  filter: saturate(0.2);
  mix-blend-mode: overlay;

  &.selected {
    opacity: 1;
    filter: saturate(1);
    mix-blend-mode: normal;
  }

  transition: all 0.5s var(--bezier);
`;

const IndexText = styled.p`
  font-family: var(--space-grotesk);
  font-weight: 400;
  font-size: 0.65em;
  color: rgba(255, 255, 255, 0.5);

  &.selected {
    color: white;
  }
`;
