require('dotenv').config();
const express = require('express');

const cors = require('cors')

const app = express();
app.use(express.json());

app.use(cors())

const { MongoClient } = require('mongodb')
const uri = process.env.MONGO_URI
const client = new MongoClient(uri)

app.post('/api/addArticle', async(req, res) => {
  try {

    const article = req.body
    const timestamp = new Date();

    await client.connect();
    await client.db('db-name').collection('articleData').insertOne({
      title: article.title,
      content: article.content,
      user_email: article.user_email,
      timestamp: timestamp,
      user_name: article.user_name,
      user_img: article.user_img
    })
    await client.close()
    res.status(200).send({
      "status": "ok",
      "massage": "Article with ID = " + article.id + "is created",
      "article": article
    })
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }

})


app.get('/api/articles', async (req, res) => {
  try {
    const articles = await client.db('db-name').collection('articleData').find({}).toArray();
    res.status(200).send(articles);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

let ObjectId = require('mongodb').ObjectId

app.get('/api/article/:id', async (req, res) => {
  try {
    let id = req.params.id;
    let o_id = new ObjectId(id)
    const client = new MongoClient(uri);
    await client.connect();
    const article = await client.db('db-name').collection('articleData').find({_id: o_id}).toArray(function(err, docs) {
   });
    //console.log(article)
    await client.close();
    if (article) {
      
      res.status(200).send(article[0]);
    } else {
      res.status(404).send({ message: "Article not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
});


app.get('/api/user/:id', async (req, res) => {
  try {
    let name = req.params.id;
    //console.log("id =>>>>>" + req.params.id)
    const client = new MongoClient(uri);
    await client.connect();
    const article = await client.db('db-name').collection('articleData').find({user_name: name}).toArray(function(err, docs) {
      //console.log("docs =????>>>" + docs)
   });
    console.log(article)
    await client.close();
    if (article) {
      
      res.status(200).send(article);
    } else {
      res.status(404).send({ message: "Article not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = app;
