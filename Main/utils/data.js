const userNames = [
"SmkyBndit233",
"KoolSkool45612",
"TheManWithAplan5",
"LuckyDawg6",
"TooOld4Stuff5",
"NeedASnickers17",
"CodinOn56",
"BengieBub617",
"Woahhhh114",
"ZzzzEmon26"
];

const thoughtTexts = [

  "I did it for Dale",
  "Just slow down and smell the code",
  "Can the robot do it?",
  "I need to practice in smaller chunks",
  "Crickets from me",
  "Mmmm this would go well with a cup of coffee",
  "It is getting late",
  "You are seriously the best",
  "Let us go for a drive"
]

  const reactions = [
   "I would drink to that",
   "Sweet as, Mate",
   "Good on ya",
   "Love love love this",
   "I feel ya",
   "All smiles",
   "Adore this",
   "This rocks",
   "Woot woot",
   "Yassss"
  ];

  // Get random element from array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

  // Generate random thoughts.
  const getRandomThoughts = (int) => {
      const results = [];
      for (let i = 0; i < int; i++) {
          results.push({
              thoughtText: getRandomArrItem(thoughtTexts),
              username: getRandomArrItem(userNames),
              reactions: [
                  {
                      reactionBody: getRandomArrItem(reactions),
                      username: getRandomArrItem(userNames),
                  },
              ],
          });
      }
      return results;
  };

  // Get random username
  const getRandomUsername = () =>
      `${getRandomArrItem(userNames)}`;

  const getThoughReactions = (int) => {
      const results = [];
      for (let i = 0; i < int; i++) {
          results.push({
              reactionBody: getRandomArrItem(reactions),
              username: getRandomArrItem(userNames),
          });
      }
      return results;
  };

  // Export 
  module.exports = { getRandomThoughts, getThoughReactions, getRandomUsername };
