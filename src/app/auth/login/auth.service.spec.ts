import { TestBed, inject } from '@angular/core/testing';

import { AuthService,User } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
   
  });

   it('Check if the username is available or not', () => {
       const user:User = {username:'admin', password:'123456'};
       const result = login(user);
       expect(result).toBe(true);         
    });
});
