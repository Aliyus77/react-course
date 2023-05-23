import { ChevronRightIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
  const { totalPrice, totalProducts } = props

  return (
    <div className='flex items-center border border-black rounded-lg w-80 m-1'>
      <div>
        <p className='flex flex-col items-center w-80 p-3'>
          <div className='flex justify-between w-full px-1.5 py-0.5'>
            <span className='font-medium'>Date: </span>
            <span className='font-medium text-lg'>01.01.23</span>
          </div>
          <div className='flex justify-between w-full px-2 py-1'>
            <span className='font-semibold'>Qty of Products: </span>
            <span className='font-medium text-lg'>{totalProducts}</span>
          </div>
          <div className='flex justify-between w-full px-2 py-1'>
            <span className='font-semibold'>Purchase Value: </span>
            <span className='font-medium text-lg'>$ {totalPrice}</span>
          </div>
        </p>
      </div>
      <div>
        <ChevronRightIcon className='h-6 w-6 text-black'/>
      </div>
    </div>
  )
}

export default OrdersCard