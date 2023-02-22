import { useRandomQuotesStore } from '@stores/random-quotes';

import { useQuoteStore } from '@stores/quotes';
import { useImageStore } from '@stores/images';

/* hook for getting the current selected quote and generated image */
export const useCurrentRandomQuote = (index = null) => {
  const randomQuotes = useRandomQuotesStore(state => state.randomQuotes);

  const currentQuotePairIndex = useRandomQuotesStore(
    state => state.selectedIndex
  );

  const quotes = useQuoteStore(state => state.quotes);
  const images = useImageStore(state => state.images);

  if (!randomQuotes.length) {
    return { quote: null, image: null };
  }

  const { quoteId, imageId, artStyle } =
    randomQuotes[index ? index : currentQuotePairIndex];

  return {
    quote: quotes.find(quote => quote._id === quoteId),
    image: images.find(image => image.id === imageId),
    artStyle,
    index: currentQuotePairIndex,
  };
};
