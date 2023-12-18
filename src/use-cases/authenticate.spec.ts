import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { hash } from 'bcryptjs';
import { expect,describe, it } from 'vitest'
import { AuthenticateUseCase } from './authenticate';

describe('Authenticate Use Case', () => {
    it('should be able to authenticate', async () => {
        const usersRepository = new InMemoryUsersRepository()
        const sut = new AuthenticateUseCase(usersRepository)

        await usersRepository.create({
            name: 'Jhon Doe',
            email: 'jhond_doe_00001@gmail.com',
            password_hash: await hash('123456', 6)
        })
        const { user } = await sut.execute({
            email: 'jhond_doe_00001@gmail.com',
            password: '123456'
        })


        await expect(user.id).toEqual(expect.any(String))
    })  
})