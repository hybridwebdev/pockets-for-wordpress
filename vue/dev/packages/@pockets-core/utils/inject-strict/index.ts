/*
   credits https://logaretm.com/blog/type-safe-provide-inject/
*/
import { inject, InjectionKey } from "vue"
export function injectStrict<T>(key: InjectionKey<T>, fallback?: T, treatDefaultAsFactory?: boolean) {
  const resolved = inject( key, fallback, treatDefaultAsFactory as any )
  if (resolved === undefined ) {
    throw new Error(`Could not resolve ${key.description}`);
  }
  return resolved;
}