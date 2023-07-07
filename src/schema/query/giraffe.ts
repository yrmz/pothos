import builder from "../../builder";
import { Giraffe } from "../../types/giraffe";

builder.queryType({
  fields: (t) => ({
    hello: t.string({
      args: {
        name: t.arg.string(),
      },
      resolve: (parent, { name }) => `hello, ${name || "World"}`,
    }),
    test: t.int({
      resolve: () => 1,
    }),
    giraffe: t.field({
      type: Giraffe,
      nullable: false,
      resolve: () => new Giraffe("Gerald", new Date(2010, 1, 1), 5.5),
    }),
  }),
});
