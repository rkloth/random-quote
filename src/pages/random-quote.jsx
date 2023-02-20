import '@styles/pages/random-quote.scss';

import { useEffect } from 'react';

import Painting from '@components/random-quote/painting';
import Backdrop from '@components/random-quote/backdrop';

import { useCurrentRandomQuote } from '@hooks/use-current-random-quote';
import { useRandomQuoteNavigation } from '@hooks/use-random-quote-navigation';

export default function RandomQuote() {
  const { quote, image } = useCurrentRandomQuote();
  const { create, isCreating, previous, next } = useRandomQuoteNavigation();

  useEffect(() => {
    create();
  }, []);

  const renderImage = () => {
    if (image) {
      return <Painting image={image} />;
    } else {
      return <p>Loading Image..</p>;
    }
  };

  const renderBackdrop = () => {
    if (image) {
      return <Backdrop image={image} />;
    } else {
      return <p>Loading backdrop..</p>;
    }
  };

  const renderQuote = () => {
    if (quote) {
      return <p className="the-quote">{quote.content}</p>;
    } else {
      return <p>Loading Quote..</p>;
    }
  };

  return (
    <div id="random-quote-page">
      {renderBackdrop()}
      {renderImage()}
      <div style={{ position: 'relative', height: '100%', width: '100%' }}>
        {renderQuote()}

        {isCreating && <p>Creating new quote..</p>}
        <button onClick={previous} disabled={isCreating}>
          previous
        </button>
        <button onClick={next} disabled={isCreating}>
          next
        </button>

        <button onClick={create} disabled={isCreating}>
          Create
        </button>
      </div>
    </div>
  );
}
