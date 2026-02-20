import React from 'react'

const ProductListSkeletonLoader = () => {
  return (
  
      <tr className="border-b border-default animate-pulse">
  {/* ID */}
  <td className="px-6 py-4">
    <div className="h-4 w-6 bg-[#3A2F26]/20 rounded"></div>
  </td>

  {/* Product Name */}
  <th scope="row" className="px-6 py-4">
    <div className="h-4 w-40 bg-[#3A2F26]/20 rounded"></div>
  </th>

  {/* Price */}
  <td className="px-6 py-4 text-end">
    <div className="h-4 w-20 bg-[#3A2F26]/20 rounded ml-auto"></div>
  </td>

  {/* Date & Time */}
  <td className="px-6 py-4 text-end space-y-2">
    <div className="h-3 w-24 bg-[#3A2F26]/20 rounded ml-auto"></div>
    <div className="h-3 w-16 bg-[#3A2F26]/20 rounded ml-auto"></div>
  </td>

  {/* Action Buttons */}
  <td className="px-6 py-4">
    <div className="flex justify-end">
      <div className="inline-flex space-x-2">
        <div className="h-8 w-8 bg-[#3A2F26]/20 rounded"></div>
        <div className="h-8 w-8 bg-[#3A2F26]/20 rounded"></div>
      </div>
    </div>
  </td>
</tr>

  )
}

export default ProductListSkeletonLoader
