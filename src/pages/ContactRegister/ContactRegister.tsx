import { useState } from "react";
import { ContactService } from "@/services/Contacts";
import { Contact } from "@/models";

const ContactRegister = () => {
  const [contact, setContact] = useState<Contact>({
    name: "",
    email: "",
    phone: "",
    entry: "",
  });

  const contactService = new ContactService();
  const handleChange = (event) => {
    setContact({
      ...contact,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    contactService.post(contact).then((response) => {
      console.log(response.data.)
    } );
    console.log(contact);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome completo:
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <label>
        E-mails:
        <input
          type="text"
          name="email"
          value={contact.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <label>
        Telefones:
        <input
          type="text"
          name="phone"
          value={contact.phone}
          onChange={handleChange}
        />
      </label>
      <br />

      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default ContactRegister;
