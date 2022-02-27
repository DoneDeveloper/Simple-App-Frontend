import { ProjectErrorCodes } from "../../enums/projectErrorCodes";

export class ErrorApiResult 
{
    ErrorCode !: ProjectErrorCodes;
    Description !: string;
}