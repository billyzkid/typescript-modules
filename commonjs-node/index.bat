@echo off
setlocal

pushd "%~dp0"
node "main.js"
popd

endlocal
pause
