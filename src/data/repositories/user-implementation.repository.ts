import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UserEntity } from './user/entities/user-entity';
import { UserImplementationRepositoryMapper } from './user/mappers/user-repository.mapper';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { UserModel } from 'src/domain/models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UserImplementationRepository extends UserRepository {
    userMapper = new UserImplementationRepositoryMapper();

    constructor(private http: HttpClient) {
        super();
    }

    login(params: {username: string, password: string}): Observable<UserModel> {
        return this.http
            .post<UserEntity>('https://example.com/login', {params})
            .pipe(map(this.userMapper.mapFrom));
    }
    register(params: {phoneNum: string, password: string}): Observable<UserModel> {
       return this.http
            .post<UserEntity>('https://example.com/register', {params})
            .pipe(map((res) => { return this.userMapper.mapFrom(res)}));
    }
    getUserProfile(): Observable<UserModel>{
        return this.http.get<UserEntity>('https://example.com/user').pipe(
            map(this.userMapper.mapFrom));
    }
}