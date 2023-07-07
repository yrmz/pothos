import builder from "../../builder";
import { Giraffe } from "../../types/giraffe";

builder.objectType(Giraffe, {
  name: "Giraffe",
  fields: (t) => ({
    name: t.exposeString("name", {}),
    age: t.int({
      resolve: (parent) => {
        const ageDifMs = Date.now() - parent.birthday.getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
      },
    }),
    height: t.float({
      resolve: (parent) => parent.heightInMeters,
    }),
  }),
});
