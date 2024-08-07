/**
 * @desc 订单详情
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.OrderEntity();

export function request(params: Params, body: defs.IdParam, options?: any) {
  return PontCore.fetch(PontCore.getUrl('/sys/order/info', params, 'POST'), {
    method: 'POST',

    body,
    ...options,
  });
}
