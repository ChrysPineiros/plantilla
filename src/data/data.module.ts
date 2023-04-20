import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { UserLoginUseCase } from 'src/domain/usecases/user-login.usecase';
import { UserRegisterUseCase } from 'src/domain/usecases/user-register.usecase';
import { GetUserProfileUseCase } from 'src/domain/usecases/get-user-profile.usecase';
import { UserImplementationRepository } from './repositories/user-implementation.repository';
import { UserImplementationRepositoryV2 } from './repositories/user-implementation.repositoryV2';
import { OAuthModule } from 'angular-oauth2-oidc';


const userLoginUseCaseFactory = 
(userRepo: UserRepository) => new UserLoginUseCase(userRepo);
export const userLoginUseCaseProvider = {
    provide: UserLoginUseCase,
    useFactory: userLoginUseCaseFactory,
    deps: [UserRepository],
};

const userRegisterUseCaseFactory = 
(userRepo: UserRepository) => new UserRegisterUseCase(userRepo);
export const userRegisterUseCaseProvider = {
    provide: UserRegisterUseCase,
    useFactory: userRegisterUseCaseFactory,
    deps: [UserRepository],
};

const getUserProfileUseCaseFactory = 
(userRepo: UserRepository) => new GetUserProfileUseCase(userRepo);
export const getUserProfileUseCaseProvider = {
    provide: GetUserProfileUseCase,
    useFactory: getUserProfileUseCaseFactory,
    deps: [UserRepository],
};

@NgModule({
    providers: [
        userLoginUseCaseProvider,
        userRegisterUseCaseProvider,
        getUserProfileUseCaseProvider,
        { provide: UserRepository, useClass: UserImplementationRepositoryV2 }
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        OAuthModule.forRoot()
    ],
})
export class DataModule { }