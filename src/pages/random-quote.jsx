import '@styles/pages/random-quote.scss';

import { useEffect } from 'react';

import { Painting } from '@components/random-quote/painting';
import { Backdrop } from '@components/random-quote/backdrop';
import Gallery from '@components/gallery/gallery';

import { useCurrentRandomQuote } from '@hooks/use-current-random-quote';
import { useRandomQuotesStore } from '@stores/random-quotes';
import { useMousePosition } from '@hooks/use-mouse-position';

import { useCursorStore } from '@stores/cursor';
import { CursorModes } from '@constants/cursor';

export default function RandomQuote() {
  const { quote, image, index, artStyle } = useCurrentRandomQuote();

  const create = useRandomQuotesStore(state => state.create);
  const isCreating = useRandomQuotesStore(state => state.isCreating);

  const mousePosition = useMousePosition();
  const setCursorMode = useCursorStore(state => state.setCursorMode);

  useEffect(() => {
    create();
  }, []);

  useEffect(() => {
    const height = window.innerHeight;
    const width = window.innerWidth;

    if (mousePosition.y > (height / 4) * 3 || mousePosition.y < height / 4) {
      setCursorMode(CursorModes.Default);
      return;
    }

    if (mousePosition.x < width / 3) {
      setCursorMode(CursorModes.Previous);
    } else if (mousePosition.x > (width / 3) * 2) {
      setCursorMode(CursorModes.Next);
    } else {
      setCursorMode(CursorModes.Default);
    }
  }, [mousePosition.x, mousePosition.y]);

  return (
    <div id="random-quote-page">
      {image && <Backdrop image={image} />}

      <div />
      <div className="random-quote-content">
        <h1 className="mr-4">{index + 1 < 10 ? `0${index + 1}` : index + 1}</h1>

        {image && <Painting image={image} width={350} />}

        {quote && (
          <div className="quote ml-4">
            <p className="mb-2">{quote.author}</p>
            <h2 style={{ maxWidth: '720px' }}>{quote.content}</h2>
            <p className="mt-2">{quote.tags.join(', ')}</p>
          </div>
        )}

        <p className="art-style ml-4">{artStyle}</p>
      </div>

      <div className="random-quote-footer">
        <Gallery />
        <button onClick={create} disabled={isCreating}>
          {isCreating ? <p>Creating...</p> : <p>Create new Quote</p>}
        </button>
      </div>
    </div>
  );
}
