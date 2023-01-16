import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { MyContext } from '../index';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type AddWeightDataMutationResponse = {
  __typename?: 'AddWeightDataMutationResponse';
  code: Scalars['Int'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
  weightData?: Maybe<WeightData>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addWeightData?: Maybe<AddWeightDataMutationResponse>;
  updateWeightData?: Maybe<UpdateWeightDataMutationResponse>;
};


export type MutationAddWeightDataArgs = {
  date?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['Float']>;
};


export type MutationUpdateWeightDataArgs = {
  date?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  weightData?: Maybe<Array<Maybe<WeightData>>>;
};

export type UpdateWeightDataMutationResponse = {
  __typename?: 'UpdateWeightDataMutationResponse';
  code: Scalars['Int'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
  weightData?: Maybe<WeightData>;
};

export type WeightData = {
  __typename?: 'WeightData';
  date?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AddWeightDataMutationResponse: ResolverTypeWrapper<AddWeightDataMutationResponse>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  UpdateWeightDataMutationResponse: ResolverTypeWrapper<UpdateWeightDataMutationResponse>;
  WeightData: ResolverTypeWrapper<WeightData>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AddWeightDataMutationResponse: AddWeightDataMutationResponse;
  Boolean: Scalars['Boolean'];
  Date: Scalars['Date'];
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  Mutation: {};
  Query: {};
  String: Scalars['String'];
  UpdateWeightDataMutationResponse: UpdateWeightDataMutationResponse;
  WeightData: WeightData;
}>;

export type AddWeightDataMutationResponseResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['AddWeightDataMutationResponse'] = ResolversParentTypes['AddWeightDataMutationResponse']> = ResolversObject<{
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  weightData?: Resolver<Maybe<ResolversTypes['WeightData']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type MutationResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addWeightData?: Resolver<Maybe<ResolversTypes['AddWeightDataMutationResponse']>, ParentType, ContextType, Partial<MutationAddWeightDataArgs>>;
  updateWeightData?: Resolver<Maybe<ResolversTypes['UpdateWeightDataMutationResponse']>, ParentType, ContextType, Partial<MutationUpdateWeightDataArgs>>;
}>;

export type QueryResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  weightData?: Resolver<Maybe<Array<Maybe<ResolversTypes['WeightData']>>>, ParentType, ContextType>;
}>;

export type UpdateWeightDataMutationResponseResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['UpdateWeightDataMutationResponse'] = ResolversParentTypes['UpdateWeightDataMutationResponse']> = ResolversObject<{
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  weightData?: Resolver<Maybe<ResolversTypes['WeightData']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WeightDataResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['WeightData'] = ResolversParentTypes['WeightData']> = ResolversObject<{
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MyContext> = ResolversObject<{
  AddWeightDataMutationResponse?: AddWeightDataMutationResponseResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UpdateWeightDataMutationResponse?: UpdateWeightDataMutationResponseResolvers<ContextType>;
  WeightData?: WeightDataResolvers<ContextType>;
}>;

