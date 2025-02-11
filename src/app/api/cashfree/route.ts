import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { items, orderAmount } = await req.json()

    const orderData = {
      order_id: `order_${Date.now()}`,
      order_amount: orderAmount,
      order_currency: "INR",
      customer_details: {
        customer_id: "customer_123",
        customer_email: "customer@example.com",
        customer_phone: "9999999999",
      },
      order_meta: {
        return_url: `${process.env.NEXT_PUBLIC_URL}/success?order_id={order_id}`,
      },
    }

    const response = await fetch("https://sandbox.cashfree.com/pg/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-client-id": process.env.CASHFREE_APP_ID!,
        "x-client-secret": process.env.CASHFREE_SECRET_KEY!,
      },
      body: JSON.stringify(orderData),
    })

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}

