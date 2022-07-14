import useApi from "./useApi";
export interface User {
    email:string
    phone:string
}


export default () => {
   const api = useApi<User>("users");
   return {
        read:api.read
   }
};