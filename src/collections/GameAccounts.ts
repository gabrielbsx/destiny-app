import { CollectionConfig } from "payload/types";

const GameAccounts: CollectionConfig = {
  slug: "game-accounts",
  labels: {
    singular: "Game Account",
    plural: "Game Accounts",
  },
  fields: [
    {
      name: "username",
      type: "text",
      required: true,
      label: "Usuário",
    },
    {
      name: "password",
      type: "text",
      required: true,
      label: "Senha",
      hidden: true,
    },
  ],
};

export default GameAccounts;
