import React, {Component} from 'react';
import CardContacts from './CardContacts';
import * as ContactsAPI from './utils/ContactsAPI'

console.log(ContactsAPI);
class App extends Component {
	state = {
		contacts: []
	}

	componentDidMount() {
		ContactsAPI.getAll().then((contacts) => {
			this.setState(() => ({contacts}))
		})
	}
	removeContact = (contact) => {
		this.setState((currentState) => ({
			contacts: currentState.contacts.filter((c) => {
				return c.id !== contact.id
			})
		}))

		ContactsAPI.remove(contact);
	}

	render() {
		return (<div>
			<CardContacts contacts={this.state.contacts} onDeleteContact={this.removeContact}/>
		</div>);
	}
}

export default App;
