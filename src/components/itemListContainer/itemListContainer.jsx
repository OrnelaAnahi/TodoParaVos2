import ItemCount from '../ItemCount/ItemCount'

export default function ItemListContainer (props) {
  return (
    <>
      <h2>{props.grettings}</h2>
      <ItemCount initial={1} stock={5} onAdd='' />
    </>
  )
}
