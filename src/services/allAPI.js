import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"


//upload videos

export const uploadAllVideo = async(reqBody)=>{
   return await commonAPI('POST',`${serverURL}/videos`,reqBody)
}

//get all video from json server
export const getAllVideos = async()=>{
  return  await commonAPI('GET',`${serverURL}/videos`,"")
}

//API to delete a video
export const deleteAVideo = async(id)=>{
  return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
}

//API to add data to watch-history
export const addToHistory = async(videoDetails)=>{
  return await commonAPI('POST',`${serverURL}/history`,videoDetails)
}


//API to get all history from json-server
export const getAllHistory = async()=>{
  return await commonAPI('GET',`${serverURL}/history`,"")
}


//API to delete history
export const deleteAHistory = async(id)=>{
  return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}

//API to add categories
export const addToCategory = async(body)=>{
  return await commonAPI('POST',`${serverURL}/categories`,body)
}

//API to get Category
export const getAllCategory = async()=>{
  return await commonAPI('GET',`${serverURL}/categories`,"")
}

//API to delete the category name
export const deleteACategoryname = async(id)=>{
  return await commonAPI('DELETE',`${serverURL}/categories/${id}`,{})
}
//API call to get a particular video
export const getAVideo = async(id)=>{
  return await commonAPI('GET',`${serverURL}/videos/${id}`,"")
}

//API to update category
export const updateCategory = async(id,body)=>{
 return await commonAPI('PUT',`${serverURL}/categories/${id}`,body)
}