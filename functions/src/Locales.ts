import { Serializable, JsonProperty } from "typescript-json-serializer"

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
export class Locale {
    constructor(
        @JsonProperty()
        public readonly id: number,

        @JsonProperty()
        public readonly language: string,

        @JsonProperty()
        public readonly country: string
    ) { }
}
//en-US

