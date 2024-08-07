/**
 * @desc 登录
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.Result();

export function request(params: Params, body: defs.LoginParam, options?: any) {
  return PontCore.fetch(PontCore.getUrl('/sys/sysuser/login', params, 'POST'), {
    method: 'POST',

    body,
    ...options,
  });
}
