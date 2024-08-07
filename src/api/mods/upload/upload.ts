/**
 * @desc 上传
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 类型,1-商品主图，2-商品详情图，3-轮播图，0-测试图 */
  type?: number;
}

export const init = new defs.SysResourceEntity();

export function request(params: Params, form: FormData, options?: any) {
  return PontCore.fetch(PontCore.getUrl('/sys/order/upload', params, 'POST'), {
    method: 'POST',
    body: form,

    ...options,
  });
}
