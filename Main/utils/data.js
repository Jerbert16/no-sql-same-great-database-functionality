const users = [
    'Nocodejones77',
    'needTopractice32',
    'abitofabear34',
    'NeedSun345',
    'Readyforsummer2000',
  ];
  
  const thoughtDescriptions = [
    'I need ice cream',
    'Why do I do these things?',
    'I am ready for vacation, too',
    'Gonna be a long night',
    'Always look on the bright side of life, (whistling)',
  ];
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random user
  const getRandomUser = () =>
    `${getRandomArrItem(users)}`;
  
  // Function to generate random thought that we can add to user object.
  const getRandomThought = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughts: getRandomArrItem(thoughtDescriptions),
      });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  module.exports = { getRandomUser, getRandomThought  };