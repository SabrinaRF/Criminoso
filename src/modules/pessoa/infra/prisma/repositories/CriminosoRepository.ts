import ICreateCriminosoDTO from "@modules/pessoa/dtos/ICreateCriminoso.dto";
import CriminosoEntity from "@modules/pessoa/entities/Criminoso.entity";
import ICriminosoRepository from "@modules/pessoa/repository/ICriminosoRepository";
import { prisma } from "@shared/infra/prisma";

export default class CriminosoRepository implements ICriminosoRepository{
    public async create(data: ICreateCriminosoDTO): Promise<CriminosoEntity> {
        const criminoso = await prisma.criminoso.create({data});

        return criminoso as unknown as CriminosoEntity;
    }
    public async delete(id: string): Promise<void> {
        await prisma.criminoso.delete({where:{id}});
    }
    public async findById(id: string): Promise<CriminosoEntity> {
        const criminoso = await prisma.criminoso.findUnique({where:{id}});

        return criminoso as unknown as CriminosoEntity;

    }
    public async update(data: ICreateCriminosoDTO): Promise<CriminosoEntity> {
        const criminoso = await prisma.criminoso.update({where:{id:data.id},data});

        return criminoso as unknown as CriminosoEntity;

    }

}