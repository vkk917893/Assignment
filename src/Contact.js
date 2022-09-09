import React from "react";

const Contact = () => {
  return (
    <form>
      <p>Please select mode of communication:</p>
        <input type="radio" id="Fax" name="mode_comm" value="Fax" /> {" "}
      <label for="Fax">Fax</label>
      <br />
        <input type="radio" id="Mobile" name="mode_comm" value="Mobile" /> {" "}
      <label for="Mobile">Mobile</label>
      <br />  <input
        type="radio"
        id="Email"
        name="mode_comm"
        value="Email"
      />  <label for="Email">Email</label>
      <br />
    </form>
  );
};

export default Contact;
