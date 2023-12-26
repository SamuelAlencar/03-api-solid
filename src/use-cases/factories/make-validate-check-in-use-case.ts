import { PrismaCheckInRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { ValidateCheckInUseCase } from '../validate-check-in'


export function makeValidateCheckInUseCase(){
    const CheckInsRepository =  new PrismaCheckInRepository()
    const useCase = new ValidateCheckInUseCase(CheckInsRepository)

    return useCase
}