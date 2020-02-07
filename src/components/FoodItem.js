import React from 'react'

const FoodItem = ({ food, addFood, removeFood, selectedCount, isSelected }) => {
  return (
    <div className={isSelected ? 'food-item-selected' : 'food-item'}>
      <div className={'title'}>{ food.name }</div>
      <div>{ `${food.price} din` }</div>
      <div className={'counter'}>
        <button
          className={isSelected ? 'food-button-selected' : 'food-button'}
          onClick={removeFood}
        >
          -
        </button>
        <div>{ selectedCount }</div>
        <button
          className={isSelected ? 'food-button-selected' : 'food-button'}
          onClick={addFood}
        >
          +
        </button>
      </div>
      {isSelected && (
        <div>{`= ${selectedCount * food.price} din`}</div>
      )}
    </div>
  )
}

export default FoodItem
