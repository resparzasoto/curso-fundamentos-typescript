# Curso de Fundamentos de TypeScript

*Luis Avilés*

# 1. Introducción a TypeScript

## El lenguaje de programación TypeScript

### ¿Qué es TypeScript?

Es un super-conjunto tipado de JavaScript

- Lenguaje de programación tipado
- Lenguaje de alto nivel
- Genera como resultado código JavaScript
- Es de código abierto
- Es multiplataforma
- TypeScript soporta todo lo que actualmente JavaScript soporta

### ¿Quien usa TypeScript?

- Microsoft
- Google
- Airbnb
- Medium
- Slack
- Shopify

### ¿Por qué usar TypeScript?

- Programación Orientada a Objetos
- Potencia tu código JavaScript
- Mayor productividad
- Poderoso sistema de tipos
- Compila a ES5, ES6 y más...
- Proyecto Open Source
- En creciente crecimiento y soporte
- Puede prevenir cerca del 15% de bugs
- Se puede utilizar tanto del lado del cliente cómo del servidor

## Instalación de herramientas

- Node.js
- VSCode
- nvm (opcional)

## Instalación de herramientas en Windows

- [Instalar Node.js desde el sitio oficial](https://nodejs.org/es/)
- [Instalar NVM para Windows](https://github.com/coreybutler/nvm-windows/releases)

## Navegación y Refactoring

- Podemos navegar fácilmente por el código
- Podemos hacer un refactor del código fácilmente

# 2. Entorno de Desarrollo

## El compilador de TypeScript

### Instalación

```bash
$ npm install -g typescript
```

### Usando el compilador tsc

```bash
$ tsc hello.ts
```

Esto generá el transpile del código TypeScript a JavaScript, en un archivo con el mismo nombre con extensión `.js`

### Usando la opción --watch

```bash
$ tsc --watch hello.ts
```

Esto indicará al tsc que esté observando el archivo `hello.ts` compilando nuestro código, cada vez que detecte un cambio.

> *NOTA: Los archivos `.ts` nunca se ejecutarán directamente desde nuestro cliente o nuestro servidor*

## El archivo de configuración de TypeScript

### Archivo de Configuración `tsconfig.json`

- Especifica la raíz de un proyecto TypeScript
- Permite configurar opciones para el compilador

### Generación del archivo `tsconfig.json`

```bash
$ tsc --init
```

> Nota: El archivo `tsconfig.json` generado automáticamente tendrá una configuración inicial, así cómo los comentarios explicando las demás configuraciones brevemente.

```json
tsconfig.json

{
    "extends": "./configs/base", // Podemos heredar de un archivo de configuración existente
    "compileOnSave": true, // Podemos configurar que compile al guardar
    "compilerOptions": {...},// Podemos indicar las opciones al compilar cómo versión de ECMAScript, strict mode, etc.
    "include": [...], // Podemos configurar las carpetas-archivos a incluir de la compilación
    "exclude": [...], // Podemos configurar las carpetas-archivos a excluir de la compilación
}
```

### Usando el archivo `tsconfig.json`

#### Busca la configuración

```bash
$ tsc
```

#### Especifica un directorio que contiene la configuración

```bash
$ tsc --project platzi
```

#### Omite la configuración

```bash
$ tsc file.ts
```

## Mi primer proyecto TypeScript

- La propiedad `outDir` nos indica la carpeta en donde se guardarán los archivos `.js` transpile
- La ejecución del compilador buscará por default la carpeta `src/` para transpilar los archivos `.ts`

### Ejecutar archivos `.ts` sin transpilar

Podemos usar una librería que se llama ts-node

```json
package.json

{
    "dev": "ts-node index.ts",
    ...
}
```

Directamente en consola con npx

```bash
npx ts-node index.ts
```

#### ¿Por qué?

Su caso de uso común es probar que todo funcione antes de traspilar para ahorrar tiempo.

#### Ejemplo con Express

```json
package.json

{
    "dev": "nodemon --exec ts-node -- ./server.ts",
    ...
}
```
