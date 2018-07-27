import { IMetaDataOwner, MetaDataOwner } from './generic/meta-data-owner';
import { IUsageKind } from './usage-kind';

export interface IUsageKindResource extends IMetaDataOwner {
  name: string;
  namespace: string;
}

export class UsageKindResource extends MetaDataOwner
  implements IUsageKindResource {
  name: string;
  namespace: string;

  constructor(input: IUsageKindResource) {
    super(input.metadata, input.status);
    this.name = input.name;
    this.namespace = input.namespace;
  }
}

export interface IUsageKindResourcesList extends IMetaDataOwner {
  items: IUsageKindResource[];
}
