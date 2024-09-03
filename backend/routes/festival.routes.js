import { Router } from "express"
import {getDetails} from '../controllers/festival.controller.js'


const router = Router()

router.route("/:data").get(getDetails)

export default router