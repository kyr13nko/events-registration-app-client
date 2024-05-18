import * as Yup from "yup";

const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const dateRegex = /^(\d{2})-(\d{2})-(\d{4})$/;

export const registerSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(20, "Name must not exceed 20 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email")
    .matches(emailRegex, "The email must be in format: 'example@mail.com'")
    .required("Email is required"),
  dateOfBirth: Yup.string()
    .matches(dateRegex, "The date of birth must be in format 'DD-MM-YYYY'.")
    .required("Date of birth is required"),
  source: Yup.string()
    .oneOf(["social", "friends", "myself"], "Invalid source")
    .required("Source is required"),
});
