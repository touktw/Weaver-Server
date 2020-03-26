import { Serializable, JsonProperty } from "typescript-json-serializer"

@Serializable()
export class Promotion {
    constructor(
        @JsonProperty()
        public readonly title: string = "title",

        @JsonProperty()
        public readonly description: string = "description",

        @JsonProperty()
        public readonly imageUrl: string = "",

        @JsonProperty()
        public readonly artistId: number,
    ) { }
}