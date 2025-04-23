<template>
    <footer role="contentinfo" class="bg-primary text-light grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-5 p-10">
        <!-- Navigation Links -->
        <nav aria-label="Enlaces del sitio" class="flex flex-col gap-5 text-center sm:text-start">
            <a href="#inicio" class="hover:text-accent transition-all duration-500 ease-in-out">
                INICIO
            </a>

            <a href="#nosotros" class="hover:text-accent transition-all duration-500 ease-in-out">
                NOSOTROS
            </a>

            <a href="#contacto" class="hover:text-accent transition-all duration-500 ease-in-out">
                CONTACTO
            </a>
        </nav>

        <!-- Social Media Links -->
        <section aria-labelledby="social-heading" class="flex flex-col gap-5 text-center">
            <h2 id="social-heading">SEGUINOS EN NUESTRAS REDES</h2>

            <nav aria-label="Redes sociales">
                <ul class="flex justify-center gap-5">
                    <li>
                        <a href="#" target="_blank" rel="noopener noreferrer"
                            class="hover:text-accent transition-all duration-500 ease-in-out" aria-label="TikTok">
                            <i class="fab fa-tiktok text-2xl" aria-hidden="true" />
                            <span class="sr-only">TikTok</span>
                        </a>
                    </li>

                    <li>
                        <a href="#" target="_blank" rel="noopener noreferrer"
                            class="hover:text-accent transition-all duration-500 ease-in-out" aria-label="Instagram">
                            <i class="fab fa-instagram text-2xl" aria-hidden="true" />
                            <span class="sr-only">Instagram</span>
                        </a>
                    </li>

                    <li>
                        <a href="#" target="_blank" rel="noopener noreferrer"
                            class="hover:text-accent transition-all duration-500 ease-in-out" aria-label="Facebook">
                            <i class="fab fa-facebook text-2xl" aria-hidden="true" />
                            <span class="sr-only">Facebook</span>
                        </a>
                    </li>

                    <li>
                        <a href="#" target="_blank" rel="noopener noreferrer"
                            class="hover:text-accent transition-all duration-500 ease-in-out" aria-label="Twitter (X)">
                            <i class="fab fa-x-twitter text-2xl" aria-hidden="true" />
                            <span class="sr-only">Twitter</span>
                        </a>
                    </li>

                    <li>
                        <a href="#" target="_blank" rel="noopener noreferrer"
                            class="hover:text-accent transition-all duration-500 ease-in-out" aria-label="YouTube">
                            <i class="fab fa-youtube text-2xl" aria-hidden="true" />
                            <span class="sr-only">YouTube</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </section>

        <!-- Developer's Portfolio Link -->
        <div class="flex flex-col gap-5 text-center sm:text-end">
            <a href="https://federico-gil-de-muro-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer"
                class="hover:text-accent transition-all duration-500 ease-in-out"
                aria-label="Portfolio de Federico Gil de Muro">
                <i class="fas fa-code" aria-hidden="true" />
                <span class="sr-only">Portfolio de Federico Gil de Muro</span>
                <span aria-hidden="true"> FEDERICO GIL DE MURO</span>
            </a>
        </div>
    </footer>
</template>
