import { useMemo } from 'react';
import { useRandomQuotesStore } from '@stores/random-quotes';

import '@styles/components/ui/cursor.scss';

export const NavigateCursor = ({ indexDelta }) => {
  const randomQuotes = useRandomQuotesStore(state => state.randomQuotes);
  const index = useRandomQuotesStore(state => state.selectedIndex);

  let indexForPreview = useMemo(() => {
    if (indexDelta < 0)
      return (index + indexDelta + randomQuotes.length) % randomQuotes.length;
    else return (index + indexDelta) % randomQuotes.length;
  }, [indexDelta, index, randomQuotes.length]);

  return (
    <div className="quote-preview-cursor">
      <div className="content">
        {indexForPreview + 1 < 10
          ? `0${indexForPreview + 1}`
          : indexForPreview + 1}

        <h2 style={{ fontSize: '1.2em', lineHeight: '0.6em' }}>
          {indexDelta < 0 ? '←' : '→'}
        </h2>
      </div>
    </div>
  );
};
