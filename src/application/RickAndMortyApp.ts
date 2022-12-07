/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { Headers } from "@constants/headers-axios";
import { IFilterChar } from "@interfaces/IFilterChar";

export default class RickAndMortyApp {
    getData = async (query: string, state: string) => {
        try {
            const { data } = await axios.get<IFilterChar>(
                "https://rickandmortyapi.com/api/character/?name=" +
                    query +
                    "&status=" +
                    state,
                Headers()
            );

            const response = {
                success: true,
                message: "Data retornada con exito",
                data: data.results,
            };

            return response;
        } catch (e: any) {
            const response = {
                success: false,
                message: e.response.data.error,
            };
            return response;
        }
    };
}
