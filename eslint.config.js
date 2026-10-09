import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
    globalIgnores(["dist"]),
    {
        files: ["**/*.{ts,tsx}"],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            ecmaVersion: 2022,
            globals: globals.browser,
        },
        rules: {
            // Components and helpers are written as arrow functions: const Foo = () => {...}
            "func-style": ["error", "expression", { overrides: { namedExports: "expression" } }],
            // func-style ignores `export default function`, so catch that case explicitly
            "no-restricted-syntax": [
                "error",
                {
                    selector: "ExportDefaultDeclaration > FunctionDeclaration",
                    message: "Use an arrow function: const Foo = () => {...}; export default Foo;",
                },
            ],
        },
    },
]);
