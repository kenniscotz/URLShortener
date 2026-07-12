import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  STAGE: Joi.string().required(),
  PORT: Joi.number().required(),
  DATABASE_URL: Joi.string().required(),
});
