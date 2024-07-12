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

router.get("/:id", (req, res) => {
  try {
      Questions.aggregate([
          {
              $lookup: {
                  from: "answers",
                  localField: "_id",
                  foreignField: "questionId",
                  as: "answerDetails",
              },
          },
          {
              $unwind: {
                  path: "$answerDetails",
                  preserveNullAndEmptyArrays: true,
              },
          },
          {
              $lookup: {
                  from: "comments",
                  let: { answerId: "$answerDetails._id" },
                  pipeline: [
                      {
                          $match: {
                              $expr: {
                                  $eq: ["$questionId", "$$answerId"],
                              },
                          },
                      },
                      {
                          $project: {
                              _id: 1,
                              comment: 1,
                              user: 1,
                              createdAt: 1,
                          },
                      },
                  ],
                  as: "answerDetails.comments",
              },
          },
          {
              $group: {
                  // _id: "$_id",
                  title: { $first: "$title" },
                  body: { $first: "$body" },
                  tags: { $first: "$tags" },
                  createdAt: { $first: "$createdAt" },
                  user: { $first: "$user" },
                  answerDetails: { $push: "$answerDetails" },
                  
              },
          },
          {
              $project: {
                  __v: 0,
              },
          },
      ])
      .exec()
      .then((questionDetails) => {
          if (questionDetails.length === 0) {
              return res.status(404).send({ message: "Question not found" });
          }
          res.status(200).send(questionDetails[0]);
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






  
  router.get("/", async (req, res) => {
    const error = {
      message: "Error in retrieving questions",
      error: "Bad request",
    };
  
    Questions.aggregate([
      {
        $lookup: {
          from: "comments",
          let: { question_id: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$question_id", "$$question_id"],
                },
              },
            },
            {
              $project: {
                _id: 1,
                // user_id: 1,
                comment: 1,
                createdAt: 1,
                // question_id: 1,
              },
            },
          ],
          as: "comments",
        },
      },
      {
        $lookup: {
          from: "answers",
          let: { question_id: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$question_id", "$$question_id"],
                },
              },
            },
            {
              $project: {
                _id: 1,
                // user_id: 1,
                // answer: 1,
                // created_at: 1,
                // question_id: 1,
                // created_at: 1,
              },
            },
          ],
          as: "answerDetails",
        },
      },
      // {
      //   $unwind: {
      //     path: "$answerDetails",
      //     preserveNullAndEmptyArrays: true,
      //   },
      // },
      {
        $project: {
          __v: 0,
          // _id: "$_id",
          // answerDetails: { $first: "$answerDetails" },
        },
      },
    ])
      .exec()
      .then((questionDetails) => {
        res.status(200).send(questionDetails);
      })
      .catch((e) => {
        console.log("Error: ", e);
        res.status(400).send(error);
      });
  });





export default router
//  export {Questions}

