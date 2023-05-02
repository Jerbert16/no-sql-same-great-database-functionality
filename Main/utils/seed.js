const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { getRandomThoughts, getRandomUsername } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Clear existing users
  await User.deleteMany({});

  // Clear existing thoughts
  await Thought.deleteMany({});

  // Create ze empty array to hold the users
  const users = [];
  const thoughts = getRandomThoughts(5);

  // Loop 10 times -- add users to the users array
  for (let i = 0; i < 5; i++) {
    // Get some random thought objects using a helper function that we imported from ./data

    const username = getRandomUsername();
    const email = `${username}@aol.com`;

    users.push({
      username,
      email,
    });
  }
  // Add users to collection 
  await User.collection.insertMany(users);
  // Add thoughts to collection
  await Thought.collection.insertMany(thoughts);

  console.info("Seeding complete! 🌱");
  process.exit(0);
});