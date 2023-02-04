import { useState } from "react";
import { ClientService } from "@/services/Contacts";
import { Client } from "@/models";

const ClientRegister = () => {
  const [client, setClient] = useState<Client>({
    name: "",
    email: "",
    phone: "",
    entry: "",
  });

  const clientService = new ClientService();
  const handleChange = (event) => {
    setClient({
      ...client,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    clientService.post(client).then((response) => {
      console.log(response.data.)
    } );
    console.log(client);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome completo:
        <input
          type="text"
          name="name"
          value={client.name}
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
          value={client.email}
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
          value={client.phone}
          onChange={handleChange}
        />
      </label>
      <br />

      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default ClientRegister;
