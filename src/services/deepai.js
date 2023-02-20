export default {
  GenerateImage: {
    Start: text => {
      console.log('calling deep ai with', text);

      const form = new FormData();
      form.append('text', text);
      form.append('width', '512');
      form.append('height', '768');
      form.append('grid_size', '1');

      return fetch('https://api.deepai.org/api/stable-diffusion', {
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
