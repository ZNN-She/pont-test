/**
 * @desc 单条数据
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.LiveRoomEntity();

export function request(params: Params, options?: any) {
  return PontCore.fetch(
    PontCore.getUrl('/sys/liveroom/query', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}
