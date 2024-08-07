/**
 * @desc 列表
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.ShopEntity();

export function request(params: Params, body: defs.ShopParam, options?: any) {
  return PontCore.fetch(PontCore.getUrl('/sys/shop/list', params, 'POST'), {
    method: 'POST',

    body,
    ...options,
  });
}
