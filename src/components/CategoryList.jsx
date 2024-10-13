import React from 'react'

const CategoryList = ({categories,selectedCategory,setSelectedCategory}) => {
 
      
  return (
    <div className="flex flex-wrap justify-center space-x-2 mb-8">
    {categories.map((category) => (
      <button
        key={category.name}
        className={`px-4 py-2 mt-4 text-sm rounded-full ${selectedCategory.name === category.name ? 'bg-blue-700 text-white' : 'bg-gray-200'}`}
        onClick={() => setSelectedCategory(category)}
      >
        {category.name}
      </button>
    ))}
  </div>
  )
}

export default CategoryList