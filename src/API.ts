/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUsersInput = {
  username: string,
  name: string,
  university: string,
  skills?: Array< SkillsInput | null > | null,
  interests?: Array< InterestsInput | null > | null,
  id?: string | null,
  _version?: number | null,
};

export type SkillsInput = {
  indiv_skills: string,
};

export type InterestsInput = {
  indiv_interests: string,
};

export type ModelUsersConditionInput = {
  username?: ModelStringInput | null,
  name?: ModelStringInput | null,
  university?: ModelStringInput | null,
  and?: Array< ModelUsersConditionInput | null > | null,
  or?: Array< ModelUsersConditionInput | null > | null,
  not?: ModelUsersConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Users = {
  __typename: "Users",
  username: string,
  name: string,
  university: string,
  skills?:  Array<Skills | null > | null,
  interests?:  Array<Interests | null > | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Skills = {
  __typename: "Skills",
  indiv_skills: string,
};

export type Interests = {
  __typename: "Interests",
  indiv_interests: string,
};

export type UpdateUsersInput = {
  username?: string | null,
  name?: string | null,
  university?: string | null,
  skills?: Array< SkillsInput | null > | null,
  interests?: Array< InterestsInput | null > | null,
  id: string,
  _version?: number | null,
};

export type DeleteUsersInput = {
  id: string,
  _version?: number | null,
};

export type ModelUsersFilterInput = {
  username?: ModelStringInput | null,
  name?: ModelStringInput | null,
  university?: ModelStringInput | null,
  and?: Array< ModelUsersFilterInput | null > | null,
  or?: Array< ModelUsersFilterInput | null > | null,
  not?: ModelUsersFilterInput | null,
};

export type ModelUsersConnection = {
  __typename: "ModelUsersConnection",
  items:  Array<Users | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionUsersFilterInput = {
  username?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  university?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUsersFilterInput | null > | null,
  or?: Array< ModelSubscriptionUsersFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateUsersMutationVariables = {
  input: CreateUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type CreateUsersMutation = {
  createUsers?:  {
    __typename: "Users",
    username: string,
    name: string,
    university: string,
    skills?:  Array< {
      __typename: "Skills",
      indiv_skills: string,
    } | null > | null,
    interests?:  Array< {
      __typename: "Interests",
      indiv_interests: string,
    } | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUsersMutationVariables = {
  input: UpdateUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type UpdateUsersMutation = {
  updateUsers?:  {
    __typename: "Users",
    username: string,
    name: string,
    university: string,
    skills?:  Array< {
      __typename: "Skills",
      indiv_skills: string,
    } | null > | null,
    interests?:  Array< {
      __typename: "Interests",
      indiv_interests: string,
    } | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUsersMutationVariables = {
  input: DeleteUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type DeleteUsersMutation = {
  deleteUsers?:  {
    __typename: "Users",
    username: string,
    name: string,
    university: string,
    skills?:  Array< {
      __typename: "Skills",
      indiv_skills: string,
    } | null > | null,
    interests?:  Array< {
      __typename: "Interests",
      indiv_interests: string,
    } | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetUserByUsernameQueryVariables = {
  username: string,
};

export type GetUserByUsernameQuery = {
  getUserByUsername?:  {
    __typename: "Users",
    username: string,
    name: string,
    university: string,
    skills?:  Array< {
      __typename: "Skills",
      indiv_skills: string,
    } | null > | null,
    interests?:  Array< {
      __typename: "Interests",
      indiv_interests: string,
    } | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetUsersQueryVariables = {
  id: string,
};

export type GetUsersQuery = {
  getUsers?:  {
    __typename: "Users",
    username: string,
    name: string,
    university: string,
    skills?:  Array< {
      __typename: "Skills",
      indiv_skills: string,
    } | null > | null,
    interests?:  Array< {
      __typename: "Interests",
      indiv_interests: string,
    } | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUsersConnection",
    items:  Array< {
      __typename: "Users",
      username: string,
      name: string,
      university: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUsersConnection",
    items:  Array< {
      __typename: "Users",
      username: string,
      name: string,
      university: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateUsersSubscriptionVariables = {
  filter?: ModelSubscriptionUsersFilterInput | null,
};

export type OnCreateUsersSubscription = {
  onCreateUsers?:  {
    __typename: "Users",
    username: string,
    name: string,
    university: string,
    skills?:  Array< {
      __typename: "Skills",
      indiv_skills: string,
    } | null > | null,
    interests?:  Array< {
      __typename: "Interests",
      indiv_interests: string,
    } | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUsersSubscriptionVariables = {
  filter?: ModelSubscriptionUsersFilterInput | null,
};

export type OnUpdateUsersSubscription = {
  onUpdateUsers?:  {
    __typename: "Users",
    username: string,
    name: string,
    university: string,
    skills?:  Array< {
      __typename: "Skills",
      indiv_skills: string,
    } | null > | null,
    interests?:  Array< {
      __typename: "Interests",
      indiv_interests: string,
    } | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUsersSubscriptionVariables = {
  filter?: ModelSubscriptionUsersFilterInput | null,
};

export type OnDeleteUsersSubscription = {
  onDeleteUsers?:  {
    __typename: "Users",
    username: string,
    name: string,
    university: string,
    skills?:  Array< {
      __typename: "Skills",
      indiv_skills: string,
    } | null > | null,
    interests?:  Array< {
      __typename: "Interests",
      indiv_interests: string,
    } | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
