import Request from 'luch-request'
import { assign } from 'lodash-es'
import { ContentTypeEnum } from '@/enums/httpEnum'
import { HideLoading, Loading, Toast } from '@/utils/uni-api/prompt'
import { API_BASE_URL } from '@/utils/env'

const HEADER = {
  'Content-Type': ContentTypeEnum.JSON,
  'Accept': 'application/json, text/plain, */*',
}

function createRequest() {
  return new Request({
    baseURL: API_BASE_URL,
    header: HEADER,
    custom: {
      auth: true,
      loading: true,
    },
  })
}

const luchRequest = createRequest()

/**
 * 请求拦截器
 */
luchRequest.interceptors.request.use(
  (options) => {
    if (options.custom?.loading)
      Loading()
    if (options.custom?.auth) {
      const token = false
      if (!token) {
        Toast('请先登录')
        // token 不存在跳转到登录页
        return Promise.reject(options)
      }
      options.header = assign(options.header, {
        authorization: `Bearer ${token}`,
      })
    }
    return options
  },
  options => Promise.reject(options),
)

/**
 * 响应拦截器
 */
luchRequest.interceptors.response.use(
  // onFulfilled，对响应成功做点什么
  // 可使用 async await 做异步操作
  (response) => {
    HideLoading()
    return Promise.resolve(response)
    // TODO-自定义的错误响应
  },
  // onRejected (statusCode !== 200||201)
  // 对响应错误做点什么
  (error) => {
    HideLoading()
    return Promise.reject(error)
  },
)

export default luchRequest
