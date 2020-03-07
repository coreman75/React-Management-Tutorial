import React, { Component } from 'react';
import Customer from './component/Customer';
import './App.css';

const customers = [
  {
    'id' : '1',
    'image' : 'https://placeimg.com/64/64/1',
    'name' : 'hone gil dong',
    'birthday' :  '20200305',
    'gender' : 'man',
    'job' : 'office worker'
  },
  {
    'id' : '2',
    'image' : 'https://placeimg.com/64/64/2',
    'name' : 'kang dong gu',
    'birthday' :  '20200305',
    'gender' : 'man',
    'job' : 'office worker'
  },
  {
    'id' : '3',
    'image' : 'https://placeimg.com/64/64/3',
    'name' : 'kim min su',
    'birthday' :  '20200305',
    'gender' : 'man',
    'job' : 'office worker'
  }
]


class App extends Component {
  render(){
    return (
      <div>
        {
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          )
        })
      }
      </div>
    )
  }
}

export default App;

 