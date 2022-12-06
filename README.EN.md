# sync-time

A library of tools for synchronizing time

```ts
import { sync, time, date } from 'sync-time'

async function getJSON() {
  let url = 'https://www.npmjs.com/search?q=';
  let response
  try {
    response = await fetch(url);
    // The response header usually has date data
    console.log(response.headers.get('date'))
    // Use the response header time as the server time, call sync to synchronize data
    sync(response.headers.get('date'))
  } catch (error) {
  }
  return response.body
}

getJson()

// => Returns number, i.e. corrected milliseconds getTime
time()
// 1670345143730

// return Date, new Date(time())
date()
// Wed Dec 07 2022 00:46:47 GMT+0800 (中国标准时间)
```