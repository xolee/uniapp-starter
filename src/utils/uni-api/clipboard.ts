/**
 * @description 设置系统剪贴板的内容
 * @param data 需要设置的内容
 * @param showToast 配置是否弹出提示，默认弹出提示
 * @constructor
 */
export function SetClipboardData(data: string, showToast = true) {
  return new Promise((resolve, reject) => {
    void uni.setClipboardData({
      data,
      showToast,
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      },
    })
  })
}

/**
 * @description 获取系统剪贴板内容
 * @constructor
 */
export function GetClipboardData() {
  return new Promise((resolve, reject) => {
    uni.getClipboardData({
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      },
    })
  })
}
