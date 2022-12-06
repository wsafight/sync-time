# sync-time

Read this in other languages: [English](https://github.com/wsafight/sync-time/blob/main/README.EN.md)

同步时间的工具库

开发历程可以参考博客 [手写一个同步服务端时间的小工具](https://github.com/wsafight/personBlog/issues/51)

```ts
import { sync, time, date } from 'sync-time'

async function getJSON() {
  let url = 'https://www.npmjs.com/search?q=';
  let response
  try {
    response = await fetch(url);
    // 响应头部通常会有 date 数据
    console.log(response.headers.get('date'))
    // 把响应头时间作为服务器时间，调用 sync 同步数据
    sync(response.headers.get('date'))
  } catch (error) {
  }
  return response.body
}

getJson()

// => 返回数字，即修正好的毫秒 getTime
time()
// 1670345143730

// 返回 Date，new Date(time())
date()
// Wed Dec 07 2022 00:46:47 GMT+0800 (中国标准时间)
```