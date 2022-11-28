# sync-time

sync server time

```ts
import { sync, time, date } from 'sync-time'

async function getJSON() {
  let url = 'https://www.npmjs.com/search?q=';
  try {
    let response = await fetch(url);
    return response.headers.get('date')
  } catch (error) {
    console.log('Request Failed', error);
  }
}

getJson().then(res => {
    sync(res)
})

now()

date()
```