import styled from "styled-components";
import Chat from "./Chat";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import * as EmailValidator from "email-validator";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebase";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function Sidebar() {
  const [user] = useAuthState(auth);
  // goes to firestore db and queries the users arrays checking where our email is seen for the person who is logged in
  const userChatRef = db
    .collection("chats")
    .where("users", "array-contains", user.email);

  // making a snapshot of the db
  const [chatsSnapshot] = useCollection(userChatRef);

  const createChat = () => {
    const input = prompt("Enter the user email");
    if (!input) return null;

    if (
      EmailValidator.validate(input) &&
      !checkChatExist(input) &&
      input !== user.email
    ) {
      //Adding email and chat to DB collection 'chats' if it doesnt already exist and is valid! =>
      db.collection("chats").add({
        users: [user.email, input],
      });
    }
  };
  // mapping function (checking already exist chats)
  const checkChatExist = (recipientEmail) =>
    // !!- checking boolean, going through the chat that exist and find in users array if the user found with recipient email
    !!chatsSnapshot?.docs.find(
      (chat) =>
        chat.data().users.find((user) => user === recipientEmail)?.length > 0
    );

  return (
    <div>
      <Container>
        <Header>
          <UserAvatar src={user.photoURL} />
          <IconsContainer>
            <IconButton>
              <ChatIcon onClick={createChat} />
            </IconButton>

            <IconButton>
              <ExitToAppIcon onClick={() => auth.signOut()} />
            </IconButton>
          </IconsContainer>
        </Header>

        {/*    Chat Lists    */}
        {chatsSnapshot?.docs.map((chat) => (
          <Chat key={chat.id} id={chat.id} users={chat.data().users} />
        ))}
      </Container>
    </div>
  );
}

export default Sidebar;

const Container = styled.div`
  flex: 0.45;
  border-right: 1px solid whitesmoke;
  height: 100vh;
  min-width: 300px;
  max-width: 350px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid lightgray;
`;

const UserAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const IconsContainer = styled.div``;
