import { UsageKindList } from '../shared/datamodel/k8s/usage-kind-list';
import { UsageKindResourceList } from '../shared/datamodel/k8s/usage-kind-resource-list';
import { AppConfig } from './../../../../app.config';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GraphQLClientService } from '../../../../shared/services/graphql-client-service';

@Injectable()
export class UsageKindService {
  constructor(
    private http: HttpClient,
    private graphQLClientService: GraphQLClientService,
  ) {}

  public getUsageKinds(first, offset) {
    const query = `query UsageKind($remoteEnvironment: String!){
      environments(remoteEnvironment: $remoteEnvironment) {
        name
      }
    }`;
    const variables = { first, offset };
    return this.graphQLClientService.request(
      AppConfig.graphqlApiUrl,
      query,
      variables,
    );
  }

  public getBoundRemoteEnvironments(environment) {
    const query = `query RemoteEnvironment($environment: String!){
      remoteEnvironments(environment: $environment) {
        name
      }
    }`;
    const variables = { environment };
    return this.graphQLClientService.request(
      AppConfig.graphqlApiUrl,
      query,
      variables,
    );
  }
}
