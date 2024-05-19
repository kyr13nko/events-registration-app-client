import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { getAddMember } from "../../store/events/eventsOperations";

import { useFormik } from "formik";
import { registerSchema } from "../../helpers/registerSchema";

import {
  ErrorMessage,
  Form,
  RadioWrapper,
  StyledRadioButton,
  SuccessMessage,
} from "./RegisterForm.styled";
import { Button, Input } from "../../styles/GlobalStyles";

const RegisterForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      dateOfBirth: "",
      source: "social",
    },
    validationSchema: registerSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        dispatch(getAddMember({ id, values }));
        resetForm();
        navigate(`/participants/${id}`);
      } catch (error) {
        console.warn(error);
      }
    },
  });

  const { handleSubmit, handleChange, handleBlur, values, touched, errors } = formik;

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName">Full name:</label>
        <Input
          id="fullName"
          type="text"
          name="fullName"
          placeholder="Name Surname"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.fullName}
          style={{
            borderColor:
              touched.fullName && errors.fullName
                ? "var(--color-red)"
                : touched.fullName && !errors.fullName
                ? "var(--color-green)"
                : "var(--color-secondary)",
          }}
        />
        {touched.fullName && errors.fullName ? (
          <ErrorMessage>{errors.fullName}</ErrorMessage>
        ) : (
          touched.fullName && <SuccessMessage>Name is correct!</SuccessMessage>
        )}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="example@mail.com"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          style={{
            borderColor:
              touched.email && errors.email
                ? "var(--color-red)"
                : touched.email && !errors.email
                ? "var(--color-green)"
                : "var(--color-secondary)",
          }}
        />
        {touched.email && errors.email ? (
          <ErrorMessage>{errors.email}</ErrorMessage>
        ) : (
          touched.email && <SuccessMessage>Email is correct!</SuccessMessage>
        )}
      </div>

      <div>
        <label htmlFor="dateOfBirth">Date of birth:</label>
        <Input
          id="dateOfBirth"
          type="text"
          name="dateOfBirth"
          placeholder="dd-MM-yyyy"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.dateOfBirth}
          style={{
            borderColor:
              touched.dateOfBirth && errors.dateOfBirth
                ? "var(--color-red)"
                : touched.dateOfBirth && !errors.dateOfBirth
                ? "var(--color-green)"
                : "var(--color-secondary)",
          }}
        />
        {touched.dateOfBirth && errors.dateOfBirth ? (
          <ErrorMessage>{errors.dateOfBirth}</ErrorMessage>
        ) : (
          touched.dateOfBirth && <SuccessMessage>Date of birth is correct!</SuccessMessage>
        )}
      </div>

      <div>
        <p>Where did you hear about this event?</p>
        <RadioWrapper>
          <StyledRadioButton
            id="social"
            type="radio"
            name="source"
            value="social"
            onChange={handleChange}
            onBlur={handleBlur}
            checked={values.source === "social"}
          />
          <label htmlFor="social">Social media</label>

          <StyledRadioButton
            id="friends"
            type="radio"
            name="source"
            value="friends"
            onChange={handleChange}
            onBlur={handleBlur}
            checked={values.source === "friends"}
          />
          <label htmlFor="friends">Friends</label>

          <StyledRadioButton
            id="myself"
            type="radio"
            name="source"
            value="myself"
            onChange={handleChange}
            onBlur={handleBlur}
            checked={values.source === "myself"}
          />
          <label htmlFor="myself">Found myself</label>
        </RadioWrapper>
      </div>

      <Button type="submit">Send</Button>
    </Form>
  );
};

export default RegisterForm;
