import config from './../config';

const baseURL = 'http://api.soundcloud.com';

const api = {
  tracks: {
    async searchTracks(term) {
      const url = `${baseURL}/tracks?q=${term}&limit=10&client_id=${config.CLIENT_ID}`;

      const response = await fetch(url);
      const tracks = await response.json();

      return tracks;
    },
  },
};

export default api;
