import {Router} from "express"
import questionRouter from './Question.js'
import answerRouter from './Answer.js'
import commentRouter from './Comment.js'

const router = Router()

router.get('/',(req,res)=>{
    res.send("Welcome to QueryTank !!")
})

router.use('/question',questionRouter)
router.use('/answer',answerRouter)
router.use('/comment',commentRouter)


export default router