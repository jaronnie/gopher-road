# 如何给 gopher-road 贡献

## fork

fork gopher-road 仓

## clone

fork 完成后你的个人仓库下存在 `gopher-road`仓

```shell
git clone git@github.com/xx/gopher-road

// 创建分支
git checkout -b patch-1
```

## docs

如需路由配置, 请参照 `docs/.vuepress/config.js` 对各个模块的设置进行对应的更新或追加

## 本地测试文档

如果本地存在 node 环境

```shell
npm i
npm run docs:dev
# 浏览器访问 localhost:8080
```

docker-compose 部署测试

```shell
docker-compose up
# 浏览器访问 localhost:28080
```

## pr

测试完成后在 github 页面提交 pr 即可.