import { PartialType } from '@nestjs/mapped-types';
import { CreateMockingDto } from './create-mocking.dto';

export class UpdateMockingDto extends PartialType(CreateMockingDto) {}
