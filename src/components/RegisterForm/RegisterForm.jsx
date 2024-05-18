import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getAddMember } from "../../store/events/eventsOperations";

import { useFormik } from "formik";
import { registerSchema } from "../../helpers/registerSchema";

const RegisterForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

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
      } catch (error) {
        console.warn(error);
      }
    },
  });

  const { handleSubmit, handleChange, handleBlur, values, touched, errors } = formik;

  return (
    <form onSubmit={handleSubmit}>
      <label>Full name:</label>
      <input
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
              : "transparent",
        }}
      />
      {touched.fullName && errors.fullName ? (
        <div>{errors.fullName}</div>
      ) : (
        touched.fullName && <div>Name is correct!</div>
      )}

      <label>Email:</label>
      <input
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
              : "transparent",
        }}
      />
      {touched.email && errors.email ? (
        <div>{errors.email}</div>
      ) : (
        touched.email && <div>Email is correct!</div>
      )}

      <label>Date of birth:</label>
      <input
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
              : "transparent",
        }}
      />
      {touched.dateOfBirth && errors.dateOfBirth ? (
        <div>{errors.dateOfBirth}</div>
      ) : (
        touched.dateOfBirth && <div>Date of birth is correct!</div>
      )}

      <label>Where did you hear about this event?</label>
      <div>
        <label>
          <input
            type="radio"
            name="source"
            value="social"
            onChange={handleChange}
            onBlur={handleBlur}
            checked={values.source === "social"}
          />
          Social media
        </label>
        <label>
          <input
            type="radio"
            name="source"
            value="friends"
            onChange={handleChange}
            onBlur={handleBlur}
            checked={values.source === "friends"}
          />
          Friends
        </label>
        <label>
          <input
            type="radio"
            name="source"
            value="myself"
            onChange={handleChange}
            onBlur={handleBlur}
            checked={values.source === "myself"}
          />
          Found myself
        </label>
      </div>
      {touched.source && errors.source ? (
        <div>{errors.source}</div>
      ) : (
        touched.source && <div>Source is correct!</div>
      )}

      <button type="submit">Send</button>
    </form>
  );
};

export default RegisterForm;
