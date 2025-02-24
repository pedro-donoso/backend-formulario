### Configuraciones Previas

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

---

#### 5. Instalación de Prisma

```
npm install @prisma/client
npm install prisma --save-dev
```

#### 6. Inicializo Prisma

```
npx prisma init
```

#### 7. Creo base de datos PostgreSQL

* Ingreso con usuario y contraseña a la aplicación pgAdmin
* Clic derecho Databases -> Create Database (formulario)

#### 8. Creo conexión a Base de Datos formulario

```
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/DB_NAME?schema=public"
```

* Reemplaza por el USER de tu cuenta PostgreSQL
* Reemplazo por el PASSWORD de tu cuenta PostgreSQL
* Reemplazo por el nombre de la Base de Datos creada (formulario)

#### 9. Agrego modelo Usuario en schema.prisma

```
model User {
  id    Int     @id @default(autoincrement())
  name  String
  email String  @unique
}
```

#### 10. Genero y Migro la Base de Datos

```
npx prisma migrate dev --name init
```

#### 11. Configuro el Servicio form.service.ts

```
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class FormService {
  private prisma = new PrismaClient();

  async createUser (data: { name: string; email: string }) {
    return this.prisma.user.create({
      data,
    });
  }
}
```











#### 5. Creo module

```
nest generate module form
```

#### 6. Creo controller

```
nest generate controller form
```

#### 7. Configuro Controller

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
