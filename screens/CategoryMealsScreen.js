import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'

const CategoryMealScreen = props => {
	const catId = props.navigation.getParam('categoryId')

	const displayedMeals = MEALS.filter(
		meal => meal.categoryIds.indexOf(catId) >= 0
	)

	const renderMealItem = itemData => {
		return (
			<MealItem
				title={itemData.item.title}
				image={itemData.item.imageUrl}
				duration={itemData.item.duration}
				complexity={itemData.item.complexity}
				affordability={itemData.item.affordability}
				onSelectMeal={() => {
					props.navigation.navigate('MealDetail', { mealId: itemData.item.id })
				}}
			/>
		)
	}

	return (
		<View style={styles.screen}>
			<FlatList
				data={displayedMeals}
				renderItem={renderMealItem}
				style={{ width: '95%' }}
			/>
		</View>
	)
}

CategoryMealScreen.navigationOptions = navigationData => {
	const catId = navigationData.navigation.getParam('categoryId')

	const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

	return {
		headerTitle: selectedCategory.title,
	}
}

export default CategoryMealScreen

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
