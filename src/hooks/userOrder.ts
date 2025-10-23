import { useState } from "react"
import type { OrderItem } from "../types"



export default function userOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = () => {
        console.log('adding...')
    }

  return {
    addItem
  }
}
