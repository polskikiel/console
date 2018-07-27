import { Observable } from 'rxjs/Observable';
import { IMetaDataOwner, MetaDataOwner } from './generic/meta-data-owner';
import {
  IUsageKindResource,
  IUsageKindResourcesList,
} from './usage-kind-resource';

export class UsageKindResourceList extends MetaDataOwner
  implements IUsageKindResourcesList {
  items: IUsageKindResource[];
  constructor(input: IUsageKindResourcesList) {
    super(input.metadata);
    this.items = input.items;
  }
}
