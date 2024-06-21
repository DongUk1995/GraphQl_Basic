import { ApolloServer, gql } from "apollo-server"; // type : module을 사용하는 이유

let tweets = [
  {
    id: "1",
    text: "hello",
    userId: "2",
  },
  { id: "2", text: "hello", userId: "1" },
];

let users = [
  {
    id: "1",
    firstName: "kim",
    lastName: "donguk",
  },
  {
    id: "2",
    firstName: "Elon",
    lastName: "Musk",
  },
];
const typeDefs = gql`
  type User {
    id: ID!
    firstName: String
    lastName: String!
    fullName: String!
  }

  type Tweet {
    id: ID!
    text: String!
    author: User
  }
  type Query {
    allUsers: [User!]!
    allTweets: [Tweet!]!
    tweet(id: ID!): Tweet
  }
  type Mutation {
    postTweet(text: String!, userId: ID!): Tweet!
    deleteTweet(id: ID!): Boolean
  }
`; // Graphql 한테 우리의 데이터의 모양을 설명해줌
// POST한 유저에게 userId를 받아온다.

const resolvers = {
  Query: {
    allTweets() {
      return tweets;
    },
    tweet(root, { id }) {
      return tweets.find((tweet) => tweet.id === id);
    },
    allUsers() {
      return users;
    },
  },
  Mutation: {
    postTweet(_, { text, userId }) {
      const newTweet = {
        id: tweets.length + 1,
        text,
        userId,
      };
      tweets.push(newTweet);
      return newTweet;
    },
    deleteTweet(_, { id }) {
      const tweet = tweets.find((tweet) => tweet.id === id);
      if (!tweet) return false;
      tweets = tweets.filter((tweet) => tweet.id !== id);
      return true;
    },
  },
  User: {
    fullName({ fristName, lastName }) {
      console.log("dddd");
      return `${fristName}${lastName}`;
    },
  },
  Tweet: {
    author({ userId }) {
      console.log("Aaaa");
      return users.find((user) => user.id == userId);
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
