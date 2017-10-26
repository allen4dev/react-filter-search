import config from './../config';

const baseURL = 'http://api.soundcloud.com';

const api = {
  tracks: {
    async searchTracks(term) {
      const url = `${baseURL}/tracks?q=${term}&limit=10&linked_partitioning=1&client_id=${config.CLIENT_ID}`;
      const response = await fetch(url);
      const results = await response.json();

      return results;
    },

    async searchNextPage(url) {
      const response = await fetch(url);
      const results = await response.json();

      return results;
    },
  },
  playlists: {
    async searchPlaylists(term) {
      const url = `${baseURL}/playlists?q=${term}&limit=10&linked_partitioning=1&client_id=${config.CLIENT_ID}`;

      const response = await fetch(url);
      const playlists = await response.json();

      return playlists;
    },

    async searchNextPage(url) {
      const response = await fetch(url);
      const results = await response.json();

      return results;
    },
  },
  users: {
    async searchUsers(term) {
      const url = `${baseURL}/users?q=${term}&limit=10&linked_partitioning=1&client_id=${config.CLIENT_ID}`;

      const response = await fetch(url);
      const users = await response.json();

      return users;
    },

    async searchNextPage(url) {
      const response = await fetch(url);
      const results = await response.json();

      return results;
    },
  },
};

export default api;
