let diffMillisecond: number = 0

const getCurrentTime = (): number => (new Date()).getTime();

const sync = (time: Date | string): void => {
  if (!time) {
    diffMillisecond = 0
    return
  }

  const syncTime = time instanceof Date ? time.getTime() : Date.parse(time)
  if (Number.isNaN(syncTime)) {
    return
  }

  diffMillisecond = syncTime - getCurrentTime()
}

const time = (): number => getCurrentTime() + diffMillisecond

const date = (): Date => new Date(time())


export {
  sync,
  time,
  date
}