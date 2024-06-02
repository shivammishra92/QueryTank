import express from 'express'
import mongoose from 'mongoose'
import {Router} from 'express'
import {Questions} from '../models/Question.models.js' //may get error here due to conflict in name

const router = Router()

router.post('/',async(req,res)=>{
    const questionData = new Questions({
        title: req.body.title,
        body: req.body.body,
        tags: req.body.tag,
        user: req.body.user
    })

    await questionData.save().then((doc)=>{
        res.status(201).send({
            status: true,
            data: doc
        })
    }).catch((error)=>{
        res.status(400).send({
           status: false,
           message: "Error while adding question" 
        })
    })
})



















export default router
//  export {Questions}

