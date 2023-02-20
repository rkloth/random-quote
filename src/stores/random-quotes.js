/* random-quotes store saves the quotes and images
   which are bound by a correlation id.

   it allows the traversal of the random quotes that
   have been received up until the latest generated.
*/

import { create } from 'zustand';
import { sample } from 'lodash';

import { useQuoteStore } from '@stores/quotes';
import { useImageStore } from '@stores/images';
import { useTagStore } from '@stores/tags';

import { ArtStyles } from '@constants/art-styles';

const useRandomQuotesStore = create((set, get) => ({
  randomQuotes: [],
  indexOfCurrent: null,

  isCreating: false,

  setCurrent: indexOfCurrent => {
    set({ indexOfCurrent });
  },

  previous: () => {
    const length = get().randomQuotes.length;
    const indexOfCurrent = get().indexOfCurrent;

    set({ indexOfCurrent: (indexOfCurrent - 1 + length) % length });
  },

  next: () => {
    const length = get().randomQuotes.length;
    const indexOfCurrent = get().indexOfCurrent;

    set({ indexOfCurrent: (indexOfCurrent + 1) % length });
  },

  create: async () => {
    set({ isCreating: true });

    const filteredTags = useTagStore
      .getState()
      .tags.filter(t => t.quoteCount && !t.slug.includes('-quotes'));
    const tag = sample(filteredTags);

    if (!tag) {
      throw new Error('No tags available');
    }

    console.log('tag????', tag, tag.slug);

    console.log('creating random quote with tag', tag.slug);
    const quote = await useQuoteStore.getState().fetchRandomQuote(tag.slug);
    const image = await useImageStore
      .getState()
      .generateImage(
        `the concept of ${tag} in the painting style of ${sample(ArtStyles)}`
      );

    console.log('received quote', quote);
    console.log('received image', image);

    set(state => ({
      randomQuotes: [
        ...state.randomQuotes,
        { quoteId: quote._id, imageId: image.id, tag },
      ],
      indexOfCurrent: state.randomQuotes.length,
      isCreating: false,
    }));
  },
}));

export { useRandomQuotesStore };
