import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

// Could have actual DB to store favorites
const minDB: { id: string }[] = []

export const GET: RequestHandler = async () => {
  return json(minDB)
}

export const POST: RequestHandler = async ({ request }) => {
  const body = await request.json()

  // if body.id is in minDB then remove it
  const index = minDB.findIndex((db) => db.id === body.id)
  if (index > -1) {
    minDB.splice(index, 1)
  } else {
    minDB.push(body)
  }

  return json({ success: true })
}
