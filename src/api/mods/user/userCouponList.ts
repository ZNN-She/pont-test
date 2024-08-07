/**
 * @desc 列表
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.UserCouponEntity();

export function request(
  params: Params,
  body: defs.UserCouponParam,
  options?: any,
) {
  return PontCore.fetch(
    PontCore.getUrl('/sys/user/userCouponList', params, 'POST'),
    {
      method: 'POST',

      body,
      ...options,
    },
  );
}
