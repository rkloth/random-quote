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

      set({ tags });
      return tags;
    } catch (error) {
      set({ error });
    } finally {
      set({ isLoading: false });
    }
  },
}));

const useTagsLoader = () =>
  useTagStore(state => ({
    isTagsLoaded: state.tags.length > 0,
    fetchTags: state.fetchTags,
  }));

export { useTagStore, useTagsLoader };
