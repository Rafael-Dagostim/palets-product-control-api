import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';

export const IsPrismaEnum = (entity: object): PropertyDecorator => {
  return applyDecorators(IsEnum(entity), ApiProperty({ enum: entity }));
};
