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
    thumbnails: [
        {
            title: String,
            description: String,
            tags: Array,
            publishedAt: String,
            image: {
                source: String,
                alt: String
            },
            blogs: [
                {
                    subtitle: Array,
                    image: Array,
                    notes: Array,
                }
            ],
            isOwner: Boolean,
            isLike: Boolean,
        }
    ]
}

const Blogs = mongoose.model('blogs', dataSchema)

app.get('/', (req, res) => {
    Blogs.find()
        .then(blog => res.json(blog))
        .catch(err => res.status(400).json(err))
})

app.post('/sign-up', (req, res) => {
    const routeLink = req.route.path.slice(1)
    
})

app.listen(PORT, () => console.log(`server has been started on ${PORT} port`))