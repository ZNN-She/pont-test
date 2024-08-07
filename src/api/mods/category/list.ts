/**
 * @desc 列表
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.CategoryEntity();

export function request(
  params: Params,
  body: defs.CategoryParam,
  options?: any,
) {
  return PontCore.fetch(PontCore.getUrl('/sys/category/list', params, 'POST'), {
    method: 'POST',

    body,
    ...options,
  });
}
