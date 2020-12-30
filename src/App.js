// import './App.css';
import ContactList from './components/contact';
import FormComponent from './components/form';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { PageHeader, Row, Col  } from 'antd';

function App() {
  return (
    <div>
      <PageHeader style={{textAlign: 'center'}}
    className="site-page-header"
    // onBack={() => null}
    title="Contact Form"
    // subTitle="This is a subtitle"
  />
      <Row>
        <Col xs={12} sm={12} md={12}>
          <FormComponent />
        </Col>
        <Col xs={12} sm={12} md={12}>
          <ContactList />
        </Col>
    </Row>
    </div>
  );
}

export default App;
