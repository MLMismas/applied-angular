import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { SoftwareItem } from '../reducers/user-software.feature';

export const SoftwareListActions = createActionGroup({
  source: 'Dashboard Software List',
  events: {
    'List Filtered By': props<{ payload: string }>(),
    'Load the Entitled Software': emptyProps(),
    'Entitled Software': props<{ payload: SoftwareItem[] }>(),
  },
});
