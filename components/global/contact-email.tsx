import React from "react";

type emailProps = {
  email: string;
  message: string;
};

export function ContactFormEmail({ email, message }: emailProps) {
  return (
    <div>
      <h1>Nouveau Client!</h1>
      <p>Email: {email}</p>
      <p>Message: {message}</p>
    </div>
  );
}
