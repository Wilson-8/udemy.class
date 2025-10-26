import type { Dispatch, SetStateAction } from "react"

const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

type TipPercentageProps={
  setTip: Dispatch<SetStateAction<number>>,
  tip: number
}

export default function TipPorcentageForm({setTip, tip} : TipPercentageProps) {
  return (
    <div>
        <h3 className="font-black text-2xl">Propina: </h3>
        
        <form>
            {tipOptions.map(tiplet => (
                <div key={tiplet.id} className="flex gap-2">

                    <label htmlFor={tiplet.id}>{tiplet.label}</label>

                    <input 
                    id={tiplet.id}
                    type="radio"
                    name="tip"
                    value={tiplet.value} 
                    onChange={e => setTip(+e.target.value)}
                    checked={tiplet.value === tip}
                    />

                </div>
            ))}

        </form>
    </div>
  )
}
