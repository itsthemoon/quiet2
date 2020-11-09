const express = require("express")
const router = express.Router()
const Post = require('../models/posts')


//for the posts
router.post('/save', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        body: req.body.body
    });
    try {
        const savedPost = await post.save()
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }
});

//for the posts
router.get('/save', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = router;
