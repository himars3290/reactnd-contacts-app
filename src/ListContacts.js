import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class ListContacts extends Component {
	static propTypes = {
		contacts: PropTypes.array.isRequired,
		onDeleteContact: PropTypes.func.isRequired
	}

	state = {
		query: ''
	}

	updateQuery = (input) => {
		this.setState(() => ({query: input.trim()}))
	}

	clearQuery = () => {
		this.updateQuery('')
	}
	render() {
		const {query} = this.state;
		const {contacts, onDeleteContact} = this.props;

		const showingContacts = query === ''
			? contacts
			: contacts.filter((contact) => (contact.name.toLowerCase().includes(query.toLowerCase())))

		return (<div className="list-contacts">
			<div className="list-contacts-top">
				<input className='search-contacts' type='text' placeholder='Search Contacts' value={query} onChange={(event) => this.updateQuery(event.target.value)}/>
				<Link to='/create' className="add-contact">
					Add Contact
				</Link>
			</div>
			{
				showingContacts.length !== contacts.length && (<div>
					<p>Showing {showingContacts.length}
						of {contacts.length}
						<button onClick={(event) => this.clearQuery()}>Show all</button>
					</p>
				</div>)
			}

			<ol className="contact-list">
				{
					showingContacts.map((contact) => (<li key={contact.id} className="contact-list-name" style={{
							display: 'flex',
							marginBottom: '1em',
							backgroundColor: 'white',
							padding: '1em',
							maxWidth: '25em'

						}}>
						<div className="contact-avatar" style={{
								backgroundImage: `url(${contact.avatarURL})`
							}}></div>
						<div className="contact-details">
							<p>{contact.name}</p>
							<p>{contact.handle}</p>
						</div>
						<button onClick={() => {
								onDeleteContact(contact)
							}} className='contact-remove'>Remove</button>
					</li>))
				}
			</ol>
		</div>)
	}
}

export default ListContacts;
