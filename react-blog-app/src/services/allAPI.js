

import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

//Api to add a blog

export const addBlogApi = async (reqbody)=>{
    return await commonApi('post',`${serverUrl}/blog`,reqbody)
}

//Api to get all uploaded blog

export const getBlogApi = async(reqbody)=>{
    return await commonApi('get',`${serverUrl}/blog`,'')
}

//api to get a single blog
export const getABlogApi = async(reqbody)=>{
    return await commonApi('get',`${serverUrl}/blog/${id}`,{})
}

//Api to delete a  blog
export const deleteBlogApi = async(reqbody)=>{
    return await commonApi('delete',`${serverUrl}/blog`,'')
}
//Api to edit a blog

export const editBlogApi = async(reqbody)=>{
    return await commonApi('put',`${serverUrl}/blog`,'')
}


//api to add a user

export const addnewUser = async (reqbody)=>{
    return await commonApi ('post',`${serverUrl}/user`,reqbody)
}

//api to get user 

export const getUserApi = async(reqbody)=>{
    return await commonApi('get',`${serverUrl}/user`,'')
}