import { IMetaDataOwner, MetaDataOwner } from './generic/meta-data-owner';
import { ISubscription } from './subscription';

export interface IUsageKind extends IMetaDataOwner {
  name: string;
  displayName: string;
  kind: string;
  version: string;
  group: string;
}

export class UsageKind extends MetaDataOwner implements IUsageKind {
  name: string;
  displayName: string;
  kind: string;
  version: string;
  group: string;

  constructor(input: IUsageKind) {
    super(input.metadata, input.status);
    this.name = input.name;
    this.displayName = input.displayName;
    this.kind = input.kind;
    this.version = input.version;
    this.group = input.group;
  }
}

export interface IUsageKindList extends IMetaDataOwner {
  items: IUsageKind[];
}
