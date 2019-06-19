import React from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

import { Form, useForm } from "..";

export default () => {
  return (
    <div>
      <Form
        name="demo"
        valuesToArg={() => ({})}
        onSubmit={values => {
          console.log(values);
        }}>
        {({ isSubmitting }) => {
          return (
            <div>
              <CtxLog />

              <button disabled={isSubmitting}>submit</button>
            </div>
          );
        }}
      </Form>

      <EditLink path="src-core/form/Form.tsx" />
    </div>
  );
};

const CtxLog = () => {
  const ctx = useForm();
  console.log(ctx);

  return null;
};
