import React, {useRef, useState} from 'react'
import { Link} from 'react-router-dom'
import firebase,{ firestore, auth } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Card, Form, Input, Button } from 'antd';
import './chatroom.css'

const ChatRoom = () => {

    const [user] = useAuthState(auth);

    return (
        <>
            <h1>Site Wide Chatrooom</h1>

            <br/>

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

    const [form] = Form.useForm();
  
    
    const onFinish = async (values)=>{
        console.log('success', values)
        const { uid, photoURL } = auth.currentUser;
        //   console.log(auth.currentUser)

        form.resetFields();
    
        await messagesRef.add({
            text: values.message,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })
        dummy.current.scrollIntoView({ behavior: 'smooth' });

    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

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
  
    return (
    <div id='chatContainer'>

        <Card
            style={{width: '80%',border: '1px solid black',height: '50vh', overflowY: 'scroll', margin: 'auto', marginBottom: '10px'}} 
            headStyle={{ height: '0vh'}}
            bodyStyle={{padding: "10px"}}
        > 
            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
  
            <span ref={dummy}></span>
        </Card>
  
      <Form onFinish={onFinish} onFinishFailed= {onFinishFailed} form ={form} style ={{display: 'flex', flexDirection:'row', width:'80%', margin:'auto', height: '5vh'}}>
  
        <Form.Item
            name="message"
            rules={[
            {
                required: true,
                message: 'Try saying hi!',
            },
            ]}
            style ={{width: '80%'}}
        >
            <Input style ={{ height: '5vh', border: '1px solid black'}}/>
        </Form.Item>

        <Button type="primary" htmlType ='submit' style ={{width: '20%', height: '5vh'}}>Send</Button>
  
      </Form>
    </div>
    )
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