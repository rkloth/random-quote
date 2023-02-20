import { create } from 'zustand';
import DeepAI from '@services/deepai';
import { getBase64FromURL } from '@utils/image';

export const useImageStore = create(set => ({
  images: [],
  isLoading: false,
  error: null,

  generateImage: async text => {
    set({ isLoading: true });
    try {
      console.log('generating image in store', text);

      const { id, output_url } = await DeepAI.GenerateImage.Start(text);
      const extension = output_url.split('.').pop();

      const data = await getBase64FromURL(output_url);
      const image = { id, data, extension };
      console.log('received generated image in store', image);

      set(state => ({
        images: [...state.images, image],
      }));

      return image;
    } catch (error) {
      set({ error });
    } finally {
      set({ isLoading: false });
    }
  },
}));
