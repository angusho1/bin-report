/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateDisposalBinInput = {
  id?: string | null;
  binId: string;
  name?: string | null;
  location?: Array<number | null> | null;
  hits?: number | null;
  type?: string | null;
  dateOfInit?: string | null;
};

export type ModelDisposalBinConditionInput = {
  binId?: ModelStringInput | null;
  name?: ModelStringInput | null;
  location?: ModelFloatInput | null;
  hits?: ModelIntInput | null;
  type?: ModelStringInput | null;
  dateOfInit?: ModelStringInput | null;
  and?: Array<ModelDisposalBinConditionInput | null> | null;
  or?: Array<ModelDisposalBinConditionInput | null> | null;
  not?: ModelDisposalBinConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
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
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type DisposalBin = {
  __typename: "DisposalBin";
  id?: string;
  binId?: string;
  name?: string | null;
  location?: Array<number | null> | null;
  hits?: number | null;
  type?: string | null;
  dateOfInit?: string | null;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateDisposalBinInput = {
  binId?: string | null;
  name?: string | null;
  location?: Array<number | null> | null;
  hits?: number | null;
  type?: string | null;
  dateOfInit?: string | null;
};

export type DeleteDisposalBinInput = {
  id?: string | null;
};

export type CreateBinRecordInput = {
  id?: string | null;
  binId: string;
  date: string;
  action?: string | null;
};

export type ModelBinRecordConditionInput = {
  binId?: ModelStringInput | null;
  date?: ModelStringInput | null;
  action?: ModelStringInput | null;
  and?: Array<ModelBinRecordConditionInput | null> | null;
  or?: Array<ModelBinRecordConditionInput | null> | null;
  not?: ModelBinRecordConditionInput | null;
};

export type BinRecord = {
  __typename: "BinRecord";
  id?: string;
  binId?: string;
  date?: string;
  action?: string | null;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateBinRecordInput = {
  id: string;
  binId?: string | null;
  date?: string | null;
  action?: string | null;
};

export type DeleteBinRecordInput = {
  id?: string | null;
};

export type ModelDisposalBinFilterInput = {
  binId?: ModelStringInput | null;
  name?: ModelStringInput | null;
  location?: ModelFloatInput | null;
  hits?: ModelIntInput | null;
  type?: ModelStringInput | null;
  dateOfInit?: ModelStringInput | null;
  and?: Array<ModelDisposalBinFilterInput | null> | null;
  or?: Array<ModelDisposalBinFilterInput | null> | null;
  not?: ModelDisposalBinFilterInput | null;
};

export type ModelDisposalBinConnection = {
  __typename: "ModelDisposalBinConnection";
  items?: Array<DisposalBin | null> | null;
  nextToken?: string | null;
};

export type ModelBinRecordFilterInput = {
  id?: ModelIDInput | null;
  binId?: ModelStringInput | null;
  date?: ModelStringInput | null;
  action?: ModelStringInput | null;
  and?: Array<ModelBinRecordFilterInput | null> | null;
  or?: Array<ModelBinRecordFilterInput | null> | null;
  not?: ModelBinRecordFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelBinRecordConnection = {
  __typename: "ModelBinRecordConnection";
  items?: Array<BinRecord | null> | null;
  nextToken?: string | null;
};

export type CreateDisposalBinMutation = {
  __typename: "DisposalBin";
  id: string;
  binId: string;
  name?: string | null;
  location?: Array<number | null> | null;
  hits?: number | null;
  type?: string | null;
  dateOfInit?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateDisposalBinMutation = {
  __typename: "DisposalBin";
  id: string;
  binId: string;
  name?: string | null;
  location?: Array<number | null> | null;
  hits?: number | null;
  type?: string | null;
  dateOfInit?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteDisposalBinMutation = {
  __typename: "DisposalBin";
  id: string;
  binId: string;
  name?: string | null;
  location?: Array<number | null> | null;
  hits?: number | null;
  type?: string | null;
  dateOfInit?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateBinRecordMutation = {
  __typename: "BinRecord";
  id: string;
  binId: string;
  date: string;
  action?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateBinRecordMutation = {
  __typename: "BinRecord";
  id: string;
  binId: string;
  date: string;
  action?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteBinRecordMutation = {
  __typename: "BinRecord";
  id: string;
  binId: string;
  date: string;
  action?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetDisposalBinQuery = {
  __typename: "DisposalBin";
  id: string;
  binId: string;
  name?: string | null;
  location?: Array<number | null> | null;
  hits?: number | null;
  type?: string | null;
  dateOfInit?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListDisposalBinsQuery = {
  __typename: "ModelDisposalBinConnection";
  items?: Array<{
    __typename: "DisposalBin";
    id: string;
    binId: string;
    name?: string | null;
    location?: Array<number | null> | null;
    hits?: number | null;
    type?: string | null;
    dateOfInit?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetBinRecordQuery = {
  __typename: "BinRecord";
  id: string;
  binId: string;
  date: string;
  action?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListBinRecordsQuery = {
  __typename: "ModelBinRecordConnection";
  items?: Array<{
    __typename: "BinRecord";
    id: string;
    binId: string;
    date: string;
    action?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateDisposalBinSubscription = {
  __typename: "DisposalBin";
  id: string;
  binId: string;
  name?: string | null;
  location?: Array<number | null> | null;
  hits?: number | null;
  type?: string | null;
  dateOfInit?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateDisposalBinSubscription = {
  __typename: "DisposalBin";
  id: string;
  binId: string;
  name?: string | null;
  location?: Array<number | null> | null;
  hits?: number | null;
  type?: string | null;
  dateOfInit?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteDisposalBinSubscription = {
  __typename: "DisposalBin";
  id: string;
  binId: string;
  name?: string | null;
  location?: Array<number | null> | null;
  hits?: number | null;
  type?: string | null;
  dateOfInit?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateBinRecordSubscription = {
  __typename: "BinRecord";
  id: string;
  binId: string;
  date: string;
  action?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateBinRecordSubscription = {
  __typename: "BinRecord";
  id: string;
  binId: string;
  date: string;
  action?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteBinRecordSubscription = {
  __typename: "BinRecord";
  id: string;
  binId: string;
  date: string;
  action?: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateDisposalBin(
    input: CreateDisposalBinInput,
    condition?: ModelDisposalBinConditionInput
  ): Promise<CreateDisposalBinMutation> {
    const statement = `mutation CreateDisposalBin($input: CreateDisposalBinInput!, $condition: ModelDisposalBinConditionInput) {
        createDisposalBin(input: $input, condition: $condition) {
          __typename
          id
          binId
          name
          location
          hits
          type
          dateOfInit
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDisposalBinMutation>response.data.createDisposalBin;
  }
  async UpdateDisposalBin(
    input: UpdateDisposalBinInput,
    condition?: ModelDisposalBinConditionInput
  ): Promise<UpdateDisposalBinMutation> {
    const statement = `mutation UpdateDisposalBin($input: UpdateDisposalBinInput!, $condition: ModelDisposalBinConditionInput) {
        updateDisposalBin(input: $input, condition: $condition) {
          __typename
          id
          binId
          name
          location
          hits
          type
          dateOfInit
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDisposalBinMutation>response.data.updateDisposalBin;
  }
  async DeleteDisposalBin(
    input: DeleteDisposalBinInput,
    condition?: ModelDisposalBinConditionInput
  ): Promise<DeleteDisposalBinMutation> {
    const statement = `mutation DeleteDisposalBin($input: DeleteDisposalBinInput!, $condition: ModelDisposalBinConditionInput) {
        deleteDisposalBin(input: $input, condition: $condition) {
          __typename
          id
          binId
          name
          location
          hits
          type
          dateOfInit
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDisposalBinMutation>response.data.deleteDisposalBin;
  }
  async CreateBinRecord(
    input: CreateBinRecordInput,
    condition?: ModelBinRecordConditionInput
  ): Promise<CreateBinRecordMutation> {
    const statement = `mutation CreateBinRecord($input: CreateBinRecordInput!, $condition: ModelBinRecordConditionInput) {
        createBinRecord(input: $input, condition: $condition) {
          __typename
          id
          binId
          date
          action
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBinRecordMutation>response.data.createBinRecord;
  }
  async UpdateBinRecord(
    input: UpdateBinRecordInput,
    condition?: ModelBinRecordConditionInput
  ): Promise<UpdateBinRecordMutation> {
    const statement = `mutation UpdateBinRecord($input: UpdateBinRecordInput!, $condition: ModelBinRecordConditionInput) {
        updateBinRecord(input: $input, condition: $condition) {
          __typename
          id
          binId
          date
          action
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBinRecordMutation>response.data.updateBinRecord;
  }
  async DeleteBinRecord(
    input: DeleteBinRecordInput,
    condition?: ModelBinRecordConditionInput
  ): Promise<DeleteBinRecordMutation> {
    const statement = `mutation DeleteBinRecord($input: DeleteBinRecordInput!, $condition: ModelBinRecordConditionInput) {
        deleteBinRecord(input: $input, condition: $condition) {
          __typename
          id
          binId
          date
          action
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBinRecordMutation>response.data.deleteBinRecord;
  }
  async GetDisposalBin(id: string): Promise<GetDisposalBinQuery> {
    const statement = `query GetDisposalBin($id: ID!) {
        getDisposalBin(id: $id) {
          __typename
          id
          binId
          name
          location
          hits
          type
          dateOfInit
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDisposalBinQuery>response.data.getDisposalBin;
  }
  async ListDisposalBins(
    filter?: ModelDisposalBinFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDisposalBinsQuery> {
    const statement = `query ListDisposalBins($filter: ModelDisposalBinFilterInput, $limit: Int, $nextToken: String) {
        listDisposalBins(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            binId
            name
            location
            hits
            type
            dateOfInit
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDisposalBinsQuery>response.data.listDisposalBins;
  }
  async GetBinRecord(id: string): Promise<GetBinRecordQuery> {
    const statement = `query GetBinRecord($id: ID!) {
        getBinRecord(id: $id) {
          __typename
          id
          binId
          date
          action
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBinRecordQuery>response.data.getBinRecord;
  }
  async ListBinRecords(
    filter?: ModelBinRecordFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBinRecordsQuery> {
    const statement = `query ListBinRecords($filter: ModelBinRecordFilterInput, $limit: Int, $nextToken: String) {
        listBinRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            binId
            date
            action
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBinRecordsQuery>response.data.listBinRecords;
  }
  OnCreateDisposalBinListener: Observable<
    SubscriptionResponse<OnCreateDisposalBinSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateDisposalBin {
        onCreateDisposalBin {
          __typename
          id
          binId
          name
          location
          hits
          type
          dateOfInit
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateDisposalBinSubscription>>;

  OnUpdateDisposalBinListener: Observable<
    SubscriptionResponse<OnUpdateDisposalBinSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateDisposalBin {
        onUpdateDisposalBin {
          __typename
          id
          binId
          name
          location
          hits
          type
          dateOfInit
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateDisposalBinSubscription>>;

  OnDeleteDisposalBinListener: Observable<
    SubscriptionResponse<OnDeleteDisposalBinSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteDisposalBin {
        onDeleteDisposalBin {
          __typename
          id
          binId
          name
          location
          hits
          type
          dateOfInit
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteDisposalBinSubscription>>;

  OnCreateBinRecordListener: Observable<
    SubscriptionResponse<OnCreateBinRecordSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateBinRecord {
        onCreateBinRecord {
          __typename
          id
          binId
          date
          action
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateBinRecordSubscription>>;

  OnUpdateBinRecordListener: Observable<
    SubscriptionResponse<OnUpdateBinRecordSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateBinRecord {
        onUpdateBinRecord {
          __typename
          id
          binId
          date
          action
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateBinRecordSubscription>>;

  OnDeleteBinRecordListener: Observable<
    SubscriptionResponse<OnDeleteBinRecordSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteBinRecord {
        onDeleteBinRecord {
          __typename
          id
          binId
          date
          action
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteBinRecordSubscription>>;
}
