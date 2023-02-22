export default {
  GenerateImage: {
    Start: text => {
      const form = new FormData();
      form.append('text', text);
      form.append('width', '512');
      form.append('height', '768');
      form.append('grid_size', '1');

      return fetch(`${import.meta.env.VITE_DEEPAI_BASE_URL}/stable-diffusion`, {
        method: 'POST',
        headers: {
          'Api-Key': import.meta.env.VITE_DEEPAI_API_KEY,
          'client-library': 'deepai-js-client',
        },
        body: form,
      });
    },
  },
};
