/**
 * @desc 列表
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.CouponEntity();

export function request(params: Params, body: defs.CouponParam, options?: any) {
  return PontCore.fetch(PontCore.getUrl('/sys/coupon/list', params, 'POST'), {
    method: 'POST',

    body,
    ...options,
  });
}
