import { Controller, Post, Body } from '@nestjs/common';
import { FormService } from './form.service';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post()
  async handleFormSubmission(@Body() formData: { name: string; email: string }) {
    const user = await this.formService.createUser(formData);
    return { message: 'Datos guardados correctamente', user };
  }
}
