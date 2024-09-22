// import { ContactsCollection } from '../db/models/contacts.js';

// export const getAllContacts = async () => {
//   const contacts = await ContactsCollection.find();
//   return contacts;
// };

// export const getContactById = async (contactId) => {
//   const contact = await ContactsCollection.findById(contactId);
//   return contact;
// };
import { ContactsCollection } from '../db/models/contacts.js';

export const getAllContacts = () => ContactsCollection.find();

export const getContactById = (contactId) =>
  ContactsCollection.findById(contactId);

export const deleteContactById = (id) =>
  ContactsCollection.findByIdAndDelete(id);

export const createContact = (contactData) =>
  ContactsCollection.create(contactData);

export const updateContact = async (id, payload, options = {}) =>
  ContactsCollection.findByIdAndUpdate(id, payload, {
    new: true,
    includeResultMetadata: true,
    ...options,
  });
