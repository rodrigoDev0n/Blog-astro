---
title: 'Explorando los Tipos de Variables en JavaScript'
description: 'Aprende los diferentes tipos de variables en javascript...'
date: '08-12-2023'
author: 'Rodrigo Poblete'
location: 'Tucapel, Chile 🇨🇱'
tag: 'Programación'
locale: 'es'
layout: '../../layouts/BlogLayout.astro'
---

<p class="mt-4 mb-3">JavaScript, como lenguaje de programación versátil, ofrece varios tipos de variables que los desarrolladores utilizan para almacenar y manipular datos. Estos tipos de variables desempeñan roles específicos y se adaptan a diversas necesidades en el desarrollo de software. A continuación, exploraremos los principales tipos de variables en JavaScript y sus usos comunes.</p>


<h1 class="mb-3">1. Var </h1>
 
<p class="mb-3">
var fue la forma original de declarar variables en JavaScript, pero ha sido en gran medida reemplazada por let y const en versiones más recientes del lenguaje. Una variable declarada con var tiene un ámbito de función y no respeta el ámbito de bloque, lo que a veces puede llevar a comportamientos inesperados. Su uso es cada vez menos común, pero aún se encuentra en código heredado.
</p>

<h1 class="mb-3">Ejemplo:</h1>

<div class="mt-4 mb-3 bg-500 rounded-lg shadow-md">

```js {.rounded-lg}

    var nombre = 'Rodrigo';
    console.log(nombre);


```

</div>

<h1 class="mb-3">2. Let</h1>

<p class="mb-3">
let se introdujo en ECMAScript 6 y se convirtió en la forma preferida de declarar variables con ámbito de bloque. A diferencia de var, las variables declaradas con let respetan el ámbito de bloque, lo que significa que solo están disponibles dentro del bloque donde se declaran.
</p>

<h1 class="mb-3">Ejemplo: </h1>

<div class="mt-4 mb-3 bg-500 rounded-lg shadow-md">

```js {.rounded-lg}

    let nombre = 'Rodrigo';
    console.log(nombre);


```

</div>

<h1 class="mb-3">3. Const</h1>

<p class="mb-3">
const también se introdujo en ECMAScript 6 y se utiliza para declarar variables constantes cuyo valor no cambiará durante su ciclo de vida. Las variables declaradas con const deben inicializarse al momento de la declaración y no pueden ser reasignadas.
</p>

<h1 class="mb-3">Ejemplo</h1>

<div class="mt-4 bg-500 rounded-lg shadow-md">

```js {.rounded-lg}

    const nombre = 'Rodrigo';
    console.log(nombre);


```

</div>
