//  array of tweets
let tweets = [
    {
      tweet: "Just had a delicious breakfast!",
      username: "johndoe",
      created_at: "03-19-2023",
      age: 35
    },
    {
      tweet: "I love going for walks in the park.",
      username: "janedoe",
      created_at: "03-18-2023",
      age: 16
    },
    {
      tweet: "Excited for the new Avengers movie!",
      username: "tonystark",
      created_at: "03-17-2023",
      age: 45
    },
    {
      tweet: "Can't wait for the weekend!",
      username: "sarahjones",
      created_at: "03-16-2023",
      age: 22
    },
    {
      tweet: "I just finished reading a great book.",
      username: "jacksmith",
      created_at: "03-15-2023",
      age: 14
    },
    {
      tweet: "Having a productive day at work!",
      username: "emilybrown",
      created_at: "03-14-2023",
      age: 29
    },
    {
      tweet: "Enjoying a cup of coffee on this beautiful day.",
      username: "davidlee",
      created_at: "03-13-2023",
      age: 19
    },
    {
      tweet: "Looking forward to my vacation next month!",
      username: "amandaroberts",
      created_at: "03-12-2023",
      age: 17
    },
    {
      tweet: "Just tried a new restaurant and it was amazing!",
      username: "johnsmith",
      created_at: "03-11-2023",
      age: 33
    },
    {
      tweet: "I love spending time with my family.",
      username: "ashleynguyen",
      created_at: "03-10-2023",
      age: 12
    }
  ];
  
  // tweets for users of 18 and over
  let counter = 0;
  while (counter < tweets.length) {
    let tweet = tweets[counter];
    if (tweet.age >= 18) {
      console.log(tweet.tweet + " - " + tweet.username + " - " + tweet.created_at);
    }
    counter++;
  }
  
  // tweets for users under 18 
  for (let counter = 0; counter < tweets.length; counter++) {
    let tweet = tweets[counter];
    if (tweet.age < 18) {
      console.log(tweet.tweet + " - " + tweet.username + " - " + tweet.created_at);
    }
  }
  