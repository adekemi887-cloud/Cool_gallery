// server.js
const SERVER_URL = "https://zero000000000000-fv1p.onrender.com";

window.api = {
  fetchFeed: async (search = '') => {
    try {
      const endpoint = search ?
        `${SERVER_URL}/api/feed?search=${encodeURIComponent(search)}` :
        `${SERVER_URL}/api/feed`;
      const res = await fetch(endpoint);
      return await res.json();
    } catch (err) {
      console.error(err);
      return { success: false, pins: [] };
    }
  },
  uploadPin: async (file, tag) => {
    try {
      const formData = new FormData();
      formData.append('image', file);
      formData.append('tag', tag || 'untagged');
      
      const res = await fetch(`${SERVER_URL}/api/upload`, { method: 'POST', body: formData });
      return await res.json();
    } catch (err) {
      return { success: false, message: err.message };
    }
  },
  initChatUser: async (email) => {
    try {
      await fetch(`${SERVER_URL}/api/chat/user`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
    } catch (err) {}
  },
  fetchChatDB: async () => {
    try {
      const res = await fetch(`${SERVER_URL}/api/chat/db`);
      return await res.json();
    } catch (err) {
      return { success: false, data: { users: [], messages: [] } };
    }
  },
  sendMessage: async (sender, receiver, text) => {
    try {
      await fetch(`${SERVER_URL}/api/chat/message`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sender, receiver, text, timestamp: Date.now() })
      });
    } catch (err) {}
  }
};