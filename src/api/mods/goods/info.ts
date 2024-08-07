/**
 * @desc 商品详情
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.GoodsEntity();

export function request(params: Params, body: defs.IdParam, options?: any) {
  return PontCore.fetch(PontCore.getUrl('/sys/goods/info', params, 'POST'), {
    method: 'POST',

    body,
    ...options,
  });
}
