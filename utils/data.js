//user info
const randomUsers = [
    { username: "Judy", email: "judy@example.com" },
    { username: "Lucy", email: "lucy@example.net" },
    { username: "Robert", email: "robert@example.org" },
    { username: "Charles", email: "charles@example.com" },
    { username: "Harika", email: "harika@example.net" },
  ];
  
  // Thoughts
  const randomThoughts = [
    "Cultivate a positive self-image",
    "Improve your physical health",
    "Develop your problem-solving abilities",
    "I believe in myself.",
    "I prioritize my well-being.",
    "Simplicity is the ultimate sophistication.",
    "I am safe and supported.",
    "I am kind to myself and others.",
    "Tough times never last but tough people do.",
  ];
  
  // Reactions
  const randomReactions = [
    "Love this!",
    "So true!",
    "Good morning",
    "I needed to hear this.",
    "Agree!",
    "Inspirational.",
    "This is hilarious 😂",
    "Mind blown 🤯",
    "Couldn't agree more.",
    "This is everything.",
  ];
  
  // Get a random item from an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Function to generate random thoughts
  const getRandomThoughts = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push(getRandomArrItem(randomThoughts));
    }
    return results;
  };
  
  // Function to generate random reactions
  const getRandomReactions = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push(getRandomArrItem(randomReactions));
    }
    return results;
  };
  
  const getRandomUser = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push(getRandomArrItem(randomUsers));
    }
    return results
  };
  
  // Export the functions for use in seed.js
  module.exports = {
    getRandomThoughts,
    getRandomReactions,
    getRandomUser,
  };