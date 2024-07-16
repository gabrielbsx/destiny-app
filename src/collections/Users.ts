import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  labels: {
    singular: "Usuário",
    plural: "Usuários",
  },
  admin: {
    useAsTitle: "email",
  },
  fields: [
    {
      name: "email",
      type: "email",
      required: true,
      label: "E-mail",
    },
    {
      name: "password",
      type: "text",
      hidden: true,
      required: true,
      label: "Senha",
    },
  ],
};

export default Users;
