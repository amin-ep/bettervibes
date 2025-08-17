import { z } from "zod";

const firstName = z.string();
const lastName = z.string();
const email = z.email();
const password = z.string();

export { firstName, lastName, email, password };
