import axios, { AxiosInstance } from "axios";

interface Api<T> {
    axiosInstance: AxiosInstance
    read: () => Promise<T[]>
    create: (data:T) =>Promise<T>
}

/*TAREA: armar el metodo create que te permite crear un recurso*/
  
const url = "https://62cecc8a486b6ce8264cef4a.mockapi.io/";

const useApi = <T>(resource: string): Api<T> => {
    /*resource es un parametro, y hace referencia al recurso que vas a consultar (post, user)*/
    const axiosInstance = axios.create({
        baseURL: url
    });

    return {
        axiosInstance,
        read: async () => {
            const response = await axiosInstance.get<T[]>(`/${resource}`);
            return response.data;
        },
        create: async (data) => {
            const response= await axiosInstance.post<T>(`/${resource}`, data);
            return response.data
        }
    };


}

export default useApi;