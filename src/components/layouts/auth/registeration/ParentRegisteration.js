import React, { Component } from 'react';
import FirstModal from './FirstModal';
import SecondModal from './SeconModal';
import ThirdModal from './ThirdModal';

class ParentRegisteration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      name: '',
      email: '',
      handle: '',
    };
  }

  //Procced to Next Step

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
    console.log('next');
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  render() {
    console.log(this.state);
    const { step } = this.state;
    const { name, email, handle } = this.state;
    switch (step) {
      case 1:
        return <FirstModal nextStep={this.nextStep} name={name} />;
      case 2:
        console.log(2222);
        return <SecondModal nextStep={this.nextStep} />;
      case 3:
        console.log(33333);
        return <ThirdModal />;
      default:
        break;
    }
  }
}

export default ParentRegisteration;
