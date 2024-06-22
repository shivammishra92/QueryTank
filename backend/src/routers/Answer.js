import express from 'express'
import {Router} from 'express'
import {Answers} from '../models/Answer.models.js' //may get error here due to conflict in name

const router = Router()

router.post('/',async(req,res)=>{
    const answerData = new Answers({
        questionId: req.body.questionId,
        answer: req.body.answer,
        user: req.body.user
    })

    await answerData.save().then((doc)=>{
        res.status(201).send({
            status: true,
            data: doc
        })
    }).catch((error)=>{
        res.status(400).send({
           status: false,
           message: "Error while adding answer" 
        })
    })
})


 export default router;

