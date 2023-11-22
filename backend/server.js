const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const PORT = 5000

app.use(cors())
// app.use(express(extend))

const DB_KEY = process.env.DB_KEY
mongoose.connect(`mongodb+srv://aliy:${DB_KEY}@cluster0.smerzqk.mongodb.net/blogs?retryWrites=true&w=majority`)

const dataSchema = {
    author: String,
    title: String,
    description: String,
    tags: Array,
    publishedAt: String,
    image: {
        source: String,
        alt: String
    },
    isOwner: Boolean,
    isLike: Boolean,
}

const userSchema = {
    name: String,
    email: String,
    password: String,
    confirmPassword: String
}

const Blogs = mongoose.model('blogs', dataSchema)

// const Users = mongoose.model('user', userSchema)

app.get('/', (req, res) => {
    Blogs.find()
        .then(blog => res.json(blog))
        .catch(err => res.status(400).json(err))
})

// app.get('sign-in', (req, res) => {
//     Users.find()
//     .then(user => res.json(user))
//     .catch(err => res.status(400).json(err))
// })

app.post('http://localhost:5000/admin', (req, res) => {
    const newBlog = new Blogs({
        author: "M.Aliy",
        title: req.body.title,
        description: req.body.description,
        tags: [...req.body.tags],
        image: {
            source: req.body.mainImage,
            alt: 'Image'
        },
        isOwner: true,
        isLike: false,
    })

    newBlog.save()
        .then(blog => console.log(blog))
        .catch(err => res.status(400).json(err))
})

app.listen(PORT, () => console.log(`server has been started on ${PORT} port`))