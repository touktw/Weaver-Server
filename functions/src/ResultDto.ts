import { Serializable, JsonProperty } from "typescript-json-serializer"

@Serializable()
export class ResultDto {
    constructor(
        @JsonProperty()
        public readonly description: string,

        @JsonProperty()
        public readonly data: string
    ) { }
}