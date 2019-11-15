export enum Status {
    success = 'success',
    errors = 'errors',
    fail = 'fail',
  }


export enum ErrorStatusCode {
    CANT_OBTAIN_THE_LIST_OF_WALLET_ACCOUNT_USERS = 4001,
    CANT_CREATE_THE_WALLET_ACCOUNT_USER=4010,
    WALLET_ACCOUNT_USER_NOT_FOUND = 4020,
    ERROR_WHEN_FETCHING_THE_WALLET_ACCOUNT_USER= 4021,
    CANT_OBTAIN_WALLET_ACCOUNT_USER_DATA=4030,
    UNABLE_TO_UPDATE_WALLET_ACCOUNT_USER_INFORMATION = 4040,
}
  
export enum ErrorStatusMessage {
    CANT_OBTAIN_THE_LIST_OF_WALLET_ACCOUNT_USERS = 'Can\'t obtain the list of wallet account users',
    CANT_CREATE_THE_WALLET_ACCOUNT_USER = 'Can\'t create the wallet account user',
    WALLET_ACCOUNT_USER_NOT_FOUND = 'Wallet account user not found',
    ERROR_WHEN_FETCHING_THE_WALLET_ACCOUNT_USER = 'Error when fetching the wallet account user',
    CANT_OBTAIN_WALLET_ACCOUNT_USER_DATA= 'Can\'t obtain wallet account user data',
    UNABLE_TO_UPDATE_WALLET_ACCOUNT_USER_INFORMATION = 'Unable to update wallet account user information',
}
  


export interface ResponseDto<T> {
    status: Status;
    data?: { walletAccountUser : T };
    statusCode? : ErrorStatusCode
    statusDescription?: ErrorStatusMessage
}