import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { CATEGORIES } from '../data/dummy-data'
import HeaderButton from '../components/HeaderButton'
import CategoryGridTile from '../components/CategoryGridTile'

const CategoriesScreen = props => {
	const renderGridItem = itemData => {
		return (
			<CategoryGridTile
				title={itemData.item.title}
				color={itemData.item.color}
				onSelect={() => {
					props.navigation.navigate('CategoryMeals', {
						categoryId: itemData.item.id,
					})
				}}
			/>
		)
	}

	return (
		<FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
	)
}

CategoriesScreen.navigationOptions = navData => {
	return {
		headerTitle: 'Meal Categories',
		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title='menu'
					iconName='ios-menu'
					onPress={() => {
						navData.navigation.toggleDrawer()
					}}
				/>
			</HeaderButtons>
		),
	}
}

export default CategoriesScreen

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
