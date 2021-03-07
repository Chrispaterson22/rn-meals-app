import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const CategoryMealScreen = props => {
	return (
		<View style={styles.screen}>
			<Text>The Category Meal Screen</Text>
			<Button
				title='Meal Detail'
				onPress={() => {
					props.navigation.navigate('MealDetail')
				}}
			/>
		</View>
	)
}

export default CategoryMealScreen

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
