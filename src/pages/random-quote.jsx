import '@styles/pages/random-quote.scss';

import { useEffect } from 'react';

import Painting from '@components/random-quote/painting';
import Backdrop from '@components/random-quote/backdrop';

import { useCurrentRandomQuote } from '@hooks/use-current-random-quote';
import { useRandomQuoteNavigation } from '@hooks/use-random-quote-navigation';

export default function RandomQuote() {
  const { quote, image, index } = useCurrentRandomQuote();
  const { create, isCreating, previous, next } = useRandomQuoteNavigation();

  useEffect(() => {
    create();
  }, []);

  return (
    <div id="random-quote-page">
      {image && <Backdrop image={image} />}

      <div className="random-quote-content">
        <p className="index">{index + 1 < 10 ? `0${index + 1}` : index + 1}</p>

        {image && <Painting image={image} />}
        <div className="quote">
          {quote && <p className="the-quote">{quote.content}</p>}
          {quote && <p className="the-author">{quote.author}</p>}
        </div>
      </div>

      <div className="random-quote-footer">
        <div>
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
    </div>
  );
}
