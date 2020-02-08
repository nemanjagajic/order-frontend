import React from 'react'

const FoodItem = ({ food, addFood, removeFood, selectedCount, isSelected }) => {
  const handleItemClicked = () => !isSelected && addFood()

  return (
    <div onClick={handleItemClicked} className={isSelected ? 'food-item-selected' : 'food-item'}>
      <div className={'title'}>{ food.name }</div>
      <div>{ `${food.price} din` }</div>
      {isSelected && (
        <div className={'counter'}>
          <button className={'food-button'} onClick={removeFood}>-</button>
          <div>{ selectedCount }</div>
          <button className={'food-button'} onClick={addFood}>+</button>
        </div>
      )}
      {isSelected && (
        <div>{`= ${selectedCount * food.price} din`}</div>
      )}
    </div>
  )
}

export default FoodItem
