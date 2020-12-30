import React from 'react';
import {firestore} from '../firebase';

import {
  Form,
  Input,
  Select,
  Button
} from 'antd';

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 12,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

// const sendTodo = async (e) => {
//   e.preventDefault()
//   await firebase.db.collection('todo').add(inputs)
//   .then( async documentReference => {
//     console.log('document reference ID', documentReference.id)
//     await setTodos([])
//  // set todos back to an empty array before re-fetching the whole db.
//     getTodos()
//   })
//   .catch(error => {
//     console.log(error.message)
//   })

// }


const FormComponent = () => {
  const [form] = Form.useForm();
  // const [todos, setTodos] = useState([])
  // const [users,setUsers]=useState([]);

  const onGenderChange = (value) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({
          note: 'Hi, man!',
        });
        return;

      case 'female':
        form.setFieldsValue({
          note: 'Hi, lady!',
        });
        return;

      default:
        form.setFieldsValue({
          note: 'Hi there!',
        });
        return;
    }
  };
// const onFinish = (values) => {
//   console.log(values)
// }
  const onFinish = async(values) => {
    console.log(values);
    // e.preventDefault()
    await firestore.collection('users').add(values)
    .then(ref => {
      console.log("Added document with ID: ", ref.id)
    })
  //   .then( async documentReference => {
  //     console.log('document reference ID', documentReference.id)
  //     await setUsers([])
  //  // set todos back to an empty array before re-fetching the whole db.
  //     // getUsers()
  //   })
    .catch(error => {
      console.log(error.message)
    })
  };

  // const onReset = () => {
  //   form.resetFields();
  // };

  // const onFill = () => {
  //   form.setFieldsValue({
  //     note: 'Hello world!',
  //     gender: 'male',
  //   });
  // };

  return (
    <>
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
       <Form.Item
       label="First Name"
       name="firstname"
       rules={[{ required: true, message: 'Please input your First Name!' }]}>
          <Input />
        </Form.Item>

        <Form.Item
        label="Last Name"
        name="lastname"
        rules={[{ required: true, message: 'Please input your Last  Name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
        {/* <Button htmlType="button" onClick={onReset}>
          Reset
        </Button> */}
      </Form>
      </>
  )
};

export default FormComponent;