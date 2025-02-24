## backend formulario

#### 1. Creo carpeta formulario en escritorio

#### 2. Creo nuevo proyecto NestJS

```
npm install -g @nestjs/cli
```

#### 3. Creo nuevo proyecto

```
nest new backend
```

#### 4. Configuro proyecto

* En src sólo dejo archivos app.module.ts y main.ts
* Elimino app.controller.ts y app.service.ts
* Elimino archivo eslint.config.mjs

#### 5. Creo controller

```
nest generate module form
```

```
import { Controller, Post, Body } from '@nestjs/common';

@Controller('form')
export class FormController {
  @Post()
  handleFormSubmission(@Body() formData: any) {
    console.log('Datos recibidos:', formData);
    // Aquí puedes procesar los datos, guardarlos en una base de datos, etc.
    return { message: 'Datos recibidos correctamente' };
  }
}
```

5. Habilitar CORS en main.
