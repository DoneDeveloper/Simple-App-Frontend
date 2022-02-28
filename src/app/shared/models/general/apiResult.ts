import { ErrorApiResult } from "./errorApiResult";

export class APIResult<TData>{
    status !: Boolean;
    description !: String;
    data !: TData;
    error !: ErrorApiResult;
}