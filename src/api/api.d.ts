type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export class BannerEntity {
    /** 创建时间 */
    createTime?: string;

    /** 0-有效，1-删除 */
    del?: number;

    /** 0-启用，1-禁用 */
    enable?: number;

    /** 商品id */
    goodsId?: number;

    /** goodsName */
    goodsName?: string;

    /** 主键ID */
    id?: number;

    /** 更新时间 */
    updateTime?: string;

    /** 图片地址 */
    url?: string;
  }

  export class BannerParam {
    /** 创建时间 */
    createTime?: string;

    /** 0-有效，1-删除 */
    del?: number;

    /** 0-启用，1-禁用 */
    enable?: number;

    /** 商品id */
    goodsId?: number;

    /** 商品名字 */
    goodsName?: number;

    /** 页码 */
    page?: number;

    /** 每页大小 */
    pageSize?: number;

    /** 更新时间 */
    updateTime?: string;

    /** 图片地址 */
    url?: string;
  }

  export class CategoryEntity {
    /** 创建时间 */
    createTime?: string;

    /** 0-有效，1-删除 */
    del?: number;

    /** 0-启用，1-禁用 */
    enable?: number;

    /** 主键ID */
    id?: number;

    /** 分类名称 */
    name?: string;

    /** 更新时间 */
    updateTime?: string;

    /** 分类图片 */
    url?: string;
  }

  export class CategoryParam {
    /** etime */
    etime?: string;

    /** 分类名称 */
    name?: string;

    /** 页码 */
    page?: number;

    /** 每页大小 */
    pageSize?: number;

    /** stime */
    stime?: string;
  }

  export class CouponEntity {
    /** 兑换商品需要的优惠券个数 */
    convertNum?: number;

    /** 创建时间 */
    createTime?: string;

    /** 0-有效，1-删除 */
    del?: number;

    /** 0-启用，1-禁用 */
    enable?: number;

    /** 商品id */
    goodsId?: number;

    /** goodsName */
    goodsName?: string;

    /** 主键ID */
    id?: number;

    /** list */
    list?: Array<defs.CouponInfoEntity>;

    /** 名称 */
    name?: string;

    /** 总数，-1是不限制 */
    num?: number;

    /** 更新时间 */
    updateTime?: string;

    /** 有效期（天） */
    validity?: number;
  }

  export class CouponInfoEntity {
    /** 券码 */
    couponCode?: string;

    /** 优惠券id */
    couponId?: number;

    /** 创建时间 */
    createTime?: string;

    /** 0-有效，1-删除 */
    del?: number;

    /** 0-启用，1-禁用 */
    enable?: number;

    /** 商品id */
    goodsId?: number;

    /** 主键ID */
    id?: number;

    /** 名称 */
    name?: string;

    /** 总数，-1是不限制 */
    num?: number;

    /** 更新时间 */
    updateTime?: string;

    /** 有效期（天） */
    validity?: number;
  }

  export class CouponParam {
    /** 券码 */
    couponCode?: string;

    /** 名称 */
    name?: string;

    /** 页码 */
    page?: number;

    /** 每页大小 */
    pageSize?: number;
  }

  export class GoodsEntity {
    /** 分类id */
    categoryId?: number;

    /** categoryName */
    categoryName?: string;

    /** 创建时间 */
    createTime?: string;

    /** 0-有效，1-删除 */
    del?: number;

    /** 0-启用，1-禁用 */
    enable?: number;

    /** goodsSkuEntityList */
    goodsSkuEntityList?: Array<defs.GoodsSkuEntity>;

    /** 主键ID */
    id?: number;

    /** 详情图 */
    infourl?: string;

    /** 主图 */
    mainurl?: string;

    /** 名称 */
    name?: string;

    /** 已售 */
    paid?: number;

    /** 价格（分） */
    price?: number;

    /** 划线价格（分） */
    priceLine?: number;

    /** 门店id */
    shopId?: number;

    /** 权重（排序）从大到小 */
    sort?: number;

    /** 商品标题 */
    title?: string;

    /** 更新时间 */
    updateTime?: string;
  }

  export class GoodsParam {
    /** 0-启用，1-禁用 */
    enable?: number;

    /** 名称 */
    name?: string;

    /** 页码 */
    page?: number;

    /** 每页大小 */
    pageSize?: number;

    /** 商品标题 */
    title?: string;
  }

  export class GoodsSkuEntity {
    /** 颜色 */
    colour?: string;

    /** 创建时间 */
    createTime?: string;

    /** 0-有效，1-删除 */
    del?: number;

    /** 0-启用，1-禁用 */
    enable?: number;

    /** 商品id */
    goodsId?: number;

    /** 主键ID */
    id?: number;

    /** 价格（分） */
    price?: number;

    /** 划线价格（分） */
    priceLine?: number;

    /** 尺码 */
    size?: string;

    /** 库存 */
    sku?: number;

    /** 已售 */
    sold?: number;

    /** 更新时间 */
    updateTime?: string;

    /** 规格图 */
    url?: string;
  }

  export class IdParam {
    /** id */
    id?: number;
  }

  export class LiveRoomEntity {
    /** 创建时间 */
    createTime?: string;

    /** 0-有效，1-删除 */
    del?: number;

    /** 0-启用，1-禁用 */
    enable?: number;

    /** 主键ID */
    id?: number;

    /** 名称 */
    name?: string;

    /** 小程序直播间id */
    roomId?: number;

    /** 开始时间时间 */
    startTime?: string;

    /** 更新时间 */
    updateTime?: string;
  }

  export class LoginParam {
    /** 密码 */
    pwd?: string;

    /** 用户名 */
    username?: string;
  }

  export class OrderEntity {
    /** 创建时间 */
    createTime?: string;

    /** 0-有效，1-删除 */
    del?: number;

    /** 0-启用，1-禁用 */
    enable?: number;

    /** 主键ID */
    id?: number;

    /** list */
    list?: Array<defs.OrderInfoEntity>;

    /** 名称 */
    name?: string;

    /** 数量 */
    num?: number;

    /** 用户小程序id */
    openid?: string;

    /** 券码 */
    orderCode?: string;

    /** 订单编号 */
    orderNum?: string;

    /** outOrderId */
    outOrderId?: string;

    /** 支付价格（分） */
    payPrice?: number;

    /** 支付时间 */
    payTime?: string;

    /** shopEntity */
    shopEntity?: defs.ShopEntity;

    /** 门店id */
    shopId?: number;

    /** 0-未付款，1-已付款待取货，2-取消，3-完成，4-退货，5-退货完成。 */
    status?: number;

    /** 显示总价格（分） */
    totalPrice?: number;

    /** 更新时间 */
    updateTime?: string;

    /** 用户id */
    userId?: number;

    /** username */
    username?: string;
  }

  export class OrderInfoEntity {
    /** colour */
    colour?: string;

    /** 创建时间 */
    createTime?: string;

    /** 0-有效，1-删除 */
    del?: number;

    /** 0-启用，1-禁用 */
    enable?: number;

    /** 商品id */
    goodsId?: number;

    /** 主键ID */
    id?: number;

    /** 名称 */
    name?: string;

    /** 数量 */
    num?: number;

    /** 订单id */
    orderId?: number;

    /** 价格（分） */
    price?: number;

    /** 尺码 */
    size?: string;

    /** 库存id */
    skuId?: number;

    /** 更新时间 */
    updateTime?: string;

    /** 规格图 */
    url?: string;
  }

  export class OrderParam {
    /** 商品名称 */
    name?: string;

    /** 订单编号  */
    orderNum?: string;

    /** 页码 */
    page?: number;

    /** 每页大小 */
    pageSize?: number;

    /** 用户手机号 */
    phone?: string;

    /** 门店id */
    shopId?: number;

    /** 0-未付款，1-已付款待取货，2-取消，3-完成，4-退货中，5-退货完成。 */
    status?: number;

    /** 用户id */
    userId?: number;

    /** 用户昵称 */
    username?: string;
  }

  export class Page<T0 = any> {
    /** current */
    current?: number;

    /** pages */
    pages?: number;

    /** records */
    records: Array<T0>;

    /** size */
    size?: number;

    /** total */
    total?: number;
  }

  export class Result<T0 = any> {
    /** code */
    code?: number;

    /** data */
    data: T0;

    /** msg */
    msg?: string;

    /** time */
    time?: number;

    /** type */
    type?: number;
  }

  export class ShopEntity {
    /** 详细地址 */
    address?: string;

    /** 创建时间 */
    createTime?: string;

    /** 0-有效，1-删除 */
    del?: number;

    /** 0-启用，1-禁用 */
    enable?: number;

    /** 主键ID */
    id?: number;

    /** 店长名称 */
    keeperName?: string;

    /** 店长手机号 */
    keeperPhone?: string;

    /** 名称 */
    name?: string;

    /** openid */
    openid?: string;

    /** 展示手机号 */
    showPhone?: string;

    /** 更新时间 */
    updateTime?: string;
  }

  export class ShopParam {
    /** etime */
    etime?: string;

    /** 主键ID */
    id?: number;

    /** 店长名称 */
    keeperName?: string;

    /** 店长手机号 */
    keeperPhone?: string;

    /** 名称 */
    name?: string;

    /** 页码 */
    page?: number;

    /** 每页大小 */
    pageSize?: number;

    /** stime */
    stime?: string;
  }

  export class SysResourceEntity {
    /** 创建时间 */
    createTime?: string;

    /** 0-有效，1-删除 */
    del?: number;

    /** 0-启用，1-禁用 */
    enable?: number;

    /** 格式：png等 */
    form?: string;

    /** 高度 */
    height?: number;

    /** 主键 */
    id?: number;

    /** 连接的md5 */
    md5?: string;

    /** 名称 */
    name?: string;

    /** 资源大小 */
    size?: string;

    /** 类型，1-图片，2-apk */
    type?: number;

    /** 更新时间 */
    updateTime?: string;

    /** 连接 */
    url?: string;

    /** 宽度 */
    width?: number;
  }

  export class SysUserEntity {
    /** 创建时间 */
    createTime?: string;

    /** 0-有效，1-删除 */
    del?: number;

    /** 0-启用，1-禁用 */
    enable?: number;

    /** 主键ID */
    id?: number;

    /** 名称 */
    name?: string;

    /** pwd */
    pwd?: string;

    /** 更新时间 */
    updateTime?: string;
  }

  export class SysUserParam {
    /** 主键ID */
    id?: number;

    /** 名称 */
    name?: string;

    /** 页码 */
    page?: number;

    /** 每页大小 */
    pageSize?: number;
  }

  export class UserCouponEntity {
    /** 券码 */
    couponCode?: string;

    /** couponEntity */
    couponEntity?: defs.CouponEntity;

    /** 优惠券id */
    couponId?: number;

    /** 优惠券详情id */
    couponInfoId?: number;

    /** 创建时间 */
    createTime?: string;

    /** 0-有效，1-删除 */
    del?: number;

    /** 0-启用，1-禁用 */
    enable?: number;

    /** 截止时间 */
    endTime?: string;

    /** 主键ID */
    id?: number;

    /** 名称 */
    name?: string;

    /** 总数 */
    num?: number;

    /** 用户小程序id */
    openid?: string;

    /** 店铺id */
    shopId?: number;

    /** 0-未使用，1-已核销，2-已过期 */
    status?: number;

    /** 更新时间 */
    updateTime?: string;

    /** 用户id */
    userId?: number;
  }

  export class UserCouponParam {
    /** 券码 */
    couponCode?: string;

    /** 优惠券id */
    couponId?: number;

    /** 创建时间 */
    createTime?: string;

    /** 0-有效，1-删除 */
    del?: number;

    /** 0-启用，1-禁用 */
    enable?: number;

    /** 截止时间 */
    endTime?: string;

    /** 主键ID */
    id?: number;

    /** 名称 */
    name?: string;

    /** 总数 */
    num?: number;

    /** 用户小程序id */
    openid?: string;

    /** 页码 */
    page?: number;

    /** 每页大小 */
    pageSize?: number;

    /** 0-未使用，1-已核销，2-已过期 */
    status?: number;

    /** 更新时间 */
    updateTime?: string;

    /** 用户id */
    userId?: number;
  }

  export class UserEntity {
    /** 头像 */
    avatar?: string;

    /** 个人码 */
    code?: string;

    /** 创建时间 */
    createTime?: string;

    /** 0-有效，1-删除 */
    del?: number;

    /** 0-启用，1-禁用 */
    enable?: number;

    /** 主键ID */
    id?: number;

    /** 名称 */
    name?: string;

    /** openid */
    openid?: string;

    /** 手机号 */
    phone?: string;

    /** sex */
    sex?: string;

    /** shopEntity */
    shopEntity?: defs.ShopEntity;

    /** 门店id */
    shopId?: number;

    /** shopper */
    shopper?: boolean;

    /** 更新时间 */
    updateTime?: string;
  }

  export class UserParam {
    /** 主键ID */
    id?: number;

    /** 名称 */
    name?: string;

    /** openid */
    openid?: string;

    /** 页码 */
    page?: number;

    /** 每页大小 */
    pageSize?: number;

    /** 手机号 */
    phone?: string;

    /** 门店id */
    shopId?: number;
  }
}

declare namespace API {
  /**
   * 轮播相关接口
   */
  export namespace banner {
    /**
     * 列表
     * /sys/banner/list
     */
    export namespace list {
      export class Params {}

      export type Response = defs.BannerEntity;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.BannerParam,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 新增
     * /sys/banner/save
     */
    export namespace save {
      export class Params {}

      export type Response = defs.Result;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.BannerEntity,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 修改
     * /sys/banner/update
     */
    export namespace update {
      export class Params {}

      export type Response = defs.Result;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.BannerEntity,
        options?: any,
      ): Promise<Response>;
    }
  }

  /**
   * 平台分类相关接口
   */
  export namespace category {
    /**
     * 列表
     * /sys/category/list
     */
    export namespace list {
      export class Params {}

      export type Response = defs.CategoryEntity;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.CategoryParam,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 新增
     * /sys/category/save
     */
    export namespace save {
      export class Params {}

      export type Response = defs.Result;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.CategoryEntity,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 修改
     * /sys/category/update
     */
    export namespace update {
      export class Params {}

      export type Response = defs.Result;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.CategoryEntity,
        options?: any,
      ): Promise<Response>;
    }
  }

  /**
   * 优惠券相关接口
   */
  export namespace coupon {
    /**
     * 列表
     * /sys/coupon/list
     */
    export namespace list {
      export class Params {}

      export type Response = defs.CouponEntity;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.CouponParam,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 新增
     * /sys/coupon/save
     */
    export namespace save {
      export class Params {}

      export type Response = defs.Result;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.CouponEntity,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 修改
     * /sys/coupon/update
     */
    export namespace update {
      export class Params {}

      export type Response = defs.Result;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.CouponEntity,
        options?: any,
      ): Promise<Response>;
    }
  }

  /**
   * 商品相关接口
   */
  export namespace goods {
    /**
     * 删除
     * /sys/goods/del
     */
    export namespace del {
      export class Params {}

      export type Response = defs.Result;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.IdParam,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 商品详情
     * /sys/goods/info
     */
    export namespace info {
      export class Params {}

      export type Response = defs.GoodsEntity;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.IdParam,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 列表
     * /sys/goods/list
     */
    export namespace list {
      export class Params {}

      export type Response = defs.GoodsEntity;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.GoodsParam,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 新增
     * /sys/goods/save
     */
    export namespace save {
      export class Params {}

      export type Response = defs.Result;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.GoodsEntity,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 修改
     * /sys/goods/update
     */
    export namespace update {
      export class Params {}

      export type Response = defs.Result;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.GoodsEntity,
        options?: any,
      ): Promise<Response>;
    }
  }

  /**
   * 直播间相关接口
   */
  export namespace liveRoom {
    /**
     * 单条数据
     * /sys/liveroom/query
     */
    export namespace query {
      export class Params {}

      export type Response = defs.LiveRoomEntity;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 新增
     * /sys/liveroom/save
     */
    export namespace save {
      export class Params {}

      export type Response = defs.Result;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.LiveRoomEntity,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 修改
     * /sys/liveroom/update
     */
    export namespace update {
      export class Params {}

      export type Response = defs.Result;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.LiveRoomEntity,
        options?: any,
      ): Promise<Response>;
    }
  }

  /**
   * 用户订单相关接口
   */
  export namespace order {
    /**
     * 订单详情
     * /sys/order/info
     */
    export namespace info {
      export class Params {}

      export type Response = defs.OrderEntity;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.IdParam,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 列表
     * /sys/order/list
     */
    export namespace list {
      export class Params {}

      export type Response = defs.OrderEntity;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.OrderParam,
        options?: any,
      ): Promise<Response>;
    }
  }

  /**
   * 门店信息相关接口
   */
  export namespace shop {
    /**
     * 列表
     * /sys/shop/list
     */
    export namespace list {
      export class Params {}

      export type Response = defs.ShopEntity;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.ShopParam,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 新增
     * /sys/shop/save
     */
    export namespace save {
      export class Params {}

      export type Response = defs.Result;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.ShopEntity,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 修改
     * /sys/shop/update
     */
    export namespace update {
      export class Params {}

      export type Response = defs.Result;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.ShopEntity,
        options?: any,
      ): Promise<Response>;
    }
  }

  /**
   * 系统用户相关接口
   */
  export namespace sysUser {
    /**
     * 列表
     * /sys/sysuser/list
     */
    export namespace list {
      export class Params {}

      export type Response = defs.UserEntity;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.SysUserParam,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 登录
     * /sys/sysuser/login
     */
    export namespace login {
      export class Params {}

      export type Response = defs.Result;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.LoginParam,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 新增
     * /sys/sysuser/save
     */
    export namespace save {
      export class Params {}

      export type Response = defs.Result;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.SysUserEntity,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 修改
     * /sys/sysuser/update
     */
    export namespace update {
      export class Params {}

      export type Response = defs.Result;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.SysUserEntity,
        options?: any,
      ): Promise<Response>;
    }
  }

  /**
   * 图片上传接口
   */
  export namespace upload {
    /**
     * 上传
     * /sys/order/upload
     */
    export namespace upload {
      export class Params {
        /** 类型,1-商品主图，2-商品详情图，3-轮播图，0-测试图 */
        type?: number;
      }

      export type Response = defs.SysResourceEntity;

      export const init: Response;

      export function request(
        params: Params,
        form: FormData,
        options?: any,
      ): Promise<Response>;
    }
  }

  /**
   * 用户相关接口
   */
  export namespace user {
    /**
     * 列表
     * /sys/user/list
     */
    export namespace list {
      export class Params {}

      export type Response = defs.UserEntity;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.UserParam,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 列表
     * /sys/user/userCouponList
     */
    export namespace userCouponList {
      export class Params {}

      export type Response = defs.UserCouponEntity;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.UserCouponParam,
        options?: any,
      ): Promise<Response>;
    }
  }
}
