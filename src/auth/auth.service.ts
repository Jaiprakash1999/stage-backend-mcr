import { Injectable, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/list/list.servce';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  // Login User
  async login({ username, password }: { username: string; password: string }) {
    const user = await this.validateUser(username, password);

    const payload = { username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  // Register User
  async register({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) {
    // Check if the username already exists
    const existingUser = await this.userService.findByUsername(username);
    if (existingUser) {
      throw new ConflictException('Username already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await this.userService.createUser({
      username,
      password: hashedPassword,
    });

    const payload = { username: newUser.username, sub: newUser._id };
    return {
      message: 'User successfully registered',
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(username: string, password: string) {
    const user = await this.userService.findByUsername(username);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid credentials');
    }
    return user;
  }
}
