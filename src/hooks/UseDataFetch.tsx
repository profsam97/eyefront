import baseUrl from "@/Helpers/BaseUrl";
import axios from "axios";
import {useMutation, useQuery} from "react-query";
import {useSelector} from "react-redux";
import modal from "@/store/modal";

interface ICreate {
    title: string,
    description: string,
    image: string
}

export function useNewPost (onSuccess: any) {
    const newPostHandler = async(data: ICreate) => {
        const response = await axios.post(`${baseUrl}`, data)
        return response.data;
    }
    return useMutation(newPostHandler, {
        onError: async() => {
        },
        onSuccess
    });
}
export default function useDataFetch (onSuccess: any) {
    const fetchPosts = async () => {
        const response = await axios.get(`${baseUrl}/products`);
        return response.data;
    }
    return useQuery('getProducts', fetchPosts, {
        onSuccess,
        onError: async (data: any) => {
            return data;
        },
    });
}
interface modal {
    modal : {
        post_id: number
    }
}

export function useUpdatePost(onSuccess: any) {

    const product_id : number = useSelector((state: modal) => state.modal.post_id);

    const updatePostHandler = async(data: any) => {
        const response = await axios.put(`https://prof-server.herokuapp.com/api/products/${product_id}`, data)
        return response.data;
    }
    return useMutation(updatePostHandler, {
        onError: async(data: object) => {
            console.log(data)
        },
        onSuccess
    });
}
export function useDeletePost () {
    type defaultType = {
        post_id: number
    }
    const deletePostHandler = async(data: defaultType) => {
        const response = await axios.delete( `${baseUrl}products/${data.post_id}`)
        return response.data;
    }
    return useMutation(deletePostHandler, {
        onError: async() => {
        },
    });
}