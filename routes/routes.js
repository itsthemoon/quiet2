const express = require("express")
const router = express.Router()
const Post = require('../models/posts')

router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
    });
    try {
        const savedPost = await post.save()
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = router;
