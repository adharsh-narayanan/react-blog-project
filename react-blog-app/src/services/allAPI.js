

import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

//Blog Section
//---------------------

//Api to add a blog

export const addBlogApi = async (reqbody)=>{
    return await commonApi('post',`${serverUrl}/blog`,reqbody)
}

//Api to get all uploaded blog

export const getBlogApi = async()=>{
    return await commonApi('get',`${serverUrl}/blog`,'')
}

//api to get a single blog
export const getaBlogApi = async(id)=>{
    return await commonApi('get',`${serverUrl}/blog/${id}`,'')
}

//Api to delete a  blog
export const deleteBlogApi = async(id)=>{
    return await commonApi('delete',`${serverUrl}/blog/${id}`,{})
}
//Api to edit a blog

export const editBlogApi = async(id,reqbody)=>{
    return await commonApi('put',`${serverUrl}/blog/${id}`,reqbody)
}

//user Section
//--------------------

