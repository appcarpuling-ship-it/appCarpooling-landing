@echo off
echo ========================================
echo    PUBLICANDO LANDING PAGE CARPOOLING
echo ========================================
echo.

:: Verificar si ya existe un README.md
if not exist "README.md" (
    echo Creando README.md...
    echo # appCarpooling Landing Page >> README.md
    echo. >> README.md
    echo Landing page desarrollada con Next.js 15 y TailwindCSS para la aplicaci\u00f3n de carpooling. >> README.md
    echo. >> README.md
    echo ## Tecnolog\u00edas >> README.md
    echo - Next.js 15.5.4 con Turbopack >> README.md
    echo - React 19.1.0 >> README.md
    echo - TypeScript 5 >> README.md
    echo - TailwindCSS 4 >> README.md
    echo - Framer Motion 12.23.22 >> README.md
) else (
    echo README.md ya existe, saltando creacion...
)

echo.
echo Inicializando repositorio Git...
git init

echo.
echo Configurando usuario Git localmente...
git config user.name "appcarpuling-ship-it"
git config user.email "appcarpuling@gmail.com"

echo.
echo Agregando README.md al staging area...
git add README.md

echo.
echo Agregando todos los archivos al staging area...
git add .

echo.
echo Creando primer commit...
git commit -m "first commit - Next.js 15 landing page"

echo.
echo Cambiando rama principal a 'main'...
git branch -M main

echo.
echo Agregando repositorio remoto...
git remote add origin git@github.com:appcarpuling-ship-it/appCarpooling-landing.git

echo.
echo Subiendo al repositorio remoto...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo    PUBLICACION COMPLETADA EXITOSAMENTE!
    echo ========================================
    echo.
    echo Repositorio publicado en:
    echo https://github.com/appcarpuling-ship-it/appCarpooling-landing
    echo.
    echo TECNOLOGIAS INCLUIDAS:
    echo - Next.js 15.5.4 con Turbopack
    echo - React 19.1.0
    echo - TypeScript 5
    echo - TailwindCSS 4
    echo - Framer Motion 12.23.22
    echo - Lucide React Icons
    echo.
    echo PAGINAS INCLUIDAS:
    echo - Landing principal (/)
    echo - Terminos y condiciones (/terminos)
    echo - Politica de privacidad (/privacidad)
) else (
    echo.
    echo ========================================
    echo          ERROR AL PUBLICAR!
    echo ========================================
    echo.
    echo El repositorio no existe en GitHub.
    echo.
    echo SOLUCION:
    echo 1. Ve a: https://github.com/appcarpuling-ship-it
    echo 2. Haz clic en "New repository"
    echo 3. Nombre: "appCarpooling-landing"
    echo 4. NO marques "Initialize with README"
    echo 5. Crea el repositorio
    echo 6. Vuelve a ejecutar este script
    echo.
    echo Alternativamente, puedes usar:
    echo git push -u origin main
    echo.
)
echo.
echo Tu clave SSH configurada:
echo ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIJx0CBycrmr7YE0ZdLTfgzfRtx7pCMpvA0EVZDXqIpAD appcarpuling@gmail.com
echo.

pause