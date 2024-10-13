import { useState } from 'react';
import CategoryList from './components/CategoryList';
import ImageLeft from './components/ImageLeft';
import ImageRight from './components/ImageRight';
import categories from './categoryData';
const ProductShowcase = () => {

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="max-w-[1300px] mx-auto p-8">

      {/*header */}
      <div className='max-w-[700px] mx-auto text-center'>
      <h2 className="text-3xl font-bold mb-4">Bring out the beauty of your products.</h2>
      <p className="text-gray-600 mb-6">
        As your business grows, so do the complexities of managing your operations. Genie helps you plan better, launch faster, and focus on what matters most—your customers.
      </p>
      </div>
     

      {/* Category Tabs */}
      <CategoryList categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

      {/*images */}
      <div className='flex flex-col sm:flex-row'>
      <ImageLeft images={selectedCategory.images.rightImage}/> {/*image left */}
      <ImageRight images={selectedCategory.images.leftImage}/> {/*image right */}
      
      </div>
    
    </div>
  );
};

export default ProductShowcase;
