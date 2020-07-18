[@nju33/timezone](../README.md) › [Globals](../globals.md) › ["src/timezone/tz"](_src_timezone_tz_.md)

# Module: "src/timezone/tz"

## Index

### Type aliases

* [TzNames](_src_timezone_tz_.md#tznames)

### Functions

* [getTzOffset](_src_timezone_tz_.md#gettzoffset)

## Type aliases

###  TzNames

Ƭ **TzNames**: *"Africa/Cairo" | "Africa/Kinshasa" | "Africa/Lagos" | "America/Los_Angeles" | "America/Mexico_City" | "America/New_York" | "America/Sao_Paulo" | "America/Argentina/Buenos_Aires" | "America/Lima" | "America/Bogota" | "Asia/Shanghai" | "Asia/Tokyo" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Hong_Kong" | "Asia/Kolkata" | "Asia/Taipei" | "Asia/Jakarta" | "Asia/Tehran" | "Asia/Baghdad" | "Asia/Dhaka" | "Asia/Karachi" | "Europe/London" | "Europe/Paris" | "Europe/Moscow"*

*Defined in [src/timezone/tz.ts:26](https://github.com/nju33/timezone/blob/84669d2/src/timezone/tz.ts#L26)*

## Functions

###  getTzOffset

▸ **getTzOffset**(`tzName`: [TzNames](_src_timezone_tz_.md#tznames)): *number*

*Defined in [src/timezone/tz.ts:66](https://github.com/nju33/timezone/blob/84669d2/src/timezone/tz.ts#L66)*

Get time zone offset time in milliseconds.

**`example`** 

```
const ts = 'THIS VALUE IS AN UTC TIMESTAMP'

const added9Hours = ts + getTzOffset('Asia/Tokyo')
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tzName` | [TzNames](_src_timezone_tz_.md#tznames) | A time zone name  |

**Returns:** *number*
