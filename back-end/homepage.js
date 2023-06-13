const router = require('express').Router()
const db = require('../../front-end/models')
const index = require('../views/index') 


//Homepage

router.get('/', (req, res) => {
    db.Post.find()
      .then((post) => {
        res.render('views/index', { index })
      })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
  })
//Profile

        router.get('/profile', (req, res) => {
          res.render('/profile', { profile })
                })
                .catch(err => {
                    console.log('err', err)
                    res.render('error404')
                })

//Settings

router.get('/settings', (req, res) => {
    res.render('/settings', { settings })
          })
          .catch(err => {
              console.log('err', err)
              res.render('error404')
          })

//Login

router.get('/login', (req, res) => {
    res.render('/login', { login })
          })
          .catch(err => {
              console.log('err', err)
              res.render('error404')
          })
