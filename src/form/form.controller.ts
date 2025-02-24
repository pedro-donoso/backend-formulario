import { Controller, Post, Body } from '@nestjs/common';

@Controller('form')
export class FormController {
  @Post()
  handleFormSubmission(@Body() formData: any) {
    
  }
}
