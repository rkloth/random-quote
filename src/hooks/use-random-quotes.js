import { useRandomQuotesStore } from '@stores/random-quotes';

import { useQuoteStore } from '@stores/quotes';
import { useImageStore } from '@stores/images';

/* hook for getting the current selected quote and generated image */
export const useRandomQuotes = () => {
  const generatedQuotePairs = useRandomQuotesStore(state => state.randomQuotes);
  const selectedIndex = useRandomQuotesStore(state => state.selectedIndex);

  const quotes = useQuoteStore(state => state.quotes);
  const images = useImageStore(state => state.images);

  const randomQuotes = generatedQuotePairs.reduce((acc, pair) => {
    const quote = quotes.find(q => q._id === pair.quoteId);
    const image = images.find(i => i.id === pair.imageId);

    if (quote && image) {
      acc.push({ quote, image });
    }

    return acc;
  }, []);

  return {
    randomQuotes,
    selectedIndex,
  };
};
