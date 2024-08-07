/**
 * @desc 列表
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.GoodsEntity();

export function request(params: Params, body: defs.GoodsParam, options?: any) {
  return PontCore.fetch(PontCore.getUrl('/sys/goods/list', params, 'POST'), {
    method: 'POST',

    body,
    ...options,
  });
}
