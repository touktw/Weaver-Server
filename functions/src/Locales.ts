import { Serializable, JsonProperty } from "typescript-json-serializer"
import { Locale } from 'locale-enum'
import { Money, Currencies } from 'ts-money'
// const Locale = require('locale-enum')


@Serializable()
export class Currency {
    constructor(
        @JsonProperty()
        public readonly symbol: string,

        @JsonProperty()
        public readonly code: string,

        @JsonProperty()
        public readonly name: string
    ) { }
}

@Serializable()
export class LocaleCurrency {
    constructor(
        @JsonProperty()
        public readonly locale: Locale,

        @JsonProperty()
        public readonly currency: Currency
    ) { }
}


export const supportedLocales = [
    new LocaleCurrency(Locale.en_US, new Currency(Currencies.USD.symbol, Currencies.USD.code, "미국 달러")),
    new LocaleCurrency(Locale.ko_KR, new Currency(Currencies.KRW.symbol, Currencies.KRW.code, "대한민국 원")),
    new LocaleCurrency(Locale.ja_JP, new Currency(Currencies.JPY.symbol, Currencies.JPY.code, "일본 엔화")),

]