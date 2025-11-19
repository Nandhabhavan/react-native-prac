import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Feather } from '@expo/vector-icons'

const _layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Feather name="home" size={24} color={focused ? "blue" : "gray"} />
                        </>
                    )
                }}
            />

            <Tabs.Screen
                name='search'
                options={{
                    title: 'Search',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Feather name="search" size={24} color={focused ? "blue" : "gray"} />
                        </>
                    )
                }}
            />

            <Tabs.Screen
                name='saved'
                options={{
                    title: 'Saved',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Feather name="download" size={24} color={focused ? "blue" : "gray"} />
                        </>
                    )
                }}
            />

            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Feather name="user" size={24} color={focused ? "blue" : "gray"} />
                        </>
                    )
                }}
            />
        </Tabs>
    )
}

export default _layout

const styles = StyleSheet.create({})