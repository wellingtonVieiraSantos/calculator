
import { NumericButton } from './NumericButton'
import { Button } from './Button'
import { Wrapper } from './Wrapper'
import { Title } from './Title'

import { useState } from 'react'

import Numeral from 'react-numeral'

const Calculator = () => {

    const [num, setNum] = useState(0)
    const [firstNum, setFirstNum] = useState(0)
    const [result, setResult] = useState(0)
    const [operator, setOperator] = useState()
    const [error, setError] = useState('')

    
    const handleNum = e =>{
        if(error){
            handleResetAll()
        }
        if(num < 99999999 ){
            num ? setNum(parseFloat(num + e.target.value)) : setNum(parseFloat(e.target.value))
        } 
        if(result){
            handleResetAll()
            setNum(parseFloat(e.target.value))
        }
    }
    
    const handlePorcentage = () =>{
        setNum(num/100)
    }
    
    const handleResetAll = () => {
        setError('')
        setNum(0)
        setFirstNum(0)
        setOperator(null)
        setResult(0)
    }

    const handleReset = () => {
        result ? setResult(0) : setNum(0)
    }

    const handleChangeSignal = () => {
        if (num > 0) {           
            setNum(prevNum => -prevNum)
        }else if(num < 0){
            setNum(prevNum => Math.abs(prevNum))
        }
    }

    const handleOperator = e =>{

            setOperator(e.target.value)

            if(result){
                setFirstNum(result)
                setResult(0)
            }else{   
                setFirstNum(num)
            }

            handleReset()

    }

    const handleFloat = () => {
        if(!(num+'').includes('.')){
        setNum(prevNum => prevNum + '.')
        }
    }
    
    const handleCalculator = () =>{
        switch (operator) {
            case '/':
                if(num == 0){
                    setError('ERROR')
                }else{
                    setResult(firstNum / num)
                }
                break;
            case 'X':
                setResult(firstNum * num)
                break;
            case '+':
                setResult(firstNum + num)
                break;
            case '-':
                setResult(firstNum - num)
                break;
        }
    }

    const format = (result) =>{
        return result > 99999999 ?
            <Numeral value={result} format={'0,0e+0'}/>
            : result
    }

  return (
    <>
    <Wrapper >
        <p> {!result ? 
            (operator && <span>{format(firstNum)} {operator}</span>)
            : (operator && <span>{format(firstNum)} {operator} {num} =</span>)
            }
        </p>

        <Title >{!error ?
            result ? format(result) : num 
        :   error
        }</Title>

        <table>
            <tbody>
                <tr>
                    <td><Button onClick={handleReset}>CE</Button></td>
                    <td><Button onClick={handleResetAll}>C</Button></td>
                    <td><Button onClick={handlePorcentage}>%</Button></td>
                    <td><Button operation onClick={handleOperator} value={'/'}>/</Button></td>
                </tr>    
                <tr>
                    <td><NumericButton onClick={handleNum} value={7}>7</NumericButton></td>
                    <td><NumericButton onClick={handleNum} value={8}>8</NumericButton></td>
                    <td><NumericButton onClick={handleNum} value={9}>9</NumericButton></td>
                    <td><Button operation onClick={handleOperator} value={'X'}>X</Button></td>
                </tr>    
                <tr>
                    <td><NumericButton onClick={handleNum} value={4}>4</NumericButton></td>
                    <td><NumericButton onClick={handleNum} value={5}>5</NumericButton></td>
                    <td><NumericButton onClick={handleNum} value={6}>6</NumericButton></td>
                    <td><Button operation onClick={handleOperator} value={'+'}>+</Button></td>
                </tr>    
                <tr>
                    <td><NumericButton onClick={handleNum} value={1}>1</NumericButton></td>
                    <td><NumericButton onClick={handleNum} value={2}>2</NumericButton></td>
                    <td><NumericButton onClick={handleNum} value={3}>3</NumericButton></td>
                    <td><Button operation onClick={handleOperator} value={'-'}>-</Button></td>
                </tr>    
                <tr>
                    <td><Button onClick={handleChangeSignal}>+/-</Button></td>
                    <td><NumericButton onClick={handleNum} value={0}>0</NumericButton></td>
                    <td><Button onClick={handleFloat}>,</Button></td>
                    <td><Button operation onClick={handleCalculator}>=</Button></td>
                </tr>
            </tbody>   
        </table> 
    </Wrapper>  
    </>
  )
}

export default Calculator