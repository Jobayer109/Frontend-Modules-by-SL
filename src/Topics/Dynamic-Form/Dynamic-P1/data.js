const formFields = {
  name: {
    type: "text",
    label: "Your name",
    placeholder: "Jobayer",
  },
  email: {
    type: "email",
    label: "Your Email",
    placeholder: "jobayer@gmail.com",
  },
  select: {
    type: "select",
    label: "Select role",
    options: [
      "Frontend Developer",
      "Backend Developer",
      "Full-stack Developer",
    ],
  },
  checkbox: {
    type: "checkbox",
    label: "Agree",
  },
};

export default formFields;
