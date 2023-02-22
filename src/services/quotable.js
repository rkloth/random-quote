const baseURL = import.meta.env.VITE_QUOTABLE_BASE_URL;

export default {
  RandomQuote: {
    Load: (tag = 'love') => {
      const searchParams = new URLSearchParams({ tags: tag });
      return fetch(`${baseURL}/random?${searchParams}`);
    },
  },
  Tags: {
    Load: () => fetch(`${baseURL}/tags`),
  },
};
