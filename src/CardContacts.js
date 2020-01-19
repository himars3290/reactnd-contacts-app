import React, {Component} from 'react'

class CardContacts extends Component {
	render() {
		console.log(this.props);

		return (<ol className="contact-list">
			{
				this.props.contacts.map((contact) => (<li key={contact.id} className="contact-list-name">
					<div className="contact-avatar" style={{
							backgroundImage: `url(${contact.avatarURL})`
						}}></div>
					<div className="contact-details">
						<p>{contact.name}</p>
						<p>{contact.handle}</p>
					</div>
					<button className='contact-remove'>Remove</button>
				</li>))
			}
		</ol>)
	}
}

export default CardContacts;
