import React from 'react'
import { Text } from 'react-native'
import { View, Container, Content, Card, CardItem, H1, Button, Body } from 'native-base'
import firebase from 'firebase'

const TodoDetailScreen = props => {
    
    const { item } = props.navigation.state.params

    const onDeleteClick = (todoId) => {
        firebase.database().ref(`/${todoId}`).remove()
        .then(() => {
            props.navigation.goBack()
        })
    }

    return (
        <Container>
            {/* <Content> */}
                <Card style={{ marginTop: '50%' }}>
                    <CardItem header>
                        <Body>
                            <H1>
                                Todo: 
                            </H1>
                            <Text>
                                ID: {item.id}
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Text>
                            Status: {item.status}
                        </Text>
                    </CardItem>
                    <CardItem>
                        <Text>
                            Date Created: {item.dateCreated}
                        </Text>
                    </CardItem>
                    <CardItem>
                        <Text>
                            Date Completed: {item.dateCompleted}
                        </Text>
                    </CardItem>
                    <CardItem>
                        <Button info onPress={ () => props.navigation.goBack() }>
                            <Text>Go Back</Text>
                        </Button>
                    </CardItem>
                    <CardItem>
                        <Button danger onPress={ () => onDeleteClick(item.id) }>
                            <Text>delete</Text>
                        </Button>
                    </CardItem>
                </Card>
            {/* </Content> */}
        </Container>
    )
}

export default TodoDetailScreen