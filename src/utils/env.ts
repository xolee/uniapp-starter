/**
 * @description: 开发者模式
 */
export const devMode = 'development'

/**
 * @description: 生产模式
 */
export const prodMode = 'production'

/**
 * @description: 获取环境模式
 */
export function getEnvMode(): string {
  return getEnvValue<string>('MODE')
}

/**
 * @description: 获取自定义环境模式
 */
// export function getEnvMode(): string {
//   return isDevMode() ? devMode : prodMode
// }

/**
 * @description: 获取自定义环境变量
 */
export function getEnvValue<T = any>(key: string): T {
  return (import.meta.env as any)[key] as T
}

/**
 * @description: 是否为开发环境
 */
export function isDevMode(): boolean {
  return getEnvValue<boolean>('DEV')
}

/**
 * @description: 是否为生产环境
 */
export function isProdMode(): boolean {
  return getEnvValue<boolean>('PROD')
}

/**
 * @description: 获取环境变量 VITE_API_BASE_URL 的值
 */
export function getApiBaseUrl(): string {
  return getEnvValue<string>('VITE_API_BASE_URL')
}

/**
 * @description: 获取环境变量 VITE_API_UPLOAD_URL 的值
 */
export function getApiUploadUrl(): string {
  return getApiBaseUrl() + getEnvValue<string>('VITE_API_UPLOAD_URL')
}
