import { GetUserMetricsUseCase } from '../get-user-metrics';
import { PrismaCheckInRepository } from '@/repositories/prisma/prisma-check-ins-repository';


export function makeGetUserMetricsUseCase(){
    const CheckInsRepository =  new PrismaCheckInRepository();
    const useCase = new GetUserMetricsUseCase(CheckInsRepository);

    return useCase
}