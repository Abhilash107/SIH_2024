import { Festival } from "../models/festival.models.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiResponse } from '../utils/ApiResponse.js'
import { ApiError } from '../utils/ApiError.js'


const getDetails = asyncHandler( async(req, res)=>{
    let { data } = req.params
    //data = data.match(data)
    //data = data.trim().replace(/\s+/g, "")

    const festivalDetails = await Festival.find({
        festivalName: {
            $regex: new RegExp(data, 'i')
        },
    })

    if(!festivalDetails){
        throw new ApiError(404, "Not found")
    }

    return res.status(200)
    .json(new ApiResponse(200, festivalDetails))

} )

export {getDetails}