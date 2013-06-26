@echo off
setlocal

pushd "%~dp0"
node -e "var library = require(\"./src/Library\"); console.log(library.read());"
popd

endlocal
pause
