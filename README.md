# PALABRAS ENCADENADAS

Juego de palabras encadenadas desarrollado con React + Vite, trabajo práctico final de la materio Interfaces de Usuario para la Universidad Nacional de Quilmes.

El juego consiste en encadenar palabras obteniendo la mayor cantidad de puntos posibles antes de que se termine el tiempo.

## Para correrlo

Clonar el repo:

```bash
git clone https://github.com/BelenAlumine/unq-ui-belen-callegaris-trabajo-final.git
cd unq-ui-belen-callegaris-trabajo-final
```

Instalar las dependencias:

```bash
npm install
```

Y levantar el servidor de desarrollo:

```bash
npm run dev
```

Se abre en `http://localhost:5173`.

## Cómo se juega

1. Ingresás tu nombre.
2. Ingresás una palabra cualquiera.
3. Escribís una palabra que empiece con la última letra de la palabra anterior.
4. Si es válida, sumás puntos (un punto por letra) y arranca otro turno con una nueva palabra.
5. Si no es válida o se te acaba el tiempo (15 segundos), termina el juego.
6. Las palabras no se pueden repetir.
7. El tiempo se renueva cada vez que escribís una palabra válida.

## LeaderBoard 

Entran los 10 mejores puntajes, ordenados por cantidad de puntos. En caso de empate queda primero el que usó palabras más largas.


## Stack

- React 19
- React Router
- Vite
- CSS 
