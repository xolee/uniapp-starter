# Store Helper

## Install

```bash
cd storehelper
pnpm install
# pnpm install --no-dev

# 创建特定运行环境文件
sudo cp .env .env.development
sudo cp .env .env.production

# 设定运行环境参数 .env/.env.development/.env.production
VITE_API_BASE_URL=demo.test

# 根据平台构建产品
# 更多平台命令请参考 package.json 文件
pnpm build:mp-weixin
```

## Commit

```bash
git add .
cz
```
