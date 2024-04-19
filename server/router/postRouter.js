const blogPostModel = require("../model/postModel");
const router = require("express").Router(); 
 

router.post("/createPost", async (req, res) => {
    const { title, content, category,imageUrl } = req.body;
    try {
        const newBlogPost = new blogPostModel({
            title,
            content,
            category,
            imageUrl
        });
        const savedPost = await newBlogPost.save();
        res.status(201).send({ success: true, data: savedPost });
    } catch (error) {
        console.log("Internal error:", error);
        res.status(500).send({ success: false, error: "Internal Error" });
    }
});


// Get a single blog post by ID
router.get("/post/:postId", async (req, res) => {
    const postId = req.params.postId;
    try {
        const post = await blogPostModel.findById(postId);
        if (!post) {
            return res.status(404).send({ success: false, error: "Post not found" });
        }
        res.status(200).send({ success: true, data: post });
    } catch (error) {
        console.log("Internal error:", error);
        res.status(500).send({ success: false, error: "Internal Error" });
    }
});




// Display a list of blog posts
router.get("/posts", async (req, res) => {
    try {
        const posts = await blogPostModel.find({}, 'title content category imageUrl publishingDate')
                                          .sort({ publishingDate: -1 })
                                          .exec();
        res.status(200).send({ success: true, data: posts });
    } catch (error) {
        console.log("Internal error:", error);
        res.status(500).send({ success: false, error: "Internal Error" });
    }
});



// Update a blog post
router.put("/updatePost/:postId", async (req, res) => {
    const postId = req.params.postId;
    const { title, content, category,imageUrl } = req.body;
    try {
        const updatedPost = await blogPostModel.findByIdAndUpdate(postId, {
            title,
            content,
            category,
            imageUrl
        }, { new: true });
        res.status(200).send({ success: true, data: updatedPost });
    } catch (error) {
        console.log("Internal error:", error);
        res.status(500).send({ success: false, error: "Internal Error" });
    }
});

// Delete a blog post
router.delete("/deletePost/:postId", async (req, res) => {
    const postId = req.params.postId;
    try {
        const deletedPost = await blogPostModel.findByIdAndDelete(postId);
        if (!deletedPost) {
            return res.status(404).send({ success: false, error: "Post not found" });
        }
        res.status(200).send({ success: true, data: deletedPost });
    } catch (error) {
        console.log("Internal error:", error);
        res.status(500).send({ success: false, error: "Internal Error" });
    }
});

module.exports = router;















module.exports = router;
