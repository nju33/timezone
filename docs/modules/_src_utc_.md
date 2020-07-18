[@nju33/timezone](../README.md) › [Globals](../globals.md) › ["src/utc"](_src_utc_.md)

# Module: "src/utc"

## Index

### Functions

* [utc](_src_utc_.md#utc)

## Functions

###  utc

▸ **utc**(`ts`: number): *object*

*Defined in [src/utc.ts:12](https://github.com/nju33/timezone/blob/9c97e60/src/utc.ts#L12)*

Constructor to create an object that handles the UTC

**`example`** 

```
utc(ts).iso8601 // is '2020-01-01T00:00:00.000Z'
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ts` | number | A timestamp  |

**Returns:** *object*

* **date**: *number*

* **hours**: *number*

* **iso8601**: *string*

* **milliSeconds**: *number*

* **minutes**: *number*

* **month**: *number*

* **seconds**: *number*

* **year**: *number*
