const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomUser, getRandomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Drop existing users
  await User.deleteMany({});

  // Create empty array to hold users
  const users = [];

  // Loop 20 times -- add users to array
  for (let i = 0; i < 20; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    const thoughts = getRandomThought(20);

    const username = getRandomUser();
    const email = username.split(' ')[0];
    const friends = 'you have too many friends'

    users.push({
      username,
      email,
      thoughts,
      friends,
    });
  }

  // Add users to the collection and await the results
  await User.collection.insertMany(users);

  // Add thoughts to the collection and await the results
  await Thought.collection.insertOne({
    thoughtText: 'I hope this works',
    username: 'lostcoder12',
    reactions: [...reactions],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});