import { createServer, Factory, Model, ActiveModelSerializer } from "miragejs";
import faker from "faker";
interface User {
  name: string;
  email: string;
  created_at: string;
}

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },

    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          return `user ${i + 1}`;
        },
        email() {
          return faker.internet.email().toLocaleLowerCase();
        },
        created_at() {
          return faker.date.recent(10);
        },
      }),
    },

    seeds(server) {
      server.createList("user", 10);
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/users");
      this.get("/users/:id");
      this.post("/users");
      this.delete("/users/:id");
      this.put("/users/:id");

      this.namespace = "";
      this.passthrough();
    },
  });
  return server;
}
