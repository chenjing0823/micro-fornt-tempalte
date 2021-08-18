import React from 'react'
import { Card } from 'antd';
import './index.css'

const { Meta } = Card;
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cardNumber: [1,2,3]
    }
  }

  render() {
    return (
      <div className="home">
        {
          this.state.cardNumber.map((v, index) => {
            return (
              <div key={index} className="home-card">
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                  <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
              </div>
            )
          })
        }
    </div>
    );
  }
}


export default Home;

