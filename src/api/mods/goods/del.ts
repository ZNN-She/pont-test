/**
 * @desc 删除
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.Result();

export function request(params: Params, body: defs.IdParam, options?: any) {
  return PontCore.fetch(PontCore.getUrl('/sys/goods/del', params, 'POST'), {
    method: 'POST',

    body,
    ...options,
  });
}
