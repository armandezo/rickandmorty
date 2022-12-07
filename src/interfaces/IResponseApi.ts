import { IResults } from "@interfaces/Iresults";

export interface IResponseApi {
    success: boolean;
    data?: Array<IResults>;
    message: string;
    error?: string;
}
