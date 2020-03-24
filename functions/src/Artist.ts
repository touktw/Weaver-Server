import { Serializable, JsonProperty } from "typescript-json-serializer"


@Serializable()
export class Artist {
    constructor(
        @JsonProperty()
        public readonly name: string,

        @JsonProperty()
        public readonly id: string) {

    }
}