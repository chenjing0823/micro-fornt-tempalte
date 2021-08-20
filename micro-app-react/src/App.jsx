import { Suspense, useState, useEffect } from 'react'
import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css'
import List from './pages/list/index.jsx'
import Home from './pages/home/index.jsx'

const BASE_NAME = window.__POWERED_BY_QIANKUN__ ? "/react" : "";
const menus = [
  {
    key: "react",
    route: "/",
    title: "主页",
  },
  {
    key: "react-list",
    route: "/list",
    title: "列表页",
  }
];
const App = () => {
  const [refresh, setRefresh] = useState(0);
  const [selectedKeys, setSelectKeys] = useState('react');
  useEffect(() => {
    const { pathname } = window.location;
    const menu = menus.find(
      (item) => `${BASE_NAME}${item.route}` === pathname
    );
    setSelectKeys(() => [menu ? menu.key : "react"]);
  }, [refresh])
  return (
    <Router basename={BASE_NAME} className="test">
      <Menu
        onClick={() => setRefresh((refresh) => ++refresh)}
        selectedKeys={[selectedKeys]}
        mode="horizontal">
        {
          menus.map((item) => (
            <Menu.Item key={item.key} icon={<MailOutlined />}>
              <Link to={item.route}>{item.title}</Link>
            </Menu.Item>
          ))
        }
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

