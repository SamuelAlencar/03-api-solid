import { PrismaCheckInRepository } from '@/repositories/prisma/prisma-check-ins-repository';
import { FetchUserCheckInsHistoryUseCase } from '../fetch-users-check-ins-history';


export function makeFetchUserCheckInsHistoryUseCase(){
    const CheckInsRepository =  new PrismaCheckInRepository();
    const useCase = new FetchUserCheckInsHistoryUseCase(CheckInsRepository);

    return useCase
}