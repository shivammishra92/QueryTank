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





router.get("/:id", async (req, res) => {
    try {
      // const question = await QuestionDB.findOne({ _id: req.params.id });
      // res.status(200).send(question);
      Questions.aggregate([
        {
          $match: { _id: mongoose.Types.ObjectId(req.params.id) },
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
                  user: 1,
                  answer: 1,
                  // created_at: 1,
                  question_id: 1,
                  createdAt: 1,
                },
              },
            ],
            as: "answerDetails",
          },
        },
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
                  question_id: 1,
                  user: 1,
                  comment: 1,
                  // created_at: 1,
                  // question_id: 1,
                  createdAt: 1,
                },
              },
            ],
            as: "comments",
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
    } catch (err) {
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

