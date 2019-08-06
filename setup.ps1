echo "create Electron project..."
npm init

echo "install modules..."
npm install --save electron electron-builder typescript
npm install --save @types/node @types/electron
npm install -g typings

echo "setup auto compiling..."
tsc --init
