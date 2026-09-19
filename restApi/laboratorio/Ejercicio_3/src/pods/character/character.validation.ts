import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';

const validationSchema: ValidationSchema = {
  field: {
    bestSentence: [{ validator: Validators.maxLength, customArgs: { length: 200 } },],
  },
};

export const formValidation = createFormikValidation(validationSchema);

