
import React, {Component} from 'react'
import {View, ToastAndroid, Alert} from 'react-native'
import Button from './src/components/Button'
import Display from './src/components/Display'
import Main from './src/style/Main'

export default class App extends Component {

    state = {
        expression: '0',
        finalExpression: ''
    }

    expressionDisplay = expression => this.setState({expression})

    finalExpressionDisplay = finalExpression => this.setState({finalExpression})

    clear = () => {
    	this.expressionDisplay('0')
    }

    clearAll = () => {
    	this.expressionDisplay('0')
    	this.finalExpressionDisplay('')
    }

    popCaractere = () => {
		(this.state.expression.length == 1)
		?this.expressionDisplay('0')
		:this.expressionDisplay(this.state.expression.substring(0, (this.state.expression.length - 1)))
	}
	
	pushCaractere = caractere => {
		(this.state.expression == '0')
		?this.expressionDisplay(caractere)
		:this.expressionDisplay(this.state.expression + caractere)
	}
	
	unshiftCaractere = caractere => {
		(this.state.expression.length == 1)
		?this.expressionDisplay('0')
		:this.expressionDisplay(this.state.expression.substring(1))
	}

	notificar = mensagem => {
		Alert.alert("Atenção", mensagem)
	}

	validacoes = () => {
		if(this.state.expression[(this.state.expression.length - 1)] == '+' || this.state.expression[(this.state.expression.length - 1)] == '-' || this.state.expression[(this.state.expression.length - 1)] == '/' || this.state.expression[(this.state.expression.length - 1)] == '*' || this.state.expression[(this.state.expression.length - 1)] == ','){
			this.notificar("Caracteres incorretos encontrados no fim da expressão!")
		} else{
			if(this.state.expression[0] == ',' || this.state.expression[0] == '/' || this.state.expression[0] == '*'){
				this.notificar("Caracteres incorretos encontrados no início da expressão!")
			}else{
				if(this.state.expression == '.'){
					this.notificar("Caracteres incorretos encontrados na expressão!")
				}else{
					if(this.state.expression.split('.').length > 2){
						this.notificar("Caracteres incorretos encontrados na expressão!")
					}else{
						return true
					}
				}
			}
		}
		return false
	}

	calc = () => {
		if(this.validacoes()) this.expressionDisplay(eval(this.state.expression).toString())
	}

  render() {
    return (
      <View style={Main.container}>
		<Display value={this.state.expression} /*finalExpression={this.state.finalExpression}*/ />
        <View style={Main.buttons}>
          <Button onClick={this.popCaractere} onHold={this.clear} label="<"/>
          <Button onClick={this.clearAll} label="CA"/>
          <Button onClick={this.clear} label="C"/>
          <Button operation onClick={this.pushCaractere} label="/"/>
          <Button onClick={this.pushCaractere} label="7"/>
          <Button onClick={this.pushCaractere} label="8"/>
          <Button onClick={this.pushCaractere} label="9"/>
          <Button operation onClick={this.pushCaractere} label="*"/>
          <Button onClick={this.pushCaractere} label="4"/>
          <Button onClick={this.pushCaractere} label="5"/>
          <Button onClick={this.pushCaractere} label="6"/>
          <Button operation onClick={this.pushCaractere} label="+"/>
          <Button onClick={this.pushCaractere} label="1"/>
          <Button onClick={this.pushCaractere} label="2"/>
          <Button onClick={this.pushCaractere} label="3"/>
          <Button operation onClick={this.pushCaractere} label="-"/>
          <Button onClick={this.pushCaractere} label=","/>
          <Button onClick={this.pushCaractere} label="0"/>
          <Button onClick={this.pushCaractere} label="."/>
          <Button operation onClick={this.calc} label="="/>
        </View>
      </View>
    );
  }
}
