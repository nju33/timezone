[@nju33/timezone](../README.md) › [Globals](../globals.md) › ["src/time"](_src_time_.md)

# Module: "src/time"

## Index

### Variables

* [ONE_HOUR](_src_time_.md#const-one_hour)
* [ONE_MILLISECOND](_src_time_.md#const-one_millisecond)
* [ONE_MINUTE](_src_time_.md#const-one_minute)
* [ONE_SECOND](_src_time_.md#const-one_second)

### Functions

* [diffTime](_src_time_.md#difftime)

## Variables

### `Const` ONE_HOUR

• **ONE_HOUR**: *number* = 60 * ONE_MINUTE

*Defined in [src/time.ts:4](https://github.com/nju33/timezone/blob/84669d2/src/time.ts#L4)*

___

### `Const` ONE_MILLISECOND

• **ONE_MILLISECOND**: *1* = 1

*Defined in [src/time.ts:1](https://github.com/nju33/timezone/blob/84669d2/src/time.ts#L1)*

___

### `Const` ONE_MINUTE

• **ONE_MINUTE**: *number* = 60 * ONE_SECOND

*Defined in [src/time.ts:3](https://github.com/nju33/timezone/blob/84669d2/src/time.ts#L3)*

___

### `Const` ONE_SECOND

• **ONE_SECOND**: *number* = 1000 * ONE_MILLISECOND

*Defined in [src/time.ts:2](https://github.com/nju33/timezone/blob/84669d2/src/time.ts#L2)*

## Functions

###  diffTime

▸ **diffTime**(`endTs`: number, `startTs`: number): *string*

*Defined in [src/time.ts:27](https://github.com/nju33/timezone/blob/84669d2/src/time.ts#L27)*

**`example`** 

```ts
// If endTs is in the past, an error occurs
const endTs = new Date('2020-01-01:19:59:35.058Z').getTime()
const startTs = new Date('2020-01-02:12:43:01.999Z').getTime()
diffTime(endTs, startTs)
// TypeError: endTs should be in the future rather than startTs

// The following is correct
const endTs = new Date('2020-01-02:12:43:01.999Z').getTime()
const startTs = new Date('2020-01-01:19:59:35.058Z').getTime()
diffTime(endTs, startTs)
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`endTs` | number | a timestamp |
`startTs` | number | a timestamp |

**Returns:** *string*

`hh:MM:ss.SSS` syntax time
