import express from 'express'
import {Router} from 'express'
import {Comments} from '../models/Comment.models.js' //may get error here due to conflict in name

const router = Router()

router.post('/:id',async(req,res)=>{

    try{
        await Comments.create({   
            question_id: req.params.id,
            comment: req.body.comment,
            user: req.body.user,
        }).then((doc)=>{
            res.status(200).send({
            message:"Comment added successfully"    
            })
        }).catch((error)=>{
            res.status(400).send({
                message:"Bad Request"
            })
        })
    }

    catch (error) {
        res.status(500).send({
          message: "Error while adding comments",
        });
      }

})



 export default router;

