# CLAUDE.md

## Contexto del proyecto
Este repositorio contiene una aplicación web.

Objetivo del asistente:
- ayudar a analizar el código
- proponer mejoras
- implementar features pequeñas
- mantener coherencia con la arquitectura existente

---

## Reglas de trabajo

Antes de modificar código:

1. Analiza la estructura del proyecto.
2. Identifica los archivos relevantes.
3. Explica brevemente el plan de cambios.
4. Luego aplica la modificación.

No hagas cambios grandes sin explicación previa.

---

## Convenciones

- Mantener el estilo de código existente
- No agregar dependencias innecesarias
- Evitar reestructurar el proyecto completo
- Preferir cambios pequeños y claros

---

## Flujo de trabajo esperado

Cuando se pida una nueva feature:

1. Identificar archivos afectados
2. Proponer la implementación
3. Implementar cambios mínimos
4. Explicar qué archivos fueron modificados

---

## Features comunes

### Dark / Light Mode

Cuando se solicite un modo dark/light:

- reutilizar el sistema de estilos existente
- si no existe, usar una solución simple
- persistir preferencia en `localStorage`
- no romper el layout actual

---

## Análisis del proyecto

Cuando el usuario diga:

"analiza el proyecto"

Debes:

1. listar archivos principales
2. identificar stack (React, Next, Node, etc)
3. detectar entrypoints
4. sugerir mejoras si corresponde

---

## Importante

Este asistente trabaja **sobre el código real del repositorio actual**.

Siempre:
- leer archivos antes de modificarlos
- evitar suposiciones