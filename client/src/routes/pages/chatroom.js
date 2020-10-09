import React, {useRef, useState} from 'react'
import { Link} from 'react-router-dom'

import firebase,{ firestore, auth } from '../../firebase'

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { Form, Input, Button } from 'antd';

const ChatRoom = () => {

    const [user] = useAuthState(auth);

    return (
        <>
            <h1>Site Wide Chatrooom</h1>

            <section>
                {user ? <ChatRoomMain/> : <p><Link to='/signin'>Sign In</Link> to use the ChatRoom</p>}
            </section>
            
        </>
    )
}

function ChatRoomMain() {
    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
  
    const [messages] = useCollectionData(query, { idField: 'id' });
  
    const [formValue, setFormValue] = useState('');
  
  
    const sendMessage = async (e) => {
      e.preventDefault();
  
      const { uid, photoURL } = auth.currentUser;
    //   console.log(auth.currentUser)
  
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      })
  
      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
  
    return (<>
      <main>
  
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
  
        <span ref={dummy}></span>
  
      </main>
  
      <Form onSubmit={sendMessage}>
  
        <Input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Say something nice!" />

        <br/>
        <br/>
  
        <Button type="submit" disabled={!formValue}>Send</Button>
  
      </Form>
    </>)
  }

  function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
  
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    // console.log(messageClass)
  
    return (<>
      <div className={`message ${messageClass}`}>
        <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
        <p>{text}</p>
      </div>
    </>)
  }

export default ChatRoom