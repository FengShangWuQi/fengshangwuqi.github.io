import React from "react";

import { Form, useForm, Field, useField, BaseInput } from "../../Form";

export const FormDemo = () => {
  return (
    <Form
      name="demo"
      method="post"
      action="https://api.github.com/authorizations"
      valuesToArg={({ username, password }) => ({
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${btoa(`${username}:${password}`)}`,
        },
      })}
      onSubmit={values => {
        alert(
          JSON.stringify(
            {
              ...values,
              password: values.password.replace(/\S/g, "*"),
            },
            null,
            2,
          ),
        );
      }}
      onSuccess={() => {
        alert("success");
      }}
      onFail={() => {
        alert("fail");
      }}>
      {({ isSubmitting }) => {
        return (
          <div>
            <CtxLog />

            <NameInput />
            <PassInput />

            <button type="submit" disabled={isSubmitting}>
              submit
            </button>
          </div>
        );
      }}
    </Form>
  );
};

const NameInput = () => (
  <Field name="username" label="用户名" validate={{ required: true }}>
    {fieldProps => (
      <BaseInput {...fieldProps} placeholder="username"></BaseInput>
    )}
  </Field>
);

const PassInput = () => {
  const fieldProps = useField({
    name: "password",
    label: "密码",
    validate: { required: true },
  });

  return (
    <BaseInput
      {...fieldProps}
      type="password"
      placeholder="password"></BaseInput>
  );
};

const CtxLog = () => {
  const ctx = useForm();
  console.log(ctx);

  return null;
};
