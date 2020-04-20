import React, { useState, useEffect } from 'react';
import { StatusBar, Text, View, Modal, TouchableHighlight } from 'react-native';

import {
  Container,
  ContainerModal,
  HeaderModal,
  Input,
  SubmitButton,
} from './styles';

export default function Transfer() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.tron.log(`Você clicou ${count} vezes`);
  });

  function toggleModal() {
    setIsModalVisible(!isModalVisible);
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="blue" />
      <Container>
        <Modal
          animationType="slide"
          transparent={false}
          visible={isModalVisible}
          presentationStyle="pageSheet"
        >
          <ContainerModal style={{ marginTop: 22 }}>
            <HeaderModal>
              <View>
                <Text>Hello World!</Text>
                <TouchableHighlight onPress={toggleModal}>
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => setCount(count + 1)}>
                  <Text>Clique aqui</Text>
                </TouchableHighlight>
                <Text>Você clicou {count} vezesss</Text>
              </View>
            </HeaderModal>
          </ContainerModal>
        </Modal>

        <TouchableHighlight onPress={toggleModal}>
          <Text>Open Modal</Text>
        </TouchableHighlight>
        <Input
          autoCorrect={false}
          autoCapitalize="sentences"
          placeholder="Testee"
          autoCompleteType="email"
          defaultValue="Opa"
          maxLength="4"
          placeholderTextColor="green"
        />
        <SubmitButton title="Press me" color="green" backgroundColor="red" />
      </Container>
    </>
  );
}
