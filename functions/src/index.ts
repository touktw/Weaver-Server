import * as functions from 'firebase-functions';
import { JsonProperty, Serializable, deserialize, serialize } from 'typescript-json-serializer';
import * as admin from 'firebase-admin';
import { Artist } from './Artist'
import { Product } from './Product'
import { ResultDto } from './ResultDto'
import { DummyProducts, DummyPromotions, DummyNotice, DummyCurrencies, DummyLocales, DummyArtists } from './Dummy'
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




app.get('/artists', (req, res) => {
  res.send(JSON.stringify({
    "description": "success",
    "data": DummyArtists
  }))
})

app.get('/locales', (req, res) => {
  res.send(JSON.stringify({
    "description": "success",
    "data": DummyLocales
  }))
})

app.get('/currencies', (req, res) => {
  res.send(JSON.stringify({
    "description": "success",
    "data": DummyCurrencies
  }))
})

app.get('/product/:id', (req, res) => {
  const data = DummyProducts.get(req.params.id)

  res.send(JSON.stringify({
    "description": "success",
    "data": data
  }))
})

app.get('/product', (req, res) => {
  let data: Product[] = []
  DummyProducts.forEach(products => {
    data = data.concat(products)
  })
  res.send(JSON.stringify({
    "description": "success",
    "data": data
  }))
})

app.get('/promotion/:id', (req, res) => {
  const data = DummyPromotions.get(req.params.id)
  res.send(JSON.stringify({
    "description": "success",
    "data": data
  }))
})

app.get('/promotion', (req, res) => {
  let data: Promotion[] = []
  DummyPromotions.forEach(promotion => {
    data = data.concat(promotion)
  })

  res.send(JSON.stringify({
    "description": "success",
    "data": data
  }))
})

app.get('/notice', (req, res) => {
  res.send(JSON.stringify({
    "description": "success",
    "data": DummyNotice
  }))
})