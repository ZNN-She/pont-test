/**
 * @desc 列表
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.UserEntity();

export function request(
  params: Params,
  body: defs.SysUserParam,
  options?: any,
) {
  return PontCore.fetch(PontCore.getUrl('/sys/sysuser/list', params, 'POST'), {
    method: 'POST',

    body,
    ...options,
  });
}
