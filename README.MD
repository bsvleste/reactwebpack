01-fundamentos do react
  yarn init -y para configurar o package
   
  yarn add react
  yarn add react-dom

  estruturas de pasta
    a pasta src sera onde ficar todo o codigo da aplicação
     outra é a pasta public dentro da pasta fica os arquivos 
     publicos, como index.html e as imagens

     public/index.html 

     2- babel
     babel é uma ferramenta para pre-processar o javascritpt

     adicionar as dependencias do babel com dependencias de desenvolvimento

     yarn add @babel/cli @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-loader -D
      
    arquivo de configuração  babel.config.js
    
    3 - webpack 
      O webpack é um empacotador de código para projetos web, como o browserify. O que ele se propõe a fazer de diferente é focar em módulos da sua aplicação. Nem sempre ter todo e qualquer JavaScript/CSS do seu projeto num único arquivo é bom, por isso o webpack tem a ideia de code splitting, onde você modulariza partes reaproveitáveis do seu projeto, facilitando o desenvolvimento independente, por exemplo, ter uma equipe trabalhando em um módulo X e outra num módulo Y, mas ambos de um mesmo projeto.

      yarn add webpack webpack-cli webpack-dev-server -D

      arquivo de configuraçao  webpack.config.js