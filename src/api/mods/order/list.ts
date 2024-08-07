/**
 * @desc 列表
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.OrderEntity();

export function request(params: Params, body: defs.OrderParam, options?: any) {
  return PontCore.fetch(PontCore.getUrl('/sys/order/list', params, 'POST'), {
    method: 'POST',

    body,
    ...options,
  });
}
