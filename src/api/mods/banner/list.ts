/**
 * @desc 列表
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.BannerEntity();

export function request(params: Params, body: defs.BannerParam, options?: any) {
  return PontCore.fetch(PontCore.getUrl('/sys/banner/list', params, 'POST'), {
    method: 'POST',

    body,
    ...options,
  });
}
