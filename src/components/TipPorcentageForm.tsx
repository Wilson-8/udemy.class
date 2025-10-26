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

export default function TipPorcentageForm() {
  return (
    <div className="flex gap-2">
        <h3 className="font-black text-2xl">Propina:</h3>
        <form>
            {tipOptions.map(tip => (
                <div key={tip.id}>
                    <label htmlFor={tip.id}>{tip.label}</label>
                    <input 
                    id={tip.id}
                    type="radio"
                    name="tip"
                    value={tip.label} />
                </div>
            ))}

        </form>
    </div>
  )
}
