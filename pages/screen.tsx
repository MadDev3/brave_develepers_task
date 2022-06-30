import {useState} from "react";
import styled from "styled-components";
import styles from '../styles/Home.module.css'
import InputMask from 'react-input-mask';

const Form = styled.div`
border: 1px solid black;
display: flex;
flex-direction: column;
padding: 10px;
`

const Label = styled.label`
font-size: 20px;
font-family: 'Finlandica', sans-serif;
`

const Screen = (props: any) => {

    const [phone, setPhone] = useState('')
    const [money, setMoney] = useState('');

    function onChange(e: { target: {name: string, value: string} }){
        const target = e.target;
        if(target.name === 'phone'){
            setPhone(target.value)
        }
        else {
            setMoney(target.value)
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.main}>
                <Form>
                    МТС
                    <Label htmlFor='phone'>
                        Введите номер телефона:
                    </Label>
                    <InputMask
                        id='phone'
                        className='input-mask'
                        onChange={onChange}
                        name='phone'
                        value={phone}
                        mask='+7 (999) 999 99 99'
                        placeholder='8 (999) 000-00-00'
                    />
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
                        placeholder='0 ₽'
                    />
                </Form>
            </div>
        </div>
    )
}

export default  Screen;