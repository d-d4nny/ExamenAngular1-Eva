import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IntzPregunta } from './intz-pregunta';

@Injectable({
  providedIn: 'root',
})
export class PreguntasService {
  private preguntas: IntzPregunta[] = [
    {
      pregunta: '¿Cómo se define TypeScript?',
      respuesta: 'TypeScript es un lenguaje de programación de código abierto desarrollado por Microsoft. Es un superconjunto tipado de JavaScript que se compila a JavaScript en tiempo de ejecución.',
    },
    {
      pregunta: '¿Cuál es la principal diferencia de TypeScript respecto de JavaScript?',
      respuesta: 'La principal diferencia es que TypeScript es un lenguaje con tipado estático opcional, lo que significa que puedes especificar tipos para tus variables, funciones y estructuras de datos. Esto facilita la detección de errores durante el desarrollo y proporciona un mejor soporte para el mantenimiento y escalabilidad de aplicaciones.',
    },
    {
      pregunta: 'Muestra la lista de tipos básicos de TypeScript.',
      respuesta: 'Los tipos básicos en TypeScript incluyen: number, string, boolean, null, undefined, object, symbol, any, void.',
    },
    {
      pregunta: '¿Con qué tres elementos podemos crear un tipo personalizado en TypeScript?',
      respuesta: 'Para crear un tipo personalizado en TypeScript, puedes utilizar las siguientes tres construcciones: interface para definir la forma de un objeto, type para definir tipos basados en otros tipos y class para crear tipos basados en clases y objetos.',
    },
    {
      pregunta: '¿Puedo ejecutar TypeScript en un navegador? Explica tu respuesta.',
      respuesta: 'No puedes ejecutar directamente código TypeScript en un navegador. TypeScript necesita ser compilado a JavaScript antes de ejecutarse en un navegador, ya que los navegadores solo entienden JavaScript. La compilación se realiza utilizando el compilador de TypeScript (tsc), que traduce el código TypeScript a JavaScript antes de ser cargado en el navegador.',
    },
    {
      pregunta: 'Entonces, ¿cómo es que puedo ver con las herramientas del desarrollador del navegador los archivos ts?',
      respuesta: 'Puedes ver los archivos TypeScript en las herramientas de desarrollo del navegador a través de la pestaña "Sources". Sin embargo, estos archivos serán visibles en su forma original (TypeScript) solo si has habilitado la opción de mapa de origen (source map) durante la compilación de TypeScript. Los mapas de origen permiten que los navegadores muestren el código fuente original (TypeScript) junto con el código JavaScript resultante.',
    },
    {
      pregunta: '¿Para qué sirve el archivo tsconfig.json?',
      respuesta: 'tsconfig.json es un archivo de configuración para TypeScript que especifica la configuración del compilador de TypeScript para un proyecto. Permite definir opciones de compilación, incluyendo la raíz de entrada del proyecto, la ubicación de los archivos de salida, la configuración del transpilador, las opciones de tipo, entre otras. Esto simplifica la compilación al definir todas las opciones necesarias en un solo archivo. ',
    }
  ];

  getPreguntas(): Observable<IntzPregunta[]> {
    return of(this.preguntas);
  }
}