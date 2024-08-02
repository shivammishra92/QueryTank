import express from 'express'
import mongoose from 'mongoose'
import {Router} from 'express'
import {Questions} from '../models/Question.models.js' //may get error here due to conflict in name
// import { DB_NAME } from '../constants'

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




//aggregation pipeline...

router.get("/:id", async (req, res) => {

  
  try {
      const id = req.params.id;
      // console.log(id)
      const question = await Questions.findById(id)
      // console.log(question._id)
      const questionId = question._id

      Questions.aggregate([
          {
            $match: { _id: questionId}
          },
          {
              $lookup: {
                  from: "answers",
                  localField: "_id",
                  foreignField: "questionId",
                  as: "answerDetails",
              },
          },
          {
            $project: {
              _id: 1,
              title: 1,
              body: 1,
              "answerDetails.answer": 1,
              "answerDetails.body": 1,
              "answerDetails.tags": 1,
              "answerDetails.createdAt": 1,
              "answerDetails.user": 1,
              "answerDetails.commentId": 1
            },
          },
          // {
          //     $unwind: {
          //         path: "$answerDetails",
          //         preserveNullAndEmptyArrays: true,
          //     },
          // },
      ])
      .exec()
      .then((answerDetails) => {
          if (answerDetails.length === 0) {
              return res.status(404).send({ message: "Question not found" });
          }
          res.status(200).send(answerDetails[0]);
      })
      .catch((e) => {
          console.log("Error: ", e);
          res.status(400).send({ error: "An error occurred while fetching the question details" });
      });
  }
   catch (err) {
      res.status(400).send({
          message: "Question not found",
      });
  }
});
  
router.get('/', async (req, res) => {
  try {
      const questions = await Questions.find();
      res.status(200).json(questions);
  } catch (error) {
      console.error('Error fetching questions:', error);
      res.status(500).json({ message: 'Failed to fetch questions' });
  }
});




export default router;

