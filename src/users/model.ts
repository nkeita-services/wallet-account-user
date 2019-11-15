import { ApiModelProperty } from '@nestjs/swagger';
import { Document , Schema, Model, Mongoose, Collection, connection} from 'mongoose';
const uuidV4 = require('uuid/v4');


const addressSchema = new Schema({
    city: String,
    streetName: String,
    streetNumber: Number,
    postCode: String,
    state: String,
    country: String,
  },{ _id : false });

export const UsersSchema = new Schema({
    _id:  { type : String, default : uuidV4},
    lastName: String,
    firstName: String,
    address: addressSchema,
    email: String,
    phoneNumber: String,
    mobileNumber: String,
    language: String,
    walletOrganizations: [String],
},{
    versionKey: false, // set to false then it wont create in mongodb
    toJSON: {
      transform: function (doc, ret) {
        ret.id = doc._id
        delete ret._id;
        ret = JSON.parse(JSON.stringify(ret,Object.keys(ret).sort()))
      }
    }});

// user interface which is going to use in service class
export interface Users extends Document {
    id?: string;
    readonly lastName: string;
    readonly firstName: string;
    address: {
        city: string,
        streetName: string,
        streetNumber: number,
        postCode: string,
        state: string,
        country: string,
    };
    email: string;
    phoneNumber: string;
    mobileNumber: string;
    language: string;
    walletOrganizations: string[];
}

// All data transfer objects go here for easier access

// for class level validation use this
import { ValidationArguments, Validate, IsString , Length, IsAlpha, NotEquals, IsEmail } from 'class-validator';

export class Address {
    @ApiModelProperty()
    @IsString()
    readonly city: string;
    @ApiModelProperty()
    @IsString()
    readonly  streetName: string;
    @ApiModelProperty()
    @IsString()
    readonly streetNumber: number;
    @ApiModelProperty()
    @IsString()
    readonly postCode: string;
    @ApiModelProperty()
    @IsString()
    readonly state: string;
    @ApiModelProperty()
    @IsString()
    readonly country: string;
}


export class WalletAccountUser {
    @ApiModelProperty()
    @IsString()
    readonly id: string;
    @ApiModelProperty()
    @IsString()
    readonly lastName: string;
    @ApiModelProperty()
    @IsString()
    readonly firstName: string;
    @ApiModelProperty({ type: Address })
    readonly address: Address;
    @ApiModelProperty()
    @IsEmail()
    readonly email: string;
    @ApiModelProperty()
    @IsString()
    readonly phoneNumber: string;
    @ApiModelProperty()
    @IsString()
    readonly mobileNumber: string;
    @ApiModelProperty()
    @IsString()
    readonly language: string;
    @ApiModelProperty()
    walletOrganizations: Array<string>;
}
