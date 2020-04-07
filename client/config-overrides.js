<<<<<<< HEAD
const { override, fixBabelImports, addLessLoader} = require('customize-cra');


module.exports = override(
 fixBabelImports('import', {
=======
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

 module.exports = override(
   fixBabelImports('import', {
>>>>>>> martin
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: true,
   }),
   addLessLoader({
<<<<<<< HEAD
       javascriptEnabled: true,
       modifyVars: { 
           '@primary-color': '#1DA57A' },
     }),
=======
       javascriptEnabled: true, 
       modifyVars:{
        '@primary-color': '#1DA57A' 
       }
   }),
>>>>>>> martin
 );