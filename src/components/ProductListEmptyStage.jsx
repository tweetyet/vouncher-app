import React from 'react'

const ProductListEmptyStage = () => {
  return (
    <tr className="odd:bg-neutral-primary even:bg-neutral border-b border-default ">
    <td colSpan={5} className="px-6 py-4 text-center">
      There is no Product
    </td>
  </tr>
  )
}

export default ProductListEmptyStage
