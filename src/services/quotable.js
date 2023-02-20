const baseURL = 'https://api.quotable.io';

export default {
  RandomQuote: {
    Load: (tag = 'love') => {
      const searchParams = new URLSearchParams({ tags: tag });
      return fetch(`${baseURL}/random?${searchParams.toString()}`);
    },
  },
  Tags: {
    Load: () => fetch(`${baseURL}/tags`),
  },
};
