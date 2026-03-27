/**
 * @file cn.ts
 * @description Small class name join helper.
 * @module frontend/src/utils
 */

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}