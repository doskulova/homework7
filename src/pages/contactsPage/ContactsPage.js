import React, {useEffect, useState} from 'react';
function ContactsPage(props) {
    const [contacts, setContacts]=useState([])
    async function getContacts(){
        const response= await fetch('https://jsonplaceholder.typicode.com/users')
        const data =  await response.json()
        setContacts(data)
    }
    useEffect(()=>{
        getContacts()
    },[])
    return (
        <div>
            <h1>Contacts Page</h1>
                {
                    contacts.map(contact=>
                        <ul>
                            <li>{contact.name}</li>
                            <li>{contact.phone}</li>
                        </ul>
                    )
                }
        </div>
    );
}

export default ContactsPage;