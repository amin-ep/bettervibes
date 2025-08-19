import { z } from "zod";

const firstName = z.string().min(2).max(30);
const lastName = z.string().min(2).max(30);
const email = z.email();
const password = z.string().min(6).max(16);
const username = z.string().min(4).max(30);

export { firstName, lastName, email, password, username };
