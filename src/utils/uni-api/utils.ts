/**
 * rpx 换算为 px
 * @param upx
 */
export function rpx2px(upx: number) {
  return uni.upx2px(upx)
}

/**
 * px 换算为 rpx
 * @param px 单位
 */
export function px2rpx(px: number) {
  return px / (uni.upx2px(100) / 100)
}
