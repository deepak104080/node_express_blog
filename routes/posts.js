const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.post('/', async (req, res) => {
    console.log(req.body);
    try{
        const post = new Post({
            title: req.body.title,
            description: req.body.description
        })
        const newPost = await post.save()
        res.status(201).json(newPost)
    }
    catch(err) {
        res.status(400).json({message: err.message})
    }
});

router.get('/', async (req,res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }
    catch(err){
        res.json({message: err});
    }
});

module.exports = router;