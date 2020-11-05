const express = require("express")
const router = express.Router()
const Post = require('../models/posts')

router.post('/', async (req, res) => {
    const post = new Post({
        post: req.body.post,
    });
    try {
        const savedPost = await post.save()
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = router;
