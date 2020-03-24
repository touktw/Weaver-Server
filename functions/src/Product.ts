import { Serializable, JsonProperty } from "typescript-json-serializer"

@Serializable()
export class Product {
    constructor(
        @JsonProperty()
        public readonly title: string = "title",

        @JsonProperty()
        public readonly description: string = "description",

        @JsonProperty()
        public readonly imageUrl: string = "",

        @JsonProperty()
        public readonly isOnly: boolean = false,

        @JsonProperty()
        public readonly isReserve: boolean = false,

        @JsonProperty()
        public readonly price: number = 0,

        @JsonProperty()
        public readonly artistId: number,

        @JsonProperty()
        public readonly category: string,

        @JsonProperty()
        public readonly tag: string,
    ) { }
}