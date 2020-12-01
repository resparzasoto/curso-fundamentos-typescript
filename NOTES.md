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

# 3. Tipos en TypeScript

## Tipado en TypeScript

- Explícito
  - Define una sintaxis para la creación de variables con tipo de dato
- Inferido
  - TypeScript tiene la habilidad de *"deducir"* el tipo de función de un valor

### Tipado en TypeScript Explícito

```typescript
nombreVariable : TipoDeDato
```

El `:` permite especificar el tipo de dato.

### Tipado en TypeScript Implícito

```typescript
nombreVariable = valorInicial
```

TypeScript deduce el tipo de dato en base a la variable y su valorInicial.

### Tipos básicos

Tipos para datos simples en TypeScript

#### Tipos primitivos

- Number
- Boolean
- String
- Array
- Tuple
- Enum
- Any
- Void
- Null
- Undefined
- Never
- Object

## Number, Boolean y String

### Tipo: Number

- Valores numéricos

A partir de ES2015 (ES6)

- Valores hexadecimales
- Valores binarios
- Valores octales

### Tipo: Boolean

- El tipo de dato más simple en TypeScript
- Dos únicos valores
  - true
  - false

### Tipo: String

- El tipo de dato para trabajar con datos textuales o cadenas
- Así como en JavaScript, se pueden usar comillas dobles *("")* y simples *('')*

#### Template String

- Permiten definir múltiples línea de texto
- Pueden contener expresiones o variables embebidas
- Se debe usar el carácter backtick/backquote(`) y para expresiones ${expression}

## Tipo: Any

- Usado para capturar valores dinámicos
- Los valores pueden cambiar de tipo en el tiempo
  - APIs externas
  - Librerías de terceros

## Void y Never

### Tipo: Void

- `void` es lo opuesto de `any`
- Representa la ausencia de tipo
- Comúnmente se usa como tipo de retorno en funciones

#### Void como tipo de dato en variable

- Podemos asignar el valor `null` a una variable tipo `void`
  - En modo strict esto sería un error
- Podemos asignar el valor `undefined` a una variable tipo `void`

> `null` y `undefined` son una especie de subtipos para el tipo `void`

### Tipo: Never

- Representa el tipo de valor que *nunca* ocurre
  - Funciones que lanzan excepciones
  - Funciones que nunca retornan valor

#### Casos de uso

- Un function que sea un handleException
- Un function sea un ciclo infinito

## null y undefined

- En TypeScript, ambos *"valores"* tienen sus respectivos tipos:
  - `null`
  - `undefined`

### Tipo: Null y Undefined Como sub-tipos

- Null y Undefined se pueden asumir como subtipos de los otros tipos de datos
- Significa que se puede asignar `null` y `undefined` a una variable de tipo `string`, por ejemplo

### Tipo: Null y Undefined La opción --strictNullChecks

- Solo permite asignar `null` y `undefined` a una variable de tipo `any` o a sus tipos respectivos
- Ayuda a evitar errores comunes en programación de apps en el ámbito JavaScript

#### Uso de --strictNullChecks

```bash
$ tsc --watch src/main.ts --strictNullChecks
```

ó

```json
tsconfig.json

{
  ...
  "strict": true,
  "strictNullChecks": true,              /* Enable strict null checks. */
  ...
}
```

## Tipo: object

- `object` es el tipo de dato que representa un valor no primitivo
- Es el tipo para variable que no sea number, string, boolean, null, undefined, etc.

### Object vs object

- **Object:** instancia de la clase `Object` de JavaScript
- **object:** tipo para valores no primitivos
  - Con este tipo no se puede acceder a las propiedades del objeto

## Tipo: Array

- Al igual que JavaScript, TypeScript permite definir un arreglo para contener conjuntos de valores
- Usa dos notaciones
  - `[]`
  - `Array<Type>`

## Tipo: Tuple

- Las tuplas permites expresar un arreglo con un número fijo de elementos
- Los tipos de datos son conocidos
- Los tipos de datos de la tupla deben ser diferentes

## Enum

- Los enumerados permiten definir un conjunto de constantes con nombre
- Tienen la ventaja de adaptarse al contexto de la aplicación

## Unión de Tipos, Alias y Tipos Literales

### Unión de Tipos

- En TypeScript se puede definir una variable con múltiples tipos de datos: `Union Type`
- Se usa el símbolo de *pipe ('|')* entre los tipos

### Alias de Tipos

- TypeScript permite crear un alias como nuevo nombre para un tipo
- El alias se puede aplicar también a un conjunto o combinación de tipos
- Se usa la palabra reservada `type`

### Tipos Literales

- Una variable con un tipo literal puede contender unicamente una cade del conjunto
- Se usan cadenas como *"tipos"*, combinados con el símbolo de *pipe ('|')* entre ellos

## Aserciones de tipos

- Cuando el programador puede conocer más que TypeScript sobre el valor de una variable
- Es un mensaje al compilador: *"Confiá en mí, se lo que estoy haciendo"*
- *"Convierte"* el tipo de dato
- TypeScript no realiza ningún tipo de verificación y no afecta en absoluto al tiempo de ejecución de nuestro código
- Se parece al casting de tipos en otros lenguajes de programación
- Usa dos sintaxis
  - *Angle Brackets (`<Type>`variable)*
  - *as (variable `as` type)*
- La prioridad es usar *as* por encima de <> desde la versión 1.6 de TypeScript debido a la ambiguedad en archivos `.jsx`

### Agregar regla recomendada

```json
tsconfig.json

{
  ...
  {
    "no-angle-bracket-type-assertion": true
  }
  ...
}
```

## Funciones en TypeScript

- Los parámetros en las funciones son tipados
- Se pueden definir parámetros opcionales
- El tipo de retorno puede ser
  - tipo básico
  - enum
  - alias
  - tipo literal
  - combinación de tipos

## Resumen

- `null` y `undefined` son subtipos de `void`
- `null` y `undefined` son subtipos de
  - number
  - boolean
  - string
  - array
  - tuple
  - enum
  - any
  - void
  - object

## Interfaces

Las interfaces en TypeScript constituyen una forma poderosa de definir *"contratos"* tanto para el proyecto, cómo para el código externo del mismo.

## Interfaces Propiedades Opcionales

No todas las propiedades de una interfaz podrías ser requeridas.

Establecemos una propiedad cómo opcional con el símbolo *(?)* después del nombre.

### Interfaces Propiedades de Solo Lectura

Algunas de las propiedades de la interfaz podrían no ser modificables una vez creado el objeto.

Esto es posible usan *readonly* antes del nombre de la propiedad.
