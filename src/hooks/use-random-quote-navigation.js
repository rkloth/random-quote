import { useRandomQuotesStore } from '@stores/random-quotes';

export const useRandomQuoteNavigation = () => {
  const { previous, next, create } = useRandomQuotesStore(state => ({
    previous: state.previous,
    next: state.next,
    create: state.create,
  }));

  const { isCreating } = useRandomQuotesStore(state => state.isCreating);

  return {
    previous,
    next,
    create,
    isCreating,
  };
};
