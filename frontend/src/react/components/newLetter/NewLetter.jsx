import React, { useState } from "react";
import { Input } from "@react/components/common/forms";
import { Button } from "@react/components/common/buttons";

function NewLetter() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer les données au serveur ou à un service de gestion d'e-mails
    console.log("Email:", email, "Name:", name);
    // Réinitialiser le formulaire après la soumission
    setEmail("");
    setName("");
  };

  return (
    <form className={"newLetter_form"} onSubmit={handleSubmit}>
      <Input
        type="text"
        value={name}
        name={name}
        id={name}
        required={true}
        placeholder={"Votre nom ..."}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        value={email}
        name={email}
        id={email}
        required={true}
        placeholder={"Votre email ..."}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        type={"submit"}
        text={"Subscribe"}
        className={"button newLetter_button"}
      />
    </form>
  );
}

export default NewLetter;
