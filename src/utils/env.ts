/**
 * @description: 开发者模式
 */
const dEV_MODE = 'development'

/**
 * @description: 生产模式
 */
const PROD_MODE = 'production'

/**
 * @description: 获取自定义环境变量
 */
function getEnvValue<T = any>(key: string): T {
  return (import.meta.env as any)[key] as T
}

/**
 * @description: 是否为开发环境
 */
const iS_DEV_MODE = getEnvValue<boolean>('DEV')

/**
 * @description: 是否为生产环境
 */
const iS_PROD_MODE = getEnvValue<boolean>('PROD')

/**
 * @description: 获取 API BASE URL 路径
 */
const API_BASE_URL = getEnvValue<string>('VITE_API_BASE_URL')

/**
 * @description: 获取环境模式
 */
function getEnvMode(): string {
  return getEnvValue<string>('MODE')
}

export {
  dEV_MODE,
  PROD_MODE,
  iS_DEV_MODE,
  iS_PROD_MODE,
  API_BASE_URL,
  getEnvMode,
}
