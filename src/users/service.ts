import { Model } from 'mongoose';
import { Injectable, Inject, Logger, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users, WalletAccountUser } from './model';

@Injectable()
export class UsersService {
  private readonly logger: Logger = new Logger(UsersService.name);
  constructor(@InjectModel('Users') private readonly userModel: Model<Users>) {}

  async findAll(): Promise<Users[]> {
    return await this.userModel.find().exec();
  }

  async create(user: WalletAccountUser): Promise<Users> {
    const createUser = new this.userModel(user);
    return await createUser.save();
  }

  async update(id: string, user: WalletAccountUser): Promise<Users> {
    try {
      const result = await this.userModel.updateOne({ _id: id }, user).exec();
      if (result.nModified === 1) {
        return this.userModel.findOne({ _id: id }).exec();
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: string): Promise<Users> {
    return await this.userModel.findById(id).exec();
  }
}
