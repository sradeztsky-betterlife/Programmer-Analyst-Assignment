import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import img from './BetterLifeAvatar.jpg';


import Popup from './components/Popup';

class ContactCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            contacts: [],
            popup: false,
            popupItem: [],
        }
    }

    togglePopup() {
        this.setState({popup: !this.state.popup});
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        contacts: result
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
        );
    }


    render() {
        const {error, isLoaded, contacts} = this.state;
        if(error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (   
                <div className='cardWrapper'> 
                        <Popup trigger={this.state.popup} setTrigger={this.togglePopup.bind(this)} item={this.state.popupItem}></Popup>                  
                        {contacts.map(item => (
                           <div key={item.id} className='contactCard'>
                              <div className='cardImage'>
                                <img src={img} alt="Placeholder for avatar"></img>
                              </div>
                              <div className='cardInfo'>
                                <h1 onClick={()=>this.setState({popup: true, popupItem: item})}>{item.name}</h1>
                                <h2>{item.email}</h2>
                                <h2>{item.phone}</h2>
                              </div>
                          </div>
                       ))}        
                       
                </div>
            );
        }
    }

}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ContactCard />);