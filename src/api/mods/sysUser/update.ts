/**
 * @desc 修改
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.Result();

export function request(
  params: Params,
  body: defs.SysUserEntity,
  options?: any,
) {
  return PontCore.fetch(
    PontCore.getUrl('/sys/sysuser/update', params, 'POST'),
    {
      method: 'POST',

      body,
      ...options,
    },
  );
}
