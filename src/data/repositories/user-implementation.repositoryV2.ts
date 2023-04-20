import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UserEntity } from './user/entities/user-entity';
import { UserImplementationRepositoryMapper } from './user/mappers/user-repository.mapper';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { UserModel } from 'src/domain/models/user.model';
import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from 'src/core/oauth2/oauth2.config';

export interface UserInfo {
    info: {
        sub: string,
        email: string,
        name: string,
        picture: string
    }
}

@Injectable({
    providedIn: 'root',
})
export class UserImplementationRepositoryV2 extends UserRepository {
    userMapper = new UserImplementationRepositoryMapper();
    userProfileSubject = new Subject<UserInfo>();

    constructor(private http: HttpClient, private readonly oAuthService: OAuthService) {
        oAuthService.configure(authConfig);
        oAuthService.loadDiscoveryDocument().then( () =>{
           oAuthService.tryLoginImplicitFlow().then(() =>{
                if(!oAuthService.hasValidAccessToken()){
                    oAuthService.initLoginFlow()
                } else {
                    oAuthService.loadUserProfile().then( (userProfile) =>{
                        //console.log(JSON.stringify(userProfile));

                        this.userProfileSubject.next(userProfile as UserInfo);
                    })
                }
           }) 
        });
        super();
    }

    isLoggedIn(): boolean{
        return this.oAuthService.hasValidAccessToken();
    }

    singOut(){
        this.oAuthService.logOut();
    }

    login(params: {username: string, password: string}): Observable<UserModel> {
        return this.http
            .post<UserEntity>('https://azure.com/login', {params})
            .pipe(map(this.userMapper.mapFrom));
    }

    register(params: {phoneNum: string, password: string}): Observable<UserModel> {
       return this.http
            .post<UserEntity>('https://example.com/register', {params})
            .pipe(map(this.userMapper.mapFrom));
    }

    getUserProfile(): Observable<UserModel> {
        return this.http.get<UserEntity>('https://example.com/user').pipe(
            map(this.userMapper.mapFrom));
    }
}