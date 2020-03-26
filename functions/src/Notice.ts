import { Serializable, JsonProperty } from "typescript-json-serializer"

@Serializable()
export class Notice {
    constructor(
        @JsonProperty()
        public readonly notice: string,

        @JsonProperty()
        public readonly createAt: number,
    ) { }
}