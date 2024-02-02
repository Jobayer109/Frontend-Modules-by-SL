const formFields = {
  name: {
    label: "Name",
    type: "text",
    placeholder: "Jobayer Ahmed",
  },
  email: {
    label: "Email",
    type: "email",
    placeholder: "example@gmail.com",
  },
  password: {
    label: "Password",
    type: "password",
    placeholder: "*********",
  },

  roles: {
    type: "select",
    label: "Gender",
    options: ["male", "female", "other"],
  },

  subscribe: {
    type: "checkbox",
    label: "Please subscribe",
    checked: false, // Default value for checkbox
  },
};

export default formFields;
