import * as functions from 'firebase-functions';
import { JsonProperty, Serializable, deserialize, serialize } from 'typescript-json-serializer';
import * as admin from 'firebase-admin';
import { Artist } from './Artist'
import { Product } from './Product'
import { ResultDto } from './ResultDto'
import { supportedLocales } from './Locales'
import { DummyProducts, DummyPromotions, DummyNotice } from './Dummy'
import * as firebase from 'firebase'
import { Promotion } from './Promotion';


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

const firebaseApp = admin.initializeApp()

const db = admin.firestore()
const express = require('express')
const cors = require('cors')
const app = express()
const gcs = require('@google-cloud/storage')
const bucket = gcs.bucket


app.use(cors({ origin: true }))

export const v1 = functions.https.onRequest(app)
const dummyArtists = [
  new Artist("BTS", "Big Hit Entertainment", 1, 1, "https://firebasestorage.googleapis.com/v0/b/weverse-shop.appspot.com/o/logo_bts.png?alt=media&token=c8eda21b-7a05-49d4-839b-aa6857a2efeb"),
  new Artist("TOMORROW X TOGETHER", "Big Hit Entertainment", 2, 1, "https://firebasestorage.googleapis.com/v0/b/weverse-shop.appspot.com/o/logo_t_by_t.png?alt=media&token=6b240b8a-0ee1-451c-b8b5-508a9faf4c46"),
  new Artist("GFRIEND", "Source Music", 3, 2, "https://firebasestorage.googleapis.com/v0/b/weverse-shop.appspot.com/o/logo_gfriend.png?alt=media&token=ad01e2f8-3575-4064-af2b-8b571d42f02e")
]



app.get('/artists', (req, res) => {
  const data = JSON.stringify(dummyArtists)
  const response = new ResultDto("success", data)
  res.send(JSON.stringify(response))
})

app.get('/locales', (req, res) => {
  const response = new ResultDto("success", JSON.stringify(supportedLocales))
  res.send(JSON.stringify(response))
})

app.get('/product/:id', (req, res) => {
  const data = DummyProducts.get(req.params.id)
  const response = new ResultDto("success", JSON.stringify(data))
  res.send(JSON.stringify(response))
})

app.get('/product', (req, res) => {
  let data: Product[] = []
  DummyProducts.forEach(products => {
    data = data.concat(products)
  })
  const response = new ResultDto("success", JSON.stringify(data))
  res.send(JSON.stringify(response))
})

app.get('/promotion/:id', (req, res) => {
  const data = DummyPromotions.get(req.params.id)
  const response = new ResultDto("success", JSON.stringify(data))
  res.send(JSON.stringify(response))
})

app.get('/promotion', (req, res) => {
  let data: Promotion[] = []
  DummyPromotions.forEach(promotion => {
    data = data.concat(promotion)
  })
  const response = new ResultDto("success", JSON.stringify(data))
  res.send(JSON.stringify(response))
})

app.get('/notice', (req, res) => {
  const response = new ResultDto("success", JSON.stringify(DummyNotice))
  res.send(JSON.stringify(response))
})