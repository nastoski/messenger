import moment from "moment";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth } from "../firebase";

function Message({ user, message }) {
  const [userLoggedIn] = useAuthState(auth);

  const MessageType =
    user === userLoggedIn.email ? SendedMessage : ReceivedMessage;

  return (
    <Container>
      <MessageType>
        {message.message}
        <Timestamp>
          {message.timestamp ? moment(message.timestamp).format("LT") : "..."}
        </Timestamp>
      </MessageType>
    </Container>
  );
}

export default Message;

const Container = styled.div``;

const MessageContent = styled.p`
  width: fit-content;
  padding: 15px;
  margin: 10px;
  min-width: 60px;
  border-radius: 20px;
  padding-bottom: 26px;
  position: relative;
  text-align: right;
`;

const SendedMessage = styled(MessageContent)`
  margin-left: auto;
  color: white;
  background-image: linear-gradient(
    to right top,
    #006fff,
    #0e76fb,
    #1f7df7,
    #2f84f2,
    #3e8aed
  );
`;

const ReceivedMessage = styled(MessageContent)`
  background-color: whitesmoke;
  text-align: left;
`;

const Timestamp = styled.span`
  color: gray;
  padding: 10px;
  font-size: 9px;
  position: absolute;
  bottom: 0;
  text-align: right;
  right: 0;
`;
