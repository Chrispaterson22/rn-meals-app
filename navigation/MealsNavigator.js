import React from 'react'
import { Platform, Text } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen'
import Colors from '../constants/Colors'

const defaultStackNavOptions = {
	headerStyle: {
		backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
	},
	headerTitleStyle: {
		fontFamily: 'open-sans-bold',
	},
	headerBackTitleStyle: {
		fontFamily: 'open-sans',
	},
	headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primaryColor,
}

const MealsNavigator = createStackNavigator(
	{
		Categories: CategoriesScreen,
		CategoryMeals: CategoryMealsScreen,
		MealDetail: MealDetailScreen,
	},
	{
		defaultNavigationOptions: defaultStackNavOptions,
	}
)

const FavNavigator = createStackNavigator(
	{
		Favorites: FavoritesScreen,
		MealDetail: MealDetailScreen,
	},
	{
		defaultNavigationOptions: defaultStackNavOptions,
	}
)

const tabScreenConfig = {
	Meals: {
		screen: MealsNavigator,
		navigationOptions: {
			tabBarIcon: tabInfo => {
				return (
					<Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
				)
			},
			tabBarColor: Colors.primaryColor,
			tabBarLabel:
				Platform.OS === 'android' ? (
					<Text style={{ fontFamily: 'open-sans' }}>Meals</Text>
				) : (
					'Meals'
				),
		},
	},
	Favorites: {
		screen: FavNavigator,
		navigationOptions: {
			tabBarIcon: tabInfo => {
				return <Ionicons name='ios-heart' size={25} color={tabInfo.tintColor} />
			},
			tabBarColor: Colors.accentColor,
			tabBarLabel:
				Platform.OS === 'android' ? (
					<Text style={{ fontFamily: 'open-sans' }}>Favorites</Text>
				) : (
					'Favorites'
				),
		},
	},
}

const MealsFavTabNavigator =
	Platform.OS === 'android'
		? createMaterialBottomTabNavigator(tabScreenConfig, {
				activeColor: '#fff',
				shifting: true,
		  })
		: createBottomTabNavigator(tabScreenConfig, {
				tabBarOptions: {
					labelStyle: {
						fontFamily: 'open-sans',
					},
					activeTintColor: 'Colors.accentColor',
				},
		  })

const FiltersNavigator = createStackNavigator(
	{
		Filters: FiltersScreen,
	},
	{
		// navigationOptions: {
		// 	drawerLabel: 'Filters!!!',
		// },
		defaultNavigationOptions: defaultStackNavOptions,
	}
)

const MainNavigator = createDrawerNavigator(
	{
		MealsFavs: {
			screen: MealsFavTabNavigator,
			navigationOptions: {
				drawerLabel: 'Meals',
			},
		},
		Filters: FiltersNavigator,
	},
	{
		drawerWidth: 100,
		contentOptions: {
			activeTintColor: Colors.accentColor,
			labelStyle: {
				fontFamily: 'open-sans-bold',
				fontWeight: 'normal', //added to allow font to work on android
			},
		},
	}
)

export default createAppContainer(MainNavigator)
