import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@mernstack.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Joe User",
    email: "joe@mernstack.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Jotish User",
    email: "jotish@mernstack.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];

export default users;
