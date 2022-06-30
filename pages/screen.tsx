import {useState} from "react";
import styled from "styled-components";
import styles from '../styles/Home.module.css'
import InputMask from 'react-input-mask';
import Link from "next/link";

const Form = styled.div`
border: 3px solid #711C91;
display: flex;
flex-direction: column;
padding: 10px;
border-radius: 10px
`

const Title = styled.div`
font-family: 'Finlandica', sans-serif;
font-size: 24px;
text-align: center;
font-weight: 700;
background-color: #711C91;
color: white;
padding: 3px 0;
border-radius: 50px;
`

const Button = styled.input`
background-color: #711C91;
font-family: 'Finlandica', sans-serif;
border: none;
padding: 3px 0;
color: white;
border-radius: 50px;
font-weight: 700;
font-size: 24px;
text-transform: uppercase;
&:hover{
background-color: #800080;
}
&:active{
background-color: #BA55D3;
}
`

const Label = styled.label`
font-size: 20px;
font-family: 'Finlandica', sans-serif;
`

const Alert = styled.div`
margin-top: -5px;
margin-bottom: 5px;
color: #711C91;
font-weight: 600;
font-family: 'Finlandica', sans-serif;
`

const Back = styled.input`
font-family: 'Finlandica', sans-serif;
background-color: white;
border: 3px solid #711C91;
padding: 3px 0;
color: #711C91;
border-radius: 50px;
font-weight: 700;
font-size: 24px;
margin-bottom: 10px;
text-transform: uppercase;
&:hover{
background-color: #711C91;
color: white;
}
&:active{
background-color: #BA55D3;
}
`

const Screen = (props: any) => {

    const [phone, setPhone] = useState('');
    const [money, setMoney] = useState('');
    const [isVisible, setIsVisible] = useState(false)
    const [isVisibleMoney, setIsVisibleMoney] = useState(false)

    function onChange(e: { target: {name: string, value: string} }){
        const target = e.target;
        if(target.name === 'phone'){
            setPhone(target.value)
        }
        else {
            setMoney(target.value)
        }
    }

    function Pay(){
        const isValid = phone.length === 18;
        setIsVisible(!isValid)
        const numb = Number(money.substring(2))
        const isValidMoney = numb >= 1 && numb <= 1000;
        setIsVisibleMoney(!isValidMoney)
        if(isValid && isValidMoney){

        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.main}>
                <Form>
                    <Link href={'/'}>
                        <Back
                            type='button'
                            value='Назад'
                        />
                    </Link>
                    <Title>МТС</Title>
                    <Label htmlFor='phone'>
                        Введите номер телефона:
                    </Label>
                    <InputMask
                        id='phone'
                        className='input-mask'
                        onChange={onChange}
                        name='phone'
                        value={phone}
                        maskChar=''
                        mask='+7 (999) 999 99 99'
                        placeholder='8 (999) 000-00-00'
                    />
                    {isVisible &&
                        <Alert>Введите верный телефон</Alert>
                    }
                    <Label htmlFor='price'>
                        Укажите сумму:
                    </Label>
                    <InputMask
                        id='price'
                        className='input-mask'
                        onChange={onChange}
                        maskChar=''
                        name='money'
                        value={money}
                        mask={'₽ 9999'}
                        placeholder='₽'
                    />
                    {isVisibleMoney &&
                    <Alert>Укажите сумму от 1 до 1000</Alert>
                    }
                    <Button
                        onClick={Pay}
                        value='Оплатить'
                        type='button'
                    />
                </Form>
            </div>
        </div>
    )
}

export default  Screen;