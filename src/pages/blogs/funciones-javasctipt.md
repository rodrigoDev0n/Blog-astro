---
title: 'Las funciones en JavaScript'
description: 'Aprende como funcionan las funciones en JavaScript'
date: '31-12-2023'
author: 'Rodrigo Poblete'
location: 'Tucapel, Chile 🇨🇱'
tag: 'Programación'
locale: 'es'
layout: '../../layouts/BlogLayout.astro'
---

<p class="mt-4 mb-3">
Las funciones son un componente fundamental en JavaScript, permitiendo a los desarrolladores encapsular bloques de código reutilizable y estructurar programas de manera eficiente. En este post, exploraremos las funciones en JavaScript, desde su creación hasta conceptos avanzados.
</p>

<h1 class="mb-3">
1. Declaración de Funciones:
</h1>

<p class="mt-4 mb-3">
En JavaScript, puedes declarar una función de varias maneras. La forma más común es mediante la palabra clave function. Aquí hay un ejemplo básico:
</p>

```js {.rounded-lg}

    function saludar() {
    console.log("¡Hola, mundo!");
    }

    // Llamada a la función
    saludar();


```

<div class="mt-3"></div>

<h1 class="mb-3">
2. Parámetros y Argumentos:
</h1>

<p class="mt-4 mb-3">
Las funciones pueden aceptar parámetros, que son variables utilizadas en la función. Los argumentos son los valores reales pasados a la función al llamarla.
</p>

``` js {.rounded-lg}

    function saludarPersona(nombre) {
        console.log(`¡Hola, ${nombre}!`);
    }

    saludarPersona("Juan");


```
<div class="mt-3"></div>

<h1 class="mb-3">
3. Valor de Retorno:
</h1>

<p class="mt-4 mb-3">
Las funciones pueden devolver un valor utilizando la palabra clave return. Esto permite que el resultado de una función sea utilizado en otras partes del código.
</p>

```js {.rounded-lg}

    function sumar(a, b) {
    return a + b;
    }

    let resultado = sumar(3, 5);
    console.log(resultado); // Resultado: 8


```

<div class="mt-4"></div>

<h1 class="mb-3">
4. Expresiones de Funciones:
</h1>

<p class="mt-4 mb-3">
También puedes crear funciones como expresiones. Estas funciones anónimas son asignadas a variables y a menudo se utilizan en situaciones específicas.
</p>

```js {.rounded-lg}

    const multiplicar = function(a, b) {
    return a * b;
    };

    console.log(multiplicar(4, 6)); // Resultado: 24


```

<div class="mt-4"></div>

<h1 class="mb-3">
5. Funciones Flecha:
</h1>

<p class="mt-4 mb-3">
Las funciones flecha (=>) son una forma más concisa de escribir funciones. Son especialmente útiles para funciones simples y evitan la necesidad de la palabra clave function.
</p>

```js {.rounded-lg}

    const cuadrado = (x) => x * x;

    console.log(cuadrado(4)); // Resultado: 16


```

<div class="mt-4"></div>

<h1 class="mb-3">
6. Funciones de Orden Superior:
</h1>

<p class="mt-4 mb-3">
En JavaScript, las funciones son de primera clase y pueden tratarse como objetos. Las funciones de orden superior toman una o más funciones como argumentos y/o devuelven una función.
</p>

```js {.rounded-lg}

    function operacionMatematica(operacion, a, b) {
        return operacion(a, b);
    }

    const suma = (a, b) => a + b;
    const resta = (a, b) => a - b;

    console.log(operacionMatematica(suma, 8, 3)); // Resultado: 11
    console.log(operacionMatematica(resta, 8, 3)); // Resultado: 5


```

<div class="mt-4"></div>

<h1 class="mb-3">
7. Contexto (this) en Funciones:
</h1>

<p class="mt-4 mb-3">
El valor de this en una función depende de cómo se llama. Las funciones flecha no tienen su propio this, adoptan el valor del this de su ámbito circundante.
</p>

```js {.rounded-lg}

    const persona = {
    nombre: "Juan",
    saludar: function() {
        console.log(`Hola, soy ${this.nombre}.`);
    }
    };

    persona.saludar(); // Resultado: Hola, soy Juan.


```

<div class="mt-4"></div>

<h1 class="mb-3">
Conclusión:
</h1>


<p class="mt-4 mb-3">
Las funciones son una piedra angular en JavaScript, proporcionando modularidad y reutilización de código. Con una comprensión sólida de cómo declarar, llamar y trabajar con funciones, los desarrolladores pueden construir aplicaciones más eficientes y mantenibles.

Este post solo rasca la superficie de las funciones en JavaScript. Para profundizar aún más, explora conceptos como funciones recursivas, cierres (closures), funciones asíncronas y promesas. ¡Las funciones en JavaScript son poderosas y versátiles, y su dominio lleva a la creación de código JavaScript robusto y elegante!
</p>
