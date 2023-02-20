import { create } from 'zustand';
import Quotable from '@services/quotable';

export const useQuoteStore = create(set => ({
  quotes: [],
  isLoading: false,
  error: null,

  fetchRandomQuote: async (tag = 'love') => {
    set({ isLoading: true });
    try {
      const response = await Quotable.RandomQuote.Load(tag);
      const data = await response.json();

      console.log('in store: received quote', data);

      set(state => ({
        quotes: [...state.quotes, data],
      }));

      return data;
    } catch (error) {
      set({ error });
    } finally {
      set({ isLoading: false });
    }
  },
}));
