import {useState} from "react";
import InputMask from 'react-input-mask';
import Link from "next/link";
import {useRouter} from "next/router";
import {router} from "next/client";
import {operators} from "../src/constants";
import {Back, Title, Label, Form, Button} from "./id.styled";
import Alert from "../src/components/alert";
import {Get} from "../src/request";
import {Container, Main} from "../styles/global.styled";

const Id = () => {

    const [phone, setPhone] = useState('');
    const [money, setMoney] = useState('');
    const [isVisible, setIsVisible] = useState(false)
    const [isVisibleMoney, setIsVisibleMoney] = useState(false)
    const [message, setMessage] = useState('Успешно пополнено');

    const [isSuccess, setSuccess] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const {query} = useRouter()

    const operator: string | undefined = operators.find(item => item.id == Number(query.id))?.name;

    function onChange(e: { target: {name: string, value: string} }){
        const target = e.target;
        if(target.name === 'phone'){
            setPhone(target.value)
        }
        else {
            setMoney(target.value)
        }
    }

    async function Pay(){
        const isValid = phone.length === 18;
        setIsVisible(!isValid)
        const numb = Number(money.substring(2))
        const isValidMoney = numb >= 1 && numb <= 1000;
        setIsVisibleMoney(!isValidMoney)
        if(isValid && isValidMoney){

           const data = await Get('/api/operator/');

           setIsShow(true);
           if(data.status){
               setMessage('Успешно пополнено');
               setSuccess(true);
           }
           else{
               setMessage('Произошла ошибка')
           }
        }
    }

    function closeModal(){
        setIsShow(false);
        if(isSuccess){
            router?.push('/');
        }
    }

    return(
        <Container>
            {isShow &&
                <Alert
                    message={message}
                    closeModal={closeModal}
                />
            }
            <Main>
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
                        placeholder='+7 (999) 000-00-00'
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
            </Main>
        </Container>
    )
}

export default  Id;