import * as functions from 'firebase-functions';
import { JsonProperty, Serializable, deserialize, serialize } from 'typescript-json-serializer';
import * as admin from 'firebase-admin';
import { Artist } from './Artist'
import { Product } from './Product'

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
const dummyArtists = [new Artist("artist1", "AT1"), new Artist("artist2", "AT2"), new Artist("artist3", "AT3")]

let dummyProducts = new Map<string, Product[]>()

dummyProducts.set("AT1", [
  new Product("Title1", "Descipriton1", "", true, false, 50000, "AT1"),
  new Product("Title1", "Descipriton1", "", true, false, 50000, "AT1")
])
dummyProducts.set("AT2", [
  new Product("Title1", "Descipriton1", "", true, false, 50000, "AT2"),
  new Product("Title1", "Descipriton1", "", true, false, 50000, "AT2"),
])
dummyProducts.set("AT3", [
  new Product("Title1", "Descipriton1", "", true, false, 50000, "AT3"),
  new Product("Title1", "Descipriton1", "", true, false, 50000, "AT3"),
])

app.get('/artists', (req, res) => {
  const data = JSON.stringify(dummyArtists)
  res.send(data)
})

app.get('/product/:id', (req, res) => {
  console.debug("id:" + req.params.id)
  console.debug("map size:" + dummyProducts.size)
  const data = dummyProducts.get(req.params.id)
  console.debug("data len:" + data?.length)
  res.send(JSON.stringify(data))
})