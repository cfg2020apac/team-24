import moment from 'moment'
import React, { useContext, useState }  from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Select, DatePicker, Button, Spin, InputNumber } from "antd"
import CurrentUserContext from '../../context/current-user.context'
import { LANGUAGES, ASSOCIATE_TYPES, CURRENCIES } from '../../utils/utilityLists'
import getClient from '../../utils/getClient'
import { createJob } from '../../utils/operations'

const { Option } = Select;
const { TextArea } = Input

const languageOptions =LANGUAGES.map((language)=><Option key ={language.name} value={language.name}>{`${language.name}, ${language.nativeName}`}</Option>)
const associateTypeOptions=ASSOCIATE_TYPES.map((associateType)=><Option key ={associateType} value={associateType}>{associateType}</Option>)
const currencyOptions =CURRENCIES.map((currency)=><Option key ={currency.code} value={currency.code}>{`${currency.code}, ${currency.name}`}</Option>)

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 6
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 16
    }
  }
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 6
    }
  }
};

const PostJobPage = ( { history } ) => {
    const [loading, setLoading]=useState(false)
    const [error, setError]= useState(false)
    const [currentUser, setCurrentUser] =useContext(CurrentUserContext)
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        setLoading(true)
        const client = getClient(currentUser.token)

        const data = {
            id: 2,
            title: "Standards For Being A Good Student and Child",
            description: '',
            createdAt: "25th December",
            date: "Saturday, October 31, 2020",
            time: "3pm - 4pm",
        }
    
        // client.mutate({
        //   mutation: createJob,
        //   variables
        // }).then(({ data })=>{
        //     if(data.createJob.id){
        //         history.push(`/job/${data.createJob.id}`)
        //     }
        //     setLoading(false)
        // })
      };    
    
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const disabledDate=(current)=>{
        // Can not select days before today and today
        return current && current < moment().endOf('day');
    }

    return (
        <>
            <h1>Share an Event</h1>
            <br/>
            {
                !currentUser.token?(
                    <>
                        You have to be an admin to post an Event.
                        <br/>
                        If you're an admin, sign in <Link to='/signin'>here</Link>
                    </>
                ):(
                    <>
                    <Form
                    {...formItemLayout}
                    // layout="vertical"
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    scrollToFirstError
                    >
                        <Form.Item
                            name="title"
                            label="Event Title"
                            validateTrigger="onBlur"
                            rules={[
                            {
                                required: true,
                                message: "Please include the title of the Event"
                            }
                            ]}
                        >
                            <Input placeholder="Title" />
                        </Form.Item>
                        <Form.Item 
                            name="description" 
                            label="Event Description"
                            validateTrigger="onBlur"
                            rules={[
                            {
                                required: true,
                                message: "Please include a description of the Event"
                            }
                            ]}
                        >
                            <TextArea placeholder="Details of the Event"/>
                        </Form.Item>
                        <Form.Item
                            name="date"
                            label="Meeting Date and Time"
                            validateTrigger="onBlur"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select',
                                }
                            ]}
                        >
                            <DatePicker 
                                disabledDate={disabledDate}
                                showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                            />
                        </Form.Item>    
                        <Form.Item 
                            name="location" 
                            label="Meeting Point/Address"
                            validateTrigger="onBlur"
                            rules={[
                            {
                                required: true,
                                message: "Please enter the location of the meeting point"
                            }
                            ]}
                        >
                            <TextArea placeholder="Where do you need them to show up?"/>
                        </Form.Item>

                        <Form.Item {...tailFormItemLayout}>
                            {
                            loading?(
                                <Spin/>
                                ):(
                                <Button type="primary" htmlType="submit">
                                    Post Event
                                </Button>
                                )
                            }
                        </Form.Item>

                    </Form>
                    </>
                )
            }
        </>
    )
}

export default PostJobPage