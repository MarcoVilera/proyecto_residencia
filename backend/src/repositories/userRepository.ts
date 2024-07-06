import Users from "../models/User";

export class UserRepository{

  constructor(){}

  async getAllUsers(): Promise<Users[]> {
    const users = await Users.findAll();
    return users;
  
  }

  async getUserById(id: number): Promise<Users | null> {
    const user = await Users.findByPk(id);
    return user; 
  }

  async createUser(user: Users): Promise<Users | null> {
    const newUser = await Users.create({user});
    return newUser;  
  }
}


const userRepository: UserRepository = new UserRepository();

/*const userRepository = new UserRepository();
const user = Users.build({
  name: 'John Doe', // Replace with actual user name
  ci: '12345678', // Replace with actual user's identity document number (adjust format if needed)
  email: 'johndoe@example.com', // Replace with actual email address
  password: 'hashed_password', // Replace with a securely hashed password
  user_role: 'admin', // Replace with the user's role (e.g., 'admin', 'resident', 'owner')
});*/

//userRepository.createUser(user);
/*
// Example user data
const userData = {
  name: 'John Doe',
  ci: '12345678',
  email: 'johndoe@example.com',
  // Make sure password is securely hashed before setting
  password: 'hashed_password',
  user_role: 'admin', // Replace with the user's role (e.g., 'admin', 'resident', 'owner')
};

const user1: Users = new Users(userData);
// Create a user instance using build
const user = userRepository.createUser(user1);

console.log(user);*/

