import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalProps ={
    order: OrderItem[],
    tip: number
}
export default function OrderTotal({order, tip} : OrderTotalProps) {

    const subTotalAmaunt = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

    const tipAmaunt = useMemo(() => subTotalAmaunt * tip, [tip, order])

  return (
    <>
        <div className="space-y-3">
            <h1 className="font-black text-2xl">Totales y Propinas</h1>
            <p>Subtotal a pagar:{' '}
                <span className="font-bold">{formatCurrency(subTotalAmaunt)}</span>
            </p>

            <p>Propina:{' '}
                <span className="font-bold">{formatCurrency(tipAmaunt)}</span>
            </p>

            <p>Total a pagar:{' '}
                <span className="font-bold">$0</span>
            </p>
        </div>
    </>
  )
}
