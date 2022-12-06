import {
  sync,
  time,
  date
} from '../src/index'

describe('sync-time', () => {
  it('time-str', () => {
    sync('Sat Oct 01 2022 00:00:00 GMT+0800')
    expect(time()).toEqual((new Date('2022-10-01 00:00:00')).getTime())
  })

  it('date-str', () => {
    sync('Sat Oct 01 2022 00:00:00 GMT+0800')
    expect(date()).toEqual((new Date('2022-10-01 00:00:00')))
  })

  it('time-date', () => {
    sync(new Date('2022-10-01 00:00:00'))
    
    expect(time()).toEqual((new Date('2022-10-01 00:00:00')).getTime())
  })

  it('date-date', () => {
    sync(new Date('2022-10-01 00:00:00'))
    expect(date()).toEqual((new Date('2022-10-01 00:00:00')))
  })
})