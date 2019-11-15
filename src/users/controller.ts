import { Get, Post, Put, Delete, Patch } from '@nestjs/common';
import { Param, Query, Body } from '@nestjs/common';
import { Logger, Inject, Controller } from '@nestjs/common';
import { NotImplementedException } from '@nestjs/common';
import { HttpCode, HttpException, HttpStatus } from '@nestjs/common';
import { UseFilters, UseGuards, UseInterceptors , UsePipes} from '@nestjs/common';
import { UsersService } from './service';
import { Users, WalletAccountUser } from './model';
import { ValidationPipe } from './../common/validation.pipe';
import { AuthGuard } from '@nestjs/passport';
import {
  ResponseDto,
  Status,
  ErrorStatusCode,
  ErrorStatusMessage,
} from './../common/response.dto';
import {
  ApiResponse,
  ApiOperation,
  ApiUseTags,
  ApiBearerAuth,
  ApiImplicitParam,
} from '@nestjs/swagger';

/**
 *
 *
 * @export
 * @class UsersController
 */

@ApiUseTags('Wallet Account Users')
@ApiBearerAuth()
@Controller('/v1/users')
//@UseGuards(AuthGuard('jwt'))
export class UsersController {
  private readonly logger: Logger = new Logger(UsersController.name);
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  @ApiOperation({ title: 'Obtain a list of wallet account users' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Successfully obtained the list of wallet account users',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Error when obtaining the list of wallet account users',
  })
  async findAll(): Promise<ResponseDto<Users[]>> {
    const data = await this.usersService.findAll().catch(() => {
      throw new HttpException(
        {
          status: Status.fail,
          statusCode:
            ErrorStatusCode.CANT_OBTAIN_THE_LIST_OF_WALLET_ACCOUNT_USERS,
          statusDescription:
            ErrorStatusMessage.CANT_OBTAIN_THE_LIST_OF_WALLET_ACCOUNT_USERS,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    });
    if (!data || (data && data.length < 1))  {
      throw new HttpException(
        {
          status: Status.fail,
          statusCode:
            ErrorStatusCode.CANT_OBTAIN_THE_LIST_OF_WALLET_ACCOUNT_USERS,
          statusDescription:
            ErrorStatusMessage.CANT_OBTAIN_THE_LIST_OF_WALLET_ACCOUNT_USERS,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return {
      status: Status.success,
      data: { walletAccountUser: data },
    };
  }

  @Get(':id')
  @ApiImplicitParam({ name: 'id', required: true })
  @ApiOperation({ title: 'Fetch user data' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Successfully fetched a wallet account user',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Wallet account user not found',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Error when fetching the wallet account user',
  })
  async findOne(@Param('id') id): Promise<ResponseDto<Users>> {
    const data = await this.usersService.findOne(id).catch(() => {
      throw new HttpException(
        {
          status: Status.fail,
          statusCode:
            ErrorStatusCode.ERROR_WHEN_FETCHING_THE_WALLET_ACCOUNT_USER,
          statusDescription:
            ErrorStatusMessage.ERROR_WHEN_FETCHING_THE_WALLET_ACCOUNT_USER,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    });
    if (!data) {
      throw new HttpException(
        {
          status: Status.fail,
          statusCode: ErrorStatusCode.WALLET_ACCOUNT_USER_NOT_FOUND,
          statusDescription: ErrorStatusMessage.WALLET_ACCOUNT_USER_NOT_FOUND,
        },
        HttpStatus.NOT_FOUND,
      );
    }
    return {
      status: Status.success,
      data: { walletAccountUser: data },
    };
  }

  @Post()
  @ApiOperation({ title: 'Create a Wallet Account User' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Successfully created a wallet account user',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Error when creating the wallet account user',
  })
  @UsePipes(new ValidationPipe())
  async create(@Body() user: WalletAccountUser): Promise<ResponseDto<Users>> {
    const data = await this.usersService.create(user).catch(() => {
      throw new HttpException(
        {
          status: Status.fail,
          statusCode: ErrorStatusCode.CANT_CREATE_THE_WALLET_ACCOUNT_USER,
          statusDescription:
            ErrorStatusMessage.CANT_CREATE_THE_WALLET_ACCOUNT_USER,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    });
    if (!data) {
      throw new HttpException(
        {
          status: Status.fail,
          statusCode: ErrorStatusCode.CANT_CREATE_THE_WALLET_ACCOUNT_USER,
          statusDescription:
            ErrorStatusMessage.CANT_CREATE_THE_WALLET_ACCOUNT_USER,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return {
      status: Status.success,
      data: { walletAccountUser: data },
    };
  }

  @Patch(':id')
  @ApiImplicitParam({ name: 'id', required: true })
  @ApiOperation({ title: 'Update a Wallet Account User' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Successfully updated a wallet account user',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Error when updating the wallet account user information',
  })
  async updateUser(
    @Param('id') id,
    @Body() user: WalletAccountUser,
  ): Promise<ResponseDto<Users>> {
    const data = await this.usersService.update(id, user).catch(() => {
      throw new HttpException(
        {
          status: Status.fail,
          statusCode:
            ErrorStatusCode.UNABLE_TO_UPDATE_WALLET_ACCOUNT_USER_INFORMATION,
          statusDescription:
            ErrorStatusMessage.UNABLE_TO_UPDATE_WALLET_ACCOUNT_USER_INFORMATION,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    });
    if (!data) {
      throw new HttpException(
        {
          status: Status.fail,
          statusCode: ErrorStatusCode.CANT_CREATE_THE_WALLET_ACCOUNT_USER,
          statusDescription:
            ErrorStatusMessage.CANT_CREATE_THE_WALLET_ACCOUNT_USER,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return {
      status: Status.success,
      data: { walletAccountUser: data },
    };
  }
}
