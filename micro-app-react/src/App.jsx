import { Suspense, useState, useEffect } from 'react'
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css'
import List from './pages/list/index.jsx'
import Home from './pages/home/index.jsx'

const BASE_NAME = window.__POWERED_BY_QIANKUN__ ? "/react" : "";

const App = () => {
  const [current, setCurrent] = useState('home');
  const handleClick = (e) => {
    console.log(e)
    setCurrent(e.key)
  }
  useEffect(() => {
    const { pathname } = window.location
    setCurrent(pathname)
  }, [current])
  return (
    <Router basename={BASE_NAME} className="test">
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="/" icon={<MailOutlined />}>
          <Link to='/'>首页</Link>
        </Menu.Item>
        <Menu.Item key="/list" icon={<AppstoreOutlined />}>
          <Link to='/list'>列表页</Link>
        </Menu.Item>
      </Menu>
      <Suspense fallback={null}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/list" component={List} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App;

