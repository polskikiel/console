import { Observable } from 'rxjs/Observable';
import { IMetaDataOwner, MetaDataOwner } from './generic/meta-data-owner';
import { IUsageKind, IUsageKindList } from './usage-kind';

export class UsageKindList extends MetaDataOwner implements IUsageKindList {
  items: IUsageKind[];
  constructor(input: IUsageKindList) {
    super(input.metadata);
    this.items = input.items;
  }
}
