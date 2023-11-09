const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const PORT = 5000

app.use(cors())
// app.use(express(extend))

const DB_KEY = process.env.DB_KEY
const connecting = (link='blogs') => {
    mongoose.connect(`mongodb+srv://aliy:${DB_KEY}@cluster0.smerzqk.mongodb.net/${link}?retryWrites=true&w=majority`)
}

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

const userSchema = {
    name: String,
    email: String,
    password: String,
    confirmPassword: String
}

const Blogs = mongoose.model('blogs', dataSchema)

const Users = mongoose.model('user', userSchema)

app.get('/', (req, res) => {
    Blogs.find()
        .then(blog => res.json(blog))
        .catch(err => res.status(400).json(err))
})

app.get('sign-in', (req, res) => {
    Users.find()
    .then(user => res.json(user))
    .catch(err => res.status(400).json(err))
})

app.post('http://localhost:5000/sign-up', (req, res) => {
    const routeLink = req.route.path.slice(1)
    console.log(req.body);
    connecting(routeLink)

    const newUser = new Users({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    })

    newUser.save()
        .then(user => console.log(user))
        .catch(err => res.status(400).json(err))
})

app.listen(PORT, () => console.log(`server has been started on ${PORT} port`))