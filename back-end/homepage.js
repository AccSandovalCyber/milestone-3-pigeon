const router = require('express').Router()
const db = require('../../front-end/models')
const index = require('../views/index') 


//CreateUser

router.get('/', (req, res) => {
    db.Post.find()
      .then((post) => {
        res.render('pages/CreateUser', { CreateUser })
      })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
  })
//Home

        router.get('/Home', (req, res) => {
          res.render('/Home', { Home })
                })
                .catch(err => {
                    console.log('err', err)
                    res.render('error404')
                })

//LandingPage

router.get('/LandingPage', (req, res) => {
    res.render('/LandingPage', { LandingPage })
          })
          .catch(err => {
              console.log('err', err)
              res.render('error404')
          })

//Login

router.get('/Login', (req, res) => {
    res.render('/Login', { Login })
          })
          .catch(err => {
              console.log('err', err)
              res.render('error404')
          })

          
