import { ErrorApiResult } from "./errorApiResult";

export class APIResult<TData>{
    Status !: Boolean;
    Description !: String;
    Data !: TData;
    Error !: ErrorApiResult;
}