import { Module } from '@nestjs/common';
import { FormController } from './form.controller';

@Module({
  controllers: [FormController]
})
export class FormModule {}
