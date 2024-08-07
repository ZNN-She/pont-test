/**
 * @desc 修改
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.Result();

export function request(params: Params, body: defs.GoodsEntity, options?: any) {
  return PontCore.fetch(PontCore.getUrl('/sys/goods/update', params, 'POST'), {
    method: 'POST',

    body,
    ...options,
  });
}
