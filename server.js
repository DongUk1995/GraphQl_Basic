import { ApolloServer, gql } from "apollo-server"; // type : module을 사용하는 이유

const typeDefs = gql`
  type Query {
    text: String
    hello: String
  }
`; // Graphql 한테 우리의 데이터의 모양을 설명해줌

const server = new ApolloServer({ typeDefs });
server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
