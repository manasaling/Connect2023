/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
      username
      name
      university
      skills {
        indiv_skills
      }
      interests {
        indiv_interests
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        username
        name
        university
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
