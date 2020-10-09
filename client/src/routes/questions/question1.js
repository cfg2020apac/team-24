import { Steps, Button, message, Card } from 'antd';
import { Link } from 'react-router-dom';
import React, { Component }  from 'react';

const { Step } = Steps;

const steps = [
  {
    title: '',
    content: 'Which event would you be willing to attend? ',
    answers : ['Outdoor' , 'Indoor']
  },
  {
    title: '',
    content: 'Which activity would be most interested in? ',
    answers: ['Help old people' , 'Help young people']
  },
  {
    title: '',
    content: 'Which kind of activity are you interested in? ',
    answers:['Education & Training', ' Befriending' ]
  },
];

const interests = [];

class question1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <>
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <br />
        <br />
        <br /> 

        <Card title={steps[current].content}>
        <div className="steps-answers">{steps[current].answers[0]}</div>
        <div className="steps-answers">{steps[current].answers[1]}</div>
        </Card>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              <Link to="/">Done</Link>
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </div>
      </>
    );
  }
}

export default question1;