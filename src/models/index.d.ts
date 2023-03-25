import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";



type EagerSkills = {
  readonly indiv_skills: string;
}

type LazySkills = {
  readonly indiv_skills: string;
}

export declare type Skills = LazyLoading extends LazyLoadingDisabled ? EagerSkills : LazySkills

export declare const Skills: (new (init: ModelInit<Skills>) => Skills)

type EagerInterests = {
  readonly indiv_interests: string;
}

type LazyInterests = {
  readonly indiv_interests: string;
}

export declare type Interests = LazyLoading extends LazyLoadingDisabled ? EagerInterests : LazyInterests

export declare const Interests: (new (init: ModelInit<Interests>) => Interests)

type EagerUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly name: string;
  readonly university: string;
  readonly skills?: (string | null)[] | null;
  readonly interests?: (string | null)[] | null;
  readonly image: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly name: string;
  readonly university: string;
  readonly skills?: (string | null)[] | null;
  readonly interests?: (string | null)[] | null;
  readonly image: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Users = LazyLoading extends LazyLoadingDisabled ? EagerUsers : LazyUsers

export declare const Users: (new (init: ModelInit<Users>) => Users) & {
  copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}