import { Injectable } from '@nestjs/common';
import { CreateMockingDto } from './dto/create-mocking.dto';
import { UpdateMockingDto } from './dto/update-mocking.dto';

@Injectable()
export class MockingService {
  create(createMockingDto: CreateMockingDto) {
    return 'This action adds a new mocking';
  }

  findAll() {
    return `This action returns all mocking`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mocking`;
  }

  update(id: number, updateMockingDto: UpdateMockingDto) {
    return `This action updates a #${id} mocking`;
  }

  remove(id: number) {
    return `This action removes a #${id} mocking`;
  }
}
