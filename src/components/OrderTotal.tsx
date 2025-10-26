import { useCallback, } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalProps ={
    order: OrderItem[],
    tip: number
    placeHolder: () => void
}
export default function OrderTotal({order, tip, placeHolder} : OrderTotalProps) {

    const subTotalAmaunt = useCallback(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

    const tipAmaunt = useCallback(() => subTotalAmaunt() * tip, [tip, order])

    const TotalToPay = useCallback(() =>subTotalAmaunt() + tipAmaunt() ,[tip, order])

  return (
    <>
        <div className="space-y-3">
            <h1 className="font-black text-2xl">Totales y Propinas</h1>
            <p>Subtotal a pagar:{' '}
                <span className="font-bold">{formatCurrency(subTotalAmaunt())}</span>
            </p>

            <p>Propina:{' '}
                <span className="font-bold">{formatCurrency(tipAmaunt())}</span>
            </p>

            <p>Total a pagar:{' '}
                <span className="font-bold">{formatCurrency(TotalToPay())}</span>
            </p>
        </div>

        <button className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
        disabled={TotalToPay() === 0}
        onClick={() => placeHolder()}
        >
            Guardadr Orden
        </button>
    </>
  )
}
