import React from 'react'
import FoodItem from './FoodItem'

const FoodList = ({ foods, addFood, removeFood, selectedFood }) => {
  return (
    <div className={'food-list'}>
      {foods.map(food => (
        <FoodItem
          key={food.id}
          food={food}
          selectedCount={selectedFood[food.id] || 0}
          isSelected={selectedFood[food.id] && selectedFood[food.id] > 0}
          addFood={() => addFood(food.id)}
          removeFood={() => removeFood(food.id)}
        />
      ))}
    </div>
  )
}

export default FoodList
