import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../assets/data'

const Categories = () => {
  return (
    <div className='flex flex-wrap gap-1 max-w-screen'>
        {categories.map( (category) => {
            return (
                <div key={category.id} className="flex flex-col justify-center flex-1 relative min-w-[200px] max-h-[80%] object-cover">
                    <div className='absolute self-center text-center'>
                        <h2 className='text-md sm:text-lg md:text-3xl text-center text-white'>
                            {category.title}
                        </h2>
                        <Link to={`/products/${category.category}`}>
                            <button className='p-3 rounded-md bg-blue-400 hover:bg-blue-600 min-w-fit w-[50%] self-center mt-2 text-md sm:text-lg md:text-3xl'>Explore</button>
                        </Link>
                    </div>
                    <img src={category.img} alt="" className='rounded-md flex-1 object-cover' />
                </div>
            )
        })}
    </div>
  )
}

export default Categories