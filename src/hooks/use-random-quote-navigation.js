import { useRandomQuotesStore } from '@stores/random-quotes';

export const useRandomQuoteNavigation = () => {
  const { previous, next, create, select } = useRandomQuotesStore(state => ({
    previous: state.previous,
    next: state.next,
    create: state.create,
    select: state.select,
  }));

  const { isCreating } = useRandomQuotesStore(state => state.isCreating);

  return {
    previous,
    next,
    create,
    select,
    isCreating,
  };
};
