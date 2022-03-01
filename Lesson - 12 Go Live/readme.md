<h1>Lesson 12 Go Live/ Deployment using Vercel</h1>

-> npm run build

-> npm install vercel

-> add "deploy": "vercel --prod" to scripts in package.json file.

-> npm run deploy.

-> choose method of login.

-> verify.

-> choose scope - usually only one available so press enter.

-> No(N) to link to existing project. 

-> choose project name (only lowercase and hyphen('-')  allowed).

-> same directory so ./ (which is default so press enter).

-> Press Y to override settings and change output folder from public to dist. 
   Arrow keys to choose between options.
   Go to output directory option and press space to choose and then press enter.
   Now type dist as output directory.

-> The webisite will be deployed.


If we make any changes in the project just type npm run deploy in the terminal after changes are done.
