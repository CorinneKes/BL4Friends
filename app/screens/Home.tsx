import React from 'react';
import { StyleProp, TextStyle, View  , ViewStyle } from 'react-native';
import { Screen, Text, ListItem } from "../components"
import { spacing } from "../theme"

const bucketListWithAdnan: BucketList = {
    id: "1",
    name: "Adnan's Bucket List",
    description: "Adnan's Bucket List",
    items: [
        {
            id: "1",
            name: "Go to the moon",
            description: "Go to the moon",
            completed: false,
        },
        {
            id: "2",
            name: "Go to mars",
            description: "Go to mars",
            completed: false,
        },
        {
            id: "3",
            name: "Go to the stars",
            description: "Go to the stars",
            completed: false,
        }
    ],
}
    

const bucketListWithCorinne: BucketList = {
    id: "2",
    name: "Corinne's Bucket List",
    description: "Corinne's Bucket List",
    items: [
            {
                id: "1",
                name: "Go Chocolate Mambo",
                description: "Go Chocolate Mambo Salsa Dancing",
                completed: false, 
            },
            {
                id: "2",
                name: "Stand on the Alps in Switzerland",
                description: "Stand on the Alps in Switzerland",
                completed: false,
            }
    ]
}

export type BucketList = {
    id: string;
    name: string;
    description: string;
    items: BucketListItem[];
}

const bucketLists: BucketList[] = [
    bucketListWithAdnan,
    bucketListWithCorinne
]


export type BucketListItem = {
    id: string;
    name: string;
    description: string;
    completed: boolean;
}


export const Home = () => {
    return (
      <Screen preset="scroll" contentContainerStyle={$container} safeAreaEdges={["top"]}>
        <View>
            <Text style={$textStyle}>Hello BucketList</Text>
            {bucketLists.map((bucketList) => (
                <ListItem textStyle={$listItemTextStyle} style={$listItemStyle} key={bucketList.id} text={bucketList.name} />
            ))}
        </View>
        </Screen>
    );
};

const $container: ViewStyle = {
    paddingTop: spacing.lg + spacing.xl,
    paddingHorizontal: spacing.lg,
  }
  
const $textStyle: TextStyle = {
    textAlign: "center",
    fontSize: 50,
    color: "#61DAFB",
    marginBottom: spacing.xxl,
}

const $listItemStyle: ViewStyle = {
    backgroundColor: "#61DAFB",
    marginBottom: spacing.lg,
    borderRadius: 10,
    padding: 10,
}

const $listItemTextStyle: StyleProp<TextStyle> = {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
}