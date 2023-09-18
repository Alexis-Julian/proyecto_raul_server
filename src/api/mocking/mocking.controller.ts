import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MockingService } from './mocking.service';
import { CreateMockingDto } from './dto/create-mocking.dto';
import { UpdateMockingDto } from './dto/update-mocking.dto';

@Controller('mocking')
export class MockingController {
  constructor(private readonly mockingService: MockingService) {}

  @Post()
  create(@Body() createMockingDto: CreateMockingDto) {
    return this.mockingService.create(createMockingDto);
  }

  @Get()
  findAll() {
    return this.mockingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mockingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMockingDto: UpdateMockingDto) {
    return this.mockingService.update(+id, updateMockingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mockingService.remove(+id);
  }
}
