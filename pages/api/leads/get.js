import { db } from '../../../config/firebase'

export default async function handler(req, res) {
  const snapshot = await db.collection('leads').get()
  const records =  snapshot.docs.map(doc => doc.data())
  res.status(200).send(records)
}