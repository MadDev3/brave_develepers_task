import {Button} from "../../styles/id.styled";
import {Modal, Background, Window, Message} from "./alert.styled";

const Alert = (props: any) => {
  return(
      <Modal>
          <Window>
              <Message>{props.message}</Message>
              <Button onClick={props.closeModal} type='button' value='Закрыть' />
          </Window>
          <Background onClick={props.closeModal} ></Background>
      </Modal>
  )
}

export default Alert;