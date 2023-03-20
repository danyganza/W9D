// Initialize an array of tweets
let tweets = [
    {
      tweet: "God is great!",
      username: "big man",
      created_at: "05-11-2020",
      age: 25
    },
    {
      tweet: "ball is life.",
      username: "Allen iverson",
      created_at: "02-05-2001",
      age: 25
    },
    {
      tweet: "will die another day!",
      username: "James Bomd",
      created_at: "05-11-2010",
      age: 18
    },
    {
      tweet: "you miss every shot you don't take!",
      username: "Michael Jordan",
      created_at: "07-12-1997",
      age: 22
    },
    {
      tweet: "yes we can.",
      username: "Barrack obama",
      created_at: "02-15-2008",
      age: 14
    },
    {
      tweet: "The earth is flat!",
      username: "Kyrie Irving",
      created_at: "06-04-2019",
      age: 29
    },
    {
      tweet: "Enjoying a cup of coffee on this beautiful day.",
      username: "davidlee",
      created_at: "03-13-2023",
      age: 19
    },
    {
      tweet: "I love basketball!",
      username: "D.rose",
      created_at: "05-13-2011",
      age: 22
    },
    {
      tweet: "Hockey is fun!",
      username: "McDavid",
      created_at: "06-14-2020",
      age: 26
    },
    {
      tweet: "never go agaisnt the family.",
      username: "Vin diesel",
      created_at: "09-06-2018",
      age: 17
    }
  ];
  
  // Print tweets for users above 18 using a while loop
  let counter = 0;
  while (counter < tweets.length) {
    let tweet = tweets[counter];
    if (tweet.age >= 18) {
      console.log(tweet.tweet + " - " + tweet.username + " - " + tweet.created_at);
    }
    counter=counter+1;
  }
  
  // Print tweets for users under 18 using a for loop
  for (let counter = 0; counter < tweets.length;) {
    let tweet = tweets[counter];
    if (tweet.age < 18) {
      console.log(tweet.tweet + " - " + tweet.username + " - " + tweet.created_at);
    }
    counter= counter +1;
  }
  