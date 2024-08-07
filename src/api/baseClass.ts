export class BannerEntity {
  /** 创建时间 */
  createTime = '';

  /** 0-有效，1-删除 */
  del = undefined;

  /** 0-启用，1-禁用 */
  enable = undefined;

  /** 商品id */
  goodsId = undefined;

  /** goodsName */
  goodsName = '';

  /** 主键ID */
  id = undefined;

  /** 更新时间 */
  updateTime = '';

  /** 图片地址 */
  url = '';
}

export class BannerParam {
  /** 创建时间 */
  createTime = '';

  /** 0-有效，1-删除 */
  del = undefined;

  /** 0-启用，1-禁用 */
  enable = undefined;

  /** 商品id */
  goodsId = undefined;

  /** 商品名字 */
  goodsName = undefined;

  /** 页码 */
  page = undefined;

  /** 每页大小 */
  pageSize = undefined;

  /** 更新时间 */
  updateTime = '';

  /** 图片地址 */
  url = '';
}

export class CategoryEntity {
  /** 创建时间 */
  createTime = '';

  /** 0-有效，1-删除 */
  del = undefined;

  /** 0-启用，1-禁用 */
  enable = undefined;

  /** 主键ID */
  id = undefined;

  /** 分类名称 */
  name = '';

  /** 更新时间 */
  updateTime = '';

  /** 分类图片 */
  url = '';
}

export class CategoryParam {
  /** etime */
  etime = '';

  /** 分类名称 */
  name = '';

  /** 页码 */
  page = undefined;

  /** 每页大小 */
  pageSize = undefined;

  /** stime */
  stime = '';
}

export class CouponEntity {
  /** 兑换商品需要的优惠券个数 */
  convertNum = undefined;

  /** 创建时间 */
  createTime = '';

  /** 0-有效，1-删除 */
  del = undefined;

  /** 0-启用，1-禁用 */
  enable = undefined;

  /** 商品id */
  goodsId = undefined;

  /** goodsName */
  goodsName = '';

  /** 主键ID */
  id = undefined;

  /** list */
  list = [];

  /** 名称 */
  name = '';

  /** 总数，-1是不限制 */
  num = undefined;

  /** 更新时间 */
  updateTime = '';

  /** 有效期（天） */
  validity = undefined;
}

export class CouponInfoEntity {
  /** 券码 */
  couponCode = '';

  /** 优惠券id */
  couponId = undefined;

  /** 创建时间 */
  createTime = '';

  /** 0-有效，1-删除 */
  del = undefined;

  /** 0-启用，1-禁用 */
  enable = undefined;

  /** 商品id */
  goodsId = undefined;

  /** 主键ID */
  id = undefined;

  /** 名称 */
  name = '';

  /** 总数，-1是不限制 */
  num = undefined;

  /** 更新时间 */
  updateTime = '';

  /** 有效期（天） */
  validity = undefined;
}

export class CouponParam {
  /** 券码 */
  couponCode = '';

  /** 名称 */
  name = '';

  /** 页码 */
  page = undefined;

  /** 每页大小 */
  pageSize = undefined;
}

export class GoodsEntity {
  /** 分类id */
  categoryId = undefined;

  /** categoryName */
  categoryName = '';

  /** 创建时间 */
  createTime = '';

  /** 0-有效，1-删除 */
  del = undefined;

  /** 0-启用，1-禁用 */
  enable = undefined;

  /** goodsSkuEntityList */
  goodsSkuEntityList = [];

  /** 主键ID */
  id = undefined;

  /** 详情图 */
  infourl = '';

  /** 主图 */
  mainurl = '';

  /** 名称 */
  name = '';

  /** 已售 */
  paid = undefined;

  /** 价格（分） */
  price = undefined;

  /** 划线价格（分） */
  priceLine = undefined;

  /** 门店id */
  shopId = undefined;

  /** 权重（排序）从大到小 */
  sort = undefined;

  /** 商品标题 */
  title = '';

  /** 更新时间 */
  updateTime = '';
}

export class GoodsParam {
  /** 0-启用，1-禁用 */
  enable = undefined;

  /** 名称 */
  name = '';

  /** 页码 */
  page = undefined;

  /** 每页大小 */
  pageSize = undefined;

  /** 商品标题 */
  title = '';
}

export class GoodsSkuEntity {
  /** 颜色 */
  colour = '';

  /** 创建时间 */
  createTime = '';

  /** 0-有效，1-删除 */
  del = undefined;

  /** 0-启用，1-禁用 */
  enable = undefined;

  /** 商品id */
  goodsId = undefined;

  /** 主键ID */
  id = undefined;

  /** 价格（分） */
  price = undefined;

  /** 划线价格（分） */
  priceLine = undefined;

  /** 尺码 */
  size = '';

  /** 库存 */
  sku = undefined;

  /** 已售 */
  sold = undefined;

  /** 更新时间 */
  updateTime = '';

  /** 规格图 */
  url = '';
}

export class IdParam {
  /** id */
  id = undefined;
}

export class LiveRoomEntity {
  /** 创建时间 */
  createTime = '';

  /** 0-有效，1-删除 */
  del = undefined;

  /** 0-启用，1-禁用 */
  enable = undefined;

  /** 主键ID */
  id = undefined;

  /** 名称 */
  name = '';

  /** 小程序直播间id */
  roomId = undefined;

  /** 开始时间时间 */
  startTime = '';

  /** 更新时间 */
  updateTime = '';
}

export class LoginParam {
  /** 密码 */
  pwd = '';

  /** 用户名 */
  username = '';
}

export class OrderEntity {
  /** 创建时间 */
  createTime = '';

  /** 0-有效，1-删除 */
  del = undefined;

  /** 0-启用，1-禁用 */
  enable = undefined;

  /** 主键ID */
  id = undefined;

  /** list */
  list = [];

  /** 名称 */
  name = '';

  /** 数量 */
  num = undefined;

  /** 用户小程序id */
  openid = '';

  /** 券码 */
  orderCode = '';

  /** 订单编号 */
  orderNum = '';

  /** outOrderId */
  outOrderId = '';

  /** 支付价格（分） */
  payPrice = undefined;

  /** 支付时间 */
  payTime = '';

  /** shopEntity */
  shopEntity = new ShopEntity();

  /** 门店id */
  shopId = undefined;

  /** 0-未付款，1-已付款待取货，2-取消，3-完成，4-退货，5-退货完成。 */
  status = undefined;

  /** 显示总价格（分） */
  totalPrice = undefined;

  /** 更新时间 */
  updateTime = '';

  /** 用户id */
  userId = undefined;

  /** username */
  username = '';
}

export class OrderInfoEntity {
  /** colour */
  colour = '';

  /** 创建时间 */
  createTime = '';

  /** 0-有效，1-删除 */
  del = undefined;

  /** 0-启用，1-禁用 */
  enable = undefined;

  /** 商品id */
  goodsId = undefined;

  /** 主键ID */
  id = undefined;

  /** 名称 */
  name = '';

  /** 数量 */
  num = undefined;

  /** 订单id */
  orderId = undefined;

  /** 价格（分） */
  price = undefined;

  /** 尺码 */
  size = '';

  /** 库存id */
  skuId = undefined;

  /** 更新时间 */
  updateTime = '';

  /** 规格图 */
  url = '';
}

export class OrderParam {
  /** 商品名称 */
  name = '';

  /** 订单编号  */
  orderNum = '';

  /** 页码 */
  page = undefined;

  /** 每页大小 */
  pageSize = undefined;

  /** 用户手机号 */
  phone = '';

  /** 门店id */
  shopId = undefined;

  /** 0-未付款，1-已付款待取货，2-取消，3-完成，4-退货中，5-退货完成。 */
  status = undefined;

  /** 用户id */
  userId = undefined;

  /** 用户昵称 */
  username = '';
}

export class Page {
  /** current */
  current = undefined;

  /** pages */
  pages = undefined;

  /** records */
  records = [];

  /** size */
  size = undefined;

  /** total */
  total = undefined;
}

export class Result {
  /** code */
  code = undefined;

  /** data */
  data = new GoodsEntity();

  /** msg */
  msg = '';

  /** time */
  time = undefined;

  /** type */
  type = undefined;
}

export class ShopEntity {
  /** 详细地址 */
  address = '';

  /** 创建时间 */
  createTime = '';

  /** 0-有效，1-删除 */
  del = undefined;

  /** 0-启用，1-禁用 */
  enable = undefined;

  /** 主键ID */
  id = undefined;

  /** 店长名称 */
  keeperName = '';

  /** 店长手机号 */
  keeperPhone = '';

  /** 名称 */
  name = '';

  /** openid */
  openid = '';

  /** 展示手机号 */
  showPhone = '';

  /** 更新时间 */
  updateTime = '';
}

export class ShopParam {
  /** etime */
  etime = '';

  /** 主键ID */
  id = undefined;

  /** 店长名称 */
  keeperName = '';

  /** 店长手机号 */
  keeperPhone = '';

  /** 名称 */
  name = '';

  /** 页码 */
  page = undefined;

  /** 每页大小 */
  pageSize = undefined;

  /** stime */
  stime = '';
}

export class SysResourceEntity {
  /** 创建时间 */
  createTime = '';

  /** 0-有效，1-删除 */
  del = undefined;

  /** 0-启用，1-禁用 */
  enable = undefined;

  /** 格式：png等 */
  form = '';

  /** 高度 */
  height = undefined;

  /** 主键 */
  id = undefined;

  /** 连接的md5 */
  md5 = '';

  /** 名称 */
  name = '';

  /** 资源大小 */
  size = '';

  /** 类型，1-图片，2-apk */
  type = undefined;

  /** 更新时间 */
  updateTime = '';

  /** 连接 */
  url = '';

  /** 宽度 */
  width = undefined;
}

export class SysUserEntity {
  /** 创建时间 */
  createTime = '';

  /** 0-有效，1-删除 */
  del = undefined;

  /** 0-启用，1-禁用 */
  enable = undefined;

  /** 主键ID */
  id = undefined;

  /** 名称 */
  name = '';

  /** pwd */
  pwd = '';

  /** 更新时间 */
  updateTime = '';
}

export class SysUserParam {
  /** 主键ID */
  id = undefined;

  /** 名称 */
  name = '';

  /** 页码 */
  page = undefined;

  /** 每页大小 */
  pageSize = undefined;
}

export class UserCouponEntity {
  /** 券码 */
  couponCode = '';

  /** couponEntity */
  couponEntity = new CouponEntity();

  /** 优惠券id */
  couponId = undefined;

  /** 优惠券详情id */
  couponInfoId = undefined;

  /** 创建时间 */
  createTime = '';

  /** 0-有效，1-删除 */
  del = undefined;

  /** 0-启用，1-禁用 */
  enable = undefined;

  /** 截止时间 */
  endTime = '';

  /** 主键ID */
  id = undefined;

  /** 名称 */
  name = '';

  /** 总数 */
  num = undefined;

  /** 用户小程序id */
  openid = '';

  /** 店铺id */
  shopId = undefined;

  /** 0-未使用，1-已核销，2-已过期 */
  status = undefined;

  /** 更新时间 */
  updateTime = '';

  /** 用户id */
  userId = undefined;
}

export class UserCouponParam {
  /** 券码 */
  couponCode = '';

  /** 优惠券id */
  couponId = undefined;

  /** 创建时间 */
  createTime = '';

  /** 0-有效，1-删除 */
  del = undefined;

  /** 0-启用，1-禁用 */
  enable = undefined;

  /** 截止时间 */
  endTime = '';

  /** 主键ID */
  id = undefined;

  /** 名称 */
  name = '';

  /** 总数 */
  num = undefined;

  /** 用户小程序id */
  openid = '';

  /** 页码 */
  page = undefined;

  /** 每页大小 */
  pageSize = undefined;

  /** 0-未使用，1-已核销，2-已过期 */
  status = undefined;

  /** 更新时间 */
  updateTime = '';

  /** 用户id */
  userId = undefined;
}

export class UserEntity {
  /** 头像 */
  avatar = '';

  /** 个人码 */
  code = '';

  /** 创建时间 */
  createTime = '';

  /** 0-有效，1-删除 */
  del = undefined;

  /** 0-启用，1-禁用 */
  enable = undefined;

  /** 主键ID */
  id = undefined;

  /** 名称 */
  name = '';

  /** openid */
  openid = '';

  /** 手机号 */
  phone = '';

  /** sex */
  sex = '';

  /** shopEntity */
  shopEntity = new ShopEntity();

  /** 门店id */
  shopId = undefined;

  /** shopper */
  shopper = false;

  /** 更新时间 */
  updateTime = '';
}

export class UserParam {
  /** 主键ID */
  id = undefined;

  /** 名称 */
  name = '';

  /** openid */
  openid = '';

  /** 页码 */
  page = undefined;

  /** 每页大小 */
  pageSize = undefined;

  /** 手机号 */
  phone = '';

  /** 门店id */
  shopId = undefined;
}
