import deepai from 'deepai';

deepai.setApiKey(import.meta.env.VITE_DEEPAI_API_KEY);

export default {
  GenerateImage: {
    Start: text => {
      console.log('text', text);
      console.log('api key', import.meta.env.VITE_DEEPAI_API_KEY);
      if (import.meta.env.VITE_USE_DEEPAI == 'true') {
        console.log('calling stable diffusion api', text);

        return deepai.callStandardApi('stable-diffusion', {
          text,
          width: '512',
          height: '768',
          grid_size: '1',
        });
      } else {
        return false;
      }
    },
  },
};
