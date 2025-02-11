import { google } from "googleapis"
import { cache } from "react"

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
})

const sheets = google.sheets({ version: "v4", auth })

export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string
  stock: number
  featured: boolean
}

export const getProducts = cache(async (): Promise<Product[]> => {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: "Products!A2:H", // Assuming headers are in row 1
    })

    const rows = response.data.values

    if (!rows) {
      return []
    }

    return rows.map((row) => ({
      id: row[0],
      name: row[1],
      description: row[2],
      price: Number(row[3]),
      category: row[4],
      image: row[5],
      stock: Number(row[6]),
      featured: row[7] === "TRUE",
    }))
  } catch (error) {
    console.error("Error fetching products:", error)
    return []
  }
})

export const getProduct = cache(async (id: string): Promise<Product | null> => {
  const products = await getProducts()
  return products.find((p) => p.id === id) || null
})

