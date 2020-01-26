import React from 'react'

function CardContacts(props) {
	return (<ol className="contact-list">
		{
			props.contacts.map((contact) => (<li key={contact.id} className="contact-list-name" style={{
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
						props.onDeleteContact(contact)
					}} className='contact-remove'>Remove</button>
			</li>))
		}
	</ol>)
}

export default CardContacts;
