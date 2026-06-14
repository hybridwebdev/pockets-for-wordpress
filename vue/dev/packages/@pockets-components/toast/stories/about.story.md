---
route: 'pockets vue/components/toast/About'
title: 'About'
---

## Toast notifications

Toast notifications are brief, auto-expiring messages that provide feedback or updates to users. The toast API can be used via the built-in ```pockets-ux-toast``` component, or through Pockets global api via ```$pockets.toast```.

It has three methods that display the provided message with different styles.

- ```success( message: string )```
- ```error( message: string )```
- ```warn( message: string )```