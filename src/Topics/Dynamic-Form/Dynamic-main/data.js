const formFields = {
  name: {
    type: "text",
    label: "Your name",
    placeholder: "Jobayer Ahmed",
  },
  email: {
    type: "email",
    label: "Your email",
    placeholder: "example@gmail.com",
  },
  password: {
    type: "password",
    label: "Your password",
    placeholder: "***********",
  },
  phone: {
    type: "number",
    label: "Phone Number",
    placeholder: "Phone number",
  },
  selectOption: {
    type: "select",
    label: "Select country",
    options: ["Bangladesh", "Pakistan", "India"],
  },
  checkbox: {
    label: "Agree",
    type: "checkbox",
  },
};

export default formFields;
