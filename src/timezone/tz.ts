import { AfricaCairo } from './africa-cairo'
import { AfricaKinshasa } from './africa-kinshasa'
import { AfricaLagos } from './africa-lagos'
import { AmericaArgentinaBuenosAires } from './america-argentina-buenos_aires'
import { AmericaBogota } from './america-bogota'
import { AmericaLima } from './america-lima'
import { AmericaLosAngeles } from './america-los-angeles'
import { AmericaMexicoCity } from './america-mexico-city'
import { AmericaNewYork } from './america-new-york'
import { AmericaSaoPaulo } from './america-sao-paulo'
import { AsiaBaghdad } from './asia-baghdad'
import { AsiaDhaka } from './asia-dhaka'
import { AsiaHongKong } from './asia-hong-kong'
import { AsiaJakarta } from './asia-jakarta'
import { AsiaKarachi } from './asia-karachi'
import { AsiaKolkata } from './asia-kolkata'
import { AsiaSeoul } from './asia-seoul'
import { AsiaShanghai } from './asia-shanghai'
import { AsiaTaipei } from './asia-taipei'
import { AsiaTehran } from './asia-tehran'
import { AsiaTokyo } from './asia-tokyo'
import { EuropeLondon } from './europe-london'
import { EuropeMoscow } from './europe-moscow'
import { EuropeParis } from './europe-paris'

export type TzNames =
  | 'Africa/Cairo'
  | 'Africa/Kinshasa'
  | 'Africa/Lagos'
  | 'America/Los_Angeles'
  | 'America/Mexico_City'
  | 'America/New_York'
  | 'America/Sao_Paulo'
  | 'America/Argentina/Buenos_Aires'
  | 'America/Lima'
  | 'America/Bogota'
  | 'Asia/Shanghai'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Asia/Shanghai'
  | 'Asia/Hong_Kong'
  | 'Asia/Kolkata'
  | 'Asia/Taipei'
  | 'Asia/Jakarta'
  | 'Asia/Tehran'
  | 'Asia/Baghdad'
  | 'Asia/Dhaka'
  | 'Asia/Karachi'
  | 'Europe/London'
  | 'Europe/Paris'
  | 'Europe/Moscow'

/**
 * Get time zone offset time in milliseconds.
 *
 * @param tzName - A time zone name
 *
 * @example
 *
 * ```
 * const ts = 'THIS VALUE IS AN UTC TIMESTAMP'
 *
 * const added9Hours = ts + getTzOffset('Asia/Tokyo')
 * ```
 */
export function getTzOffset(tzName: TzNames): number {
  switch (tzName) {
    case 'Africa/Cairo': {
      return AfricaCairo
    }
    case 'Africa/Kinshasa': {
      return AfricaKinshasa
    }
    case 'Africa/Lagos': {
      return AfricaLagos
    }
    case 'America/Los_Angeles': {
      return AmericaLosAngeles
    }
    case 'America/Mexico_City': {
      return AmericaMexicoCity
    }
    case 'America/New_York': {
      return AmericaNewYork
    }
    case 'America/Sao_Paulo': {
      return AmericaSaoPaulo
    }
    case 'America/Argentina/Buenos_Aires': {
      return AmericaArgentinaBuenosAires
    }
    case 'America/Lima': {
      return AmericaLima
    }
    case 'America/Bogota': {
      return AmericaBogota
    }
    case 'Asia/Tokyo': {
      return AsiaTokyo
    }
    case 'Asia/Seoul': {
      return AsiaSeoul
    }
    case 'Asia/Shanghai': {
      return AsiaShanghai
    }
    case 'Asia/Hong_Kong': {
      return AsiaHongKong
    }
    case 'Asia/Kolkata': {
      return AsiaKolkata
    }
    case 'Asia/Taipei': {
      return AsiaTaipei
    }
    case 'Asia/Jakarta': {
      return AsiaJakarta
    }
    case 'Asia/Tehran': {
      return AsiaTehran
    }
    case 'Asia/Baghdad': {
      return AsiaBaghdad
    }
    case 'Asia/Dhaka': {
      return AsiaDhaka
    }
    case 'Asia/Karachi': {
      return AsiaKarachi
    }
    case 'Europe/London': {
      return EuropeLondon
    }
    case 'Europe/Paris': {
      return EuropeParis
    }
    case 'Europe/Moscow': {
      return EuropeMoscow
    }
  }
}
