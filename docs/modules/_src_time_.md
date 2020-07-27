[@nju33/timezone](../README.md) › [Globals](../globals.md) › ["src/time"](_src_time_.md)

# Module: "src/time"

## Index

### References

* [diffTime](_src_time_.md#difftime)

### Type aliases

* [DiffTimeFormatKinds](_src_time_.md#difftimeformatkinds)

### Variables

* [ONE_HOUR](_src_time_.md#const-one_hour)
* [ONE_MILLISECOND](_src_time_.md#const-one_millisecond)
* [ONE_MINUTE](_src_time_.md#const-one_minute)
* [ONE_SECOND](_src_time_.md#const-one_second)

### Functions

* [diffStringTime](_src_time_.md#diffstringtime)
* [diffTimeFormat](_src_time_.md#difftimeformat)

## References

###  diffTime

• **diffTime**:

## Type aliases

###  DiffTimeFormatKinds

Ƭ **DiffTimeFormatKinds**: *"HH" | "HH:mm" | "HH:mm:ss" | "HH:mm:ss.SSS"*

*Defined in [src/time.ts:6](https://github.com/nju33/timezone/blob/f7057aa/src/time.ts#L6)*

## Variables

### `Const` ONE_HOUR

• **ONE_HOUR**: *number* = 60 * ONE_MINUTE

*Defined in [src/time.ts:4](https://github.com/nju33/timezone/blob/f7057aa/src/time.ts#L4)*

___

### `Const` ONE_MILLISECOND

• **ONE_MILLISECOND**: *1* = 1

*Defined in [src/time.ts:1](https://github.com/nju33/timezone/blob/f7057aa/src/time.ts#L1)*

___

### `Const` ONE_MINUTE

• **ONE_MINUTE**: *number* = 60 * ONE_SECOND

*Defined in [src/time.ts:3](https://github.com/nju33/timezone/blob/f7057aa/src/time.ts#L3)*

___

### `Const` ONE_SECOND

• **ONE_SECOND**: *number* = 1000 * ONE_MILLISECOND

*Defined in [src/time.ts:2](https://github.com/nju33/timezone/blob/f7057aa/src/time.ts#L2)*

## Functions

###  diffStringTime

▸ **diffStringTime**(`end`: string, `start`: string, `format`: [DiffTimeFormatKinds](_src_time_.md#difftimeformatkinds)): *number*

*Defined in [src/time.ts:73](https://github.com/nju33/timezone/blob/f7057aa/src/time.ts#L73)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`end` | string | - |
`start` | string | - |
`format` | [DiffTimeFormatKinds](_src_time_.md#difftimeformatkinds) | "HH:mm:ss.SSS" |

**Returns:** *number*

___

###  diffTimeFormat

▸ **diffTimeFormat**(`endTs`: number, `startTs`: number, `format`: [DiffTimeFormatKinds](_src_time_.md#difftimeformatkinds)): *string*

*Defined in [src/time.ts:30](https://github.com/nju33/timezone/blob/f7057aa/src/time.ts#L30)*

**`example`** 

```ts
// If endTs is in the past, an error occurs
const endTs = new Date('2020-01-01:19:59:35.058Z').getTime()
const startTs = new Date('2020-01-02:12:43:01.999Z').getTime()
DiffTimeFormat(endTs, startTs)
// TypeError: endTs should be in the future rather than startTs

// The following is correct
const endTs = new Date('2020-01-02:12:43:01.999Z').getTime()
const startTs = new Date('2020-01-01:19:59:35.058Z').getTime()
DiffTimeFormat(endTs, startTs)
```

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`endTs` | number | - | a timestamp |
`startTs` | number | - | a timestamp |
`format` | [DiffTimeFormatKinds](_src_time_.md#difftimeformatkinds) | "HH:mm:ss.SSS" | output format |

**Returns:** *string*

`hh:MM:ss.SSS` syntax time
