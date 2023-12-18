"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/app.ts
var import_fastify = __toESM(require("fastify"));

// src/env/index.ts
var import_config = require("dotenv/config");
var import_zod = require("zod");
var envSchema = import_zod.z.object({
  NODE_ENV: import_zod.z.enum(["dev", "test", "production"]).default("dev"),
  PORT: import_zod.z.coerce.number().default(3333)
});
var _env = envSchema.safeParse(process.env);
if (_env.success === false) {
  console.error("\u26A0\uFE0FInvalid environment variables", _env.error.format());
  throw new Error("\u26A0\uFE0F\u26A0\uFE0F\u26A0\uFE0FInvalid environment variables\u26A0\uFE0F\u26A0\uFE0F\u26A0\uFE0F");
}
var env = _env.data;

// src/lib/prisma.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient({
  log: env.NODE_ENV === "dev" ? ["query"] : []
});

// src/repositories/prisma/prisma-users-repository.ts
var PrismaUsersRepository = class {
  async findByEmail(email) {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    });
    return user;
  }
  async create(data) {
    const user = await prisma.user.create({
      data
    });
    return user;
  }
};

// src/http/controllers/register.ts
var import_zod2 = require("zod");

// src/use-cases/register.ts
var import_bcryptjs = require("bcryptjs");

// src/use-cases/errors/user-alread-exists-error.ts
var UserAlreadyExistsError = class extends Error {
  constructor() {
    super("\u26A0\uFE0F E-mail already exists.");
  }
};

// src/use-cases/register.ts
var RegisterUseCase = class {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute({
    name,
    email,
    password
  }) {
    const password_hash = await (0, import_bcryptjs.hash)(password, 6);
    const userWithSameEmail = await this.usersRepository.findByEmail(email);
    if (userWithSameEmail) {
      throw new UserAlreadyExistsError();
    }
    const user = await this.usersRepository.create({
      name,
      email,
      password_hash
    });
    return {
      user
    };
  }
};

// src/http/controllers/register.ts
async function register(request, reply) {
  const registerBodySchema = import_zod2.z.object({
    name: import_zod2.z.string(),
    email: import_zod2.z.string().email(),
    password: import_zod2.z.string().min(6)
  });
  const { name, email, password } = registerBodySchema.parse(request.body);
  try {
    const usersRepository = new PrismaUsersRepository();
    const registerUseCase = new RegisterUseCase(usersRepository);
    await registerUseCase.execute({
      name,
      email,
      password
    });
  } catch (err) {
    if (err instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: err.message });
    }
    throw err;
  }
  return reply.status(201).send();
}

// src/http/routes.ts
async function appRoutes(app2) {
  app2.post("/users", register);
}

// src/app.ts
var import_zod3 = require("zod");
var app = (0, import_fastify.default)();
app.register(appRoutes);
app.setErrorHandler((error, _, reply) => {
  if (error instanceof import_zod3.ZodError) {
    return reply.status(400).send({ message: "Validation error.", issues: error.format() });
  }
  if (env.NODE_ENV !== "production") {
    console.error(error);
  } else {
  }
  return reply.status(500).send({ message: "Internal server error" });
});

// src/server.ts
app.listen({
  host: "0.0.0.0",
  port: env.PORT
}).then(() => {
  console.log("\u{1F680} HTTP Server Running");
});
