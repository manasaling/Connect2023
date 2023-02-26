/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  username: string,
  name: string,
  university: string,
  skills?: Array< SkillsInput | null > | null,
  interests?: Array< InterestsInput | null > | null,
  id?: string | null,
};

export type SkillsInput = {
  indiv_skills: string,
};

export type InterestsInput = {
  indiv_interests: string,
};

export type ModelTodoConditionInput = {
  username?: ModelStringInput | null,
  name?: ModelStringInput | null,
  university?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
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

export type Todo = {
  __typename: "Todo",
  username: string,
  name: string,
  university: string,
  skills?:  Array<Skills | null > | null,
  interests?:  Array<Interests | null > | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type Skills = {
  __typename: "Skills",
  indiv_skills: string,
};

export type Interests = {
  __typename: "Interests",
  indiv_interests: string,
};

export type UpdateTodoInput = {
  username?: string | null,
  name?: string | null,
  university?: string | null,
  skills?: Array< SkillsInput | null > | null,
  interests?: Array< InterestsInput | null > | null,
  id: string,
};

export type DeleteTodoInput = {
  id: string,
};

export type ModelTodoFilterInput = {
  username?: ModelStringInput | null,
  name?: ModelStringInput | null,
  university?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionTodoFilterInput = {
  username?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  university?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
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

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
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
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
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
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
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
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
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
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      username: string,
      name: string,
      university: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
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
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
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
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
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
  } | null,
};
