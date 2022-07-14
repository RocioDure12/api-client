import useApi from "./useApi";

export interface Post {
    content: string;
    id: number;
}

export default () => {

    const api = useApi<Post>("posts");
    return {
        read: api.read,
        create: api.create
    }

    
};

