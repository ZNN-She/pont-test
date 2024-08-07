/**
 * @desc 新增
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.Result();

export function request(
  params: Params,
  body: defs.LiveRoomEntity,
  options?: any,
) {
  return PontCore.fetch(PontCore.getUrl('/sys/liveroom/save', params, 'POST'), {
    method: 'POST',

    body,
    ...options,
  });
}
