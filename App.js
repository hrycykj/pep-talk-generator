import { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Appbar, DarkTheme, DefaultTheme, Surface, ThemeProvider, Button, Text, Provider as PaperProvider } from 'react-native-paper'
import DropDown from 'react-native-paper-dropdown';

import { firstColumn, secondColumn, thirdColumn, fourthColumn } from './data'

export default function App() {
  let [nightMode, setNightMode] = useState (false)
  let [generate, setGenerate] = useState (false)
  let [showDropDown1, setShowDropDown1] = useState (false)
  let [showDropDown2, setShowDropDown2] = useState (false)
  let [showDropDown3, setShowDropDown3] = useState (false)
  let [showDropDown4, setShowDropDown4] = useState (false)
  let [columnOne, setColumnOne] = useState('')
  let [columnTwo, setColumnTwo] = useState('')
  let [columnThree, setColumnThree] = useState('')
  let [columnFour, setColumnFour] = useState('')

  const onRandom = () => {

    setColumnOne(firstColumn[Math.floor(Math.random()*firstColumn.length)].value)
    setColumnTwo(secondColumn[Math.floor(Math.random()*secondColumn.length)].value)
    setColumnThree(thirdColumn[Math.floor(Math.random()*thirdColumn.length)].value)
    setColumnFour(fourthColumn[Math.floor(Math.random()*fourthColumn.length)].value)

    setGenerate(true)
  }

  const onReset = () => {
    setColumnOne('')
    setColumnTwo('')
    setColumnThree('')
    setColumnFour('')
    setGenerate(false)
  }

  const onGenerate = () => {
    setGenerate(true)
  }

  return (
    <PaperProvider theme={nightMode ? DarkTheme : DefaultTheme}>
      <ThemeProvider theme={nightMode ? DarkTheme : DefaultTheme}>
        <StatusBar
          backgroundColor = {
            nightMode ? DarkTheme.colors.surface : DefaultTheme.colors.primary
          }
          barStyle={"light-content"}
        />
        <Appbar.Header>
          <Appbar.Content title="Pep Talk Generator" />
          <Appbar.Action
            icon={nightMode ? "brightness-7" : "brightness-3"}
            onPress={() => setNightMode(!nightMode)}
          />
        </Appbar.Header>
        <Surface style = {styles.containerStyle}>
          <SafeAreaView style={styles.safeContainerStyle}>
            <View style = {styles.buttonContainerStyle}>
              <Button 
                mode="contained"
                icon="billiards"
                style = {{borderRadius: 10, width: "35%"}}
                onPress = {() => onRandom()}
              >
                <Text style={{fontSize: 20}}>RANDOM</Text>
              </Button>
            </View>
            <View style={{flex: 4}}>
              <DropDown 
                label={'First Column'}
                mode={'outlined'}
                visible={showDropDown1}
                showDropDown={() => setShowDropDown1(true)}
                onDismiss={() => setShowDropDown1(false)}
                value={columnOne}
                setValue={setColumnOne}
                list={firstColumn}
              />
              <DropDown 
                label={'Second Column'}
                mode={'outlined'}
                visible={showDropDown2}
                showDropDown={() => setShowDropDown2(true)}
                onDismiss={() => setShowDropDown2(false)}
                value={columnTwo}
                setValue={setColumnTwo}
                list={secondColumn}
              />
              <DropDown 
                label={'Third Column'}
                mode={'outlined'}
                visible={showDropDown3}
                showDropDown={() => setShowDropDown3(true)}
                onDismiss={() => setShowDropDown3(false)}
                value={columnThree}
                setValue={setColumnThree}
                list={thirdColumn}
              />
              <DropDown 
                label={'Fourth Column'}
                mode={'outlined'}
                visible={showDropDown4}
                showDropDown={() => setShowDropDown4(true)}
                onDismiss={() => setShowDropDown4(false)}
                value={columnFour}
                setValue={setColumnFour}
                list={fourthColumn}
              />
            </View>
            <View style = {styles.buttonContainerStyle}>
              <Button
                mode="contained"
                icon="arrow-down-box"
                style = {{borderRadius: 10, width: "35%"}}
                onPress = {() => onGenerate()}
              >
                <Text style={{fontSize: 18}}>
                  GENERATE
                </Text>
              </Button>
            </View>
            <View style={styles.pepTalkStyle}>
              <Text style={{
                  fontSize: 15,
                  fontWeight: 'bold'
                }}
              >
                {(columnOne&&columnTwo&&columnThree&&columnFour&&generate) && 
                  (columnOne+' '+columnTwo+' '+columnThree+' '+columnFour)
                }
                </Text>
            </View>
            <View style = {styles.buttonContainerStyle}>
              <Button
                mode="contained"
                style = {{borderRadius: 10, width: "35%"}}
                onPress = {() => onReset()}
              >
                <Text style={{fontSize: 18}}>
                  RESET
                </Text>
              </Button>
            </View>
            <StatusBar style="auto" />
          </SafeAreaView>
        </Surface>
      </ThemeProvider>
    </PaperProvider>
  );
}


const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  spacerStyle: {
    marginBottom: 15,
  },
  safeContainerStyle: {
    flex: 1,
    margin: 20,
    justifyContent: "center",
  },
  buttonContainerStyle: {
    flex:1,
    alignItems: "center",
    paddingTop: 5
  },
  pepTalkStyle: {
    flex: 2,
    alignItems: 'center',
  }
});
