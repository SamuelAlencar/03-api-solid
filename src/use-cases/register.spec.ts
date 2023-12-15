import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { compare } from 'bcryptjs';
import { expect,describe, it } from 'vitest'
import { RegisterUseCase } from '@/use-cases/register';
import { UserAlreadyExistsError } from './errors/user-alreadt-exists-error';

describe('Register Use Case', () => {

    it('should be able to register', async () => {
        const usersRepository = new InMemoryUsersRepository()
        const registerUseCase = new RegisterUseCase(usersRepository)

        const { user } = await registerUseCase.execute({
            name: 'Jhon Doe',
            email: 'jhond_doe_00001@gmail.com',
            password: '123456'
        })


        await expect(user.id).toEqual(expect.any(String))
    })



    it('should hash user password upon registration', async () => {
        const usersRepository = new InMemoryUsersRepository()
        const registerUseCase = new RegisterUseCase(usersRepository)

        const { user } = await registerUseCase.execute({
            name: 'Jhon Doe',
            email: 'jhond_doe_00001@gmail.com',
            password: '123456'
        })

        const isPasswordCorrectlyHashed = await compare(
            '123456',
            user.password_hash
        )

        await expect(isPasswordCorrectlyHashed).toBe(true)
    })

    it('should shold not be able to register with same email twice', async () => {
        const usersRepository = new InMemoryUsersRepository()
        const registerUseCase = new RegisterUseCase(usersRepository)

        const email = 'jhon_doe_00001@gmail.com'

        await registerUseCase.execute({
            name: 'Jhon Doe',
            email,
            password: '123456'
        })

        await expect(() => 
        registerUseCase.execute({
                name: 'Jhon Doe',
                email,
                password: '123456'
            })
        ).rejects.toBeInstanceOf(UserAlreadyExistsError)

    })    
})