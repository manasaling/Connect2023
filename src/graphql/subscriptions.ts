/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onCreateUsers(filter: $filter) {
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
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onUpdateUsers(filter: $filter) {
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
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers($filter: ModelSubscriptionUsersFilterInput) {
    onDeleteUsers(filter: $filter) {
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
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
