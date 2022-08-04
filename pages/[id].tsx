import {useState} from "react";
import styled from "styled-components";
import styles from '../styles/Home.module.css'
import InputMask from 'react-input-mask';
import Link from "next/link";
import {useRouter} from "next/router";
import {Redirect} from "next";
import {router} from "next/client";

const Form = styled.div`
border: 3px solid #711C91;
display: flex;
flex-direction: column;
padding: 10px;
border-radius: 10px;
font-size: 2em;
@media (max-width: 820px){
    width: 90%;
    font-size: 3em;
}
font-size: 24px;
`

const Title = styled.div`
font-family: 'Finlandica', sans-serif;
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
cursor: pointer;
border: none;
padding: 3px 0;
color: white;
border-radius: 50px;
font-weight: 700;
text-transform: uppercase;
&:hover{
background-color: #800080;
}
&:active{
background-color: #BA55D3;
}
@media (max-width: 820px){
    font-size: 1em;
}
`

const Label = styled.label`
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
margin-bottom: 10px;
text-transform: uppercase;
&:hover{
background-color: #711C91;
color: white;
}
&:active{
background-color: #BA55D3;
}
@media (max-width: 820px){
    font-size: 1em;
}
`

const Modal = styled.div`
width: 100%;
height: 100%;
position: fixed;
flex: 1;
display: none;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Window = styled.div`
padding: 20px 50px;
z-index: 10;
background-color: white;
position: fixed;
display: flex;
flex-direction: column;
border-radius: 40px;
font-size: 1em;
@media (max-width: 820px){
    font-size: 3em;
}
`

const Message = styled.span`
font-family: 'Finlandica', sans-serif;
margin-bottom: 10px;
`

const Background = styled.div`
width: 100%;
height: 100%;
background-color: black;
opacity: 0.5;
`

const Id = (props: any) => {

    const [phone, setPhone] = useState('');
    const [money, setMoney] = useState('');
    const [isVisible, setIsVisible] = useState(false)
    const [isVisibleMoney, setIsVisibleMoney] = useState(false)
    const [message, setMessage] = useState('Успешно пополнено');

    const [isSuccess, setSuccess] = useState(false);
    const {query} = useRouter()

    let operator: string = 'МТС';
    switch (query.id){
        case '1':
            operator = 'МТС';
            break;
        case '2':
            operator = 'Мегафон';
            break;
        case '3':
            operator = 'Билайн';
            break;
    }

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
           fetch('/api/operator/')
               .then((res) => res.json()).then((data) => {
                   document.getElementById('modal').style.display = 'flex';
                   if(data.status){
                       setMessage('Успешно пополнено');
                       setSuccess(true);
                   }
                   else{
                       setMessage('Произошла ошибка')
                   }
           });
        }
    }

    function closeModal(){
        document.getElementById('modal').style.display = 'none';
        if(isSuccess){
            router.push('/');
        }
    }

    return(
        <div className={styles.container}>
            <Modal id='modal'>
                <Window>
                    <Message>{message}</Message>
                    <Button onClick={closeModal} type='button' value='Закрыть' />
                </Window>
                <Background onClick={closeModal} ></Background>
            </Modal>
            <div className={styles.main}>
                <Form>
                    <Link href={'/'}>
                        <Back
                            type='button'
                            value='Назад'
                        />
                    </Link>
                    <Title>
                        {operator}
                    </Title>
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

export default  Id;