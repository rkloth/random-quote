import Quotable from '@services/quotable';
import { create } from 'zustand';

const useTagStore = create(set => ({
  tags: [],
  isLoading: false,
  error: null,

  fetchTags: async () => {
    set({ isLoading: true });
    try {
      const response = await Quotable.Tags.Load();
      const tags = await response.json();

      console.log('tags received', tags);

      set({ tags });
    } catch (error) {
      set({ error });
    } finally {
      set({ isLoading: false });
    }
  },
}));

/*
 * Tags which have "-quotes" in them are not useful, since the AI image
 * generator will not be able to create a meaningful image for them.
 *
 * For example: the tag "love-quotes", "power-quotes", "life-quotes", etc.
 * Rather, tags such as "architecture", "war", and "love" are preferable.
 */
const useFilteredTags = () =>
  useTagStore(state => ({
    tags: state.tags.filter(tag => !tag.slug.includes('-quotes')),
  }));

const useTagsLoader = () =>
  useTagStore(state => ({
    isTagsLoaded: state.tags.length > 0,
    fetchTags: state.fetchTags,
  }));

export { useTagStore, useFilteredTags, useTagsLoader };
