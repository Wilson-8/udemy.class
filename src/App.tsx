import {menuItems} from './data/db'
import MenuItem from './components/MenuItem'
import useOrder from './hooks/useOrder'
import OrdenContent from './components/OrdenContent'


function App() {
  

  const { order,addItem } = useOrder()
  

  return (
    <>
     <header className="bg-teal-400 py-5">
      <h1 className="text-center text-7xl">Calculadora de Propinas y Consumo</h1>
     </header>

     <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">

      <div className="py-5">
        <h2 className="text-4xl font-black">Menu</h2>

       <div className="space-y-2 mt-10">
         {menuItems.map(item => (
          <MenuItem
          key={item.id}
          item={item}
          addItem={addItem}
          />
          
        ))}
       </div>

      </div>

      <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
        
        <OrdenContent
        order={order}
        />


      </div>
     </main>
    </>
  )
}

export default App
