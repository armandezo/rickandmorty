import { IOrigin } from "@interfaces/IOrigin";
import { ILocation } from "@interfaces/ILocation";

export interface IResults {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Array<IOrigin>;
    location: ILocation;
    image: string;
    episode: Array<string>[];
    url: string;
    created: string;
}
