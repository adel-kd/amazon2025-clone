import React from 'react'
import { categoryInfos } from './categoryFullInfo'
import CategoryCard from './CategoryCard'
import classes from './category.module.css'

function Category() {
  return (
    <section className={classes.category_container}> 
        {
            categoryInfos.map((infos,index)=>(
                <CategoryCard data = {infos} key={index}/>
            ))
        }
    </section>
  )
}

export default Category