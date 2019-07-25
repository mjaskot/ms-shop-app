import { prop, Typegoose } from "typegoose";

class UserSchema extends Typegoose {
  @prop({ unique: true, required: true })
  email: string;

  @prop({ required: true })
  password: string;

  @prop()
  name: string;

  @prop()
  lastName: string;

  @prop()
  country: string;

  @prop()
  age: number;

  @prop()
  adress: string;

  @prop()
  zipCode: string;
}

export const UserModel = new UserSchema().getModelForClass(UserSchema, {
  schemaOptions: { collection: "Users", timestamps: true }
});
