# toDoList

# **Dependencias**
## Node
### v20.19.3 o superior
## Angular CLI
### v18.1.4 o superior
## Ionic
### v7.2.1
## Android Studio
### v2024 o superior

# **Compilación del proyecto en local**
## Instalar el proyecto
### npm install
## Correr el proyecto
### npm run start-ionic
#### *La aplicación correrá en el puerto 8100*

# **Creación del artefacto android**
## Compilar el proyecto
### npm run build-prod-capacitor
#### *la aplicación se compilará y luego de crear los archivos necesarios dentro de la carpeta www y sincronizar con la carpeta android, se abrirá Android Studio con el proyecto*
## Dentro de Android studio
### 1. Navegar en el menú superior Build>Clean Proyect
### 2. Navegar en el menú superior Build>Assemble Proyect
### 3. Navegar en el menú superior Build>Generate App Bundles or APKs

# **Creación del artefacto ios**
## Compilar el proyecto
### npm run build-prod-capacitor-ios
#### *la aplicación se compilará y luego de crear los archivos necesarios dentro de la carpeta www y sincronizar con la carpeta ios  y abrirá Xcode automáticamente con el proyecto iOS listo para configurar y compilar.*
## Dentro de Xcode
### 1. En el menú izquierdo, selecciona el proyecto con el nombre de tu app 
### 2. Verifica los siguientes datos en la pestaña "General":
- **Bundle Identifier**
- **Team** (elige tu cuenta de desarrollador Apple)
- **Version** y **Build** (ej: `1.0.0`, `1`)
### 3. Selecciona tu **dispositivo o simulador** (esquina superior izquierda)
### 4. Ve al menú superior **Product > Clean Build Folder**
### 5. Luego selecciona **Product > Archive**  
#### Esto creará un **archivo `.xcarchive`**

## Exportar el artefacto
### 6. Una vez terminado el archivado, se abrirá la ventana **Organizer**
- Desde allí puedes:
  - **Exportar el `.ipa`** para distribución manual o empresarial
  - **Subir a App Store Connect** directamente para pruebas internas o publicación