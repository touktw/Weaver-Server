import * as functions from 'firebase-functions';
import { JsonProperty, Serializable, deserialize, serialize } from 'typescript-json-serializer';
import * as admin from 'firebase-admin';
import { Artist } from './Artist'
import { Product } from './Product'
import { ResultDto } from './ResultDto'
import { supportedLocales } from './Locales'

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

admin.initializeApp()

const db = admin.firestore()
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors({ origin: true }))

export const v1 = functions.https.onRequest(app)
const dummyArtists = [new Artist("artist1", 1), new Artist("artist2", 2), new Artist("artist3", 3)]

let dummyProducts = new Map<string, Product[]>()

dummyProducts.set("1", [
  new Product("Title1", "Descipriton1", "", true, false, 50000, "1", "COLLAB", "BT21"),
  new Product("Title1", "Descipriton1", "", true, false, 50000, "1", "COLLAB", "BT21")
])
dummyProducts.set("AT2", [
  new Product("Title1", "Descipriton1", "", true, false, 50000, "AT2", "COLLAB", "BT21"),
  new Product("Title1", "Descipriton1", "", true, false, 50000, "AT2", "COLLAB", "BT21"),
])
dummyProducts.set("AT3", [
  new Product("Title1", "Descipriton1", "", true, false, 50000, "AT3", "COLLAB", "BT21"),
  new Product("Title1", "Descipriton1", "", true, false, 50000, "AT3", "COLLAB", "BT21"),
])

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
  const data = dummyProducts.get(req.params.id)
  const response = new ResultDto("success", JSON.stringify(data))
  res.send(JSON.stringify(response))
})

app.get('/product', (req, res) => {
  let data: Product[] = []
  dummyProducts.forEach(products => {
    data = data.concat(products)
  })
  const response = new ResultDto("success", JSON.stringify(data))
  res.send(JSON.stringify(response))
})