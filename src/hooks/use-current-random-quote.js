import { useRandomQuotesStore } from '@stores/random-quotes';

import { useQuoteStore } from '@stores/quotes';
import { useImageStore } from '@stores/images';

/* hook for getting the current selected quote and generated image */
export const useCurrentRandomQuote = () => {
  const randomQuotes = useRandomQuotesStore(state => state.randomQuotes);

  const currentQuotePairIndex = useRandomQuotesStore(
    state => state.indexOfCurrent
  );

  const quotes = useQuoteStore(state => state.quotes);
  const images = useImageStore(state => state.images);

  if (!randomQuotes.length) {
    return { quote: null, image: null };
  }

  const { quoteId, imageId } = randomQuotes[currentQuotePairIndex];

  return {
    quote: quotes.find(quote => quote._id === quoteId),
    image: images.find(image => image.id === imageId),
  };
};
