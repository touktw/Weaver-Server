import { Serializable, JsonProperty } from "typescript-json-serializer"


@Serializable()
export class Artist {
    constructor(
        @JsonProperty()
        public readonly name: string,

        @JsonProperty()
        public readonly group: string,

        @JsonProperty()
        public readonly id: number,

        @JsonProperty()
        public readonly groupId: number,

        @JsonProperty()
        public readonly logoUrl: string,
    ) { }
}