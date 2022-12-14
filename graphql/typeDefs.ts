import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Query {
    notes: [Note]!
    tasks: [Task]!
  }

  type Mutation {
    createNote(content: String!, title: String!, id: String!): Note!
    deleteNote(id: String!): Note!
    createTask(content: String!, title: String!, id: String!): Task!
    deleteTask(id: String!): Task!
  }

  type User {
    id: String
    name: String
    email: String
    password: String
  }

  type Note {
    id: String
    title: String
    content: String
    author: [User]!
    authorId: String
  }

  type Task {
    id: String
    title: String
    content: String
    author: [User]!
    authorId: String
  }
`;
