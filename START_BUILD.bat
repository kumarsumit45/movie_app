@echo off
title Movie App - EAS Build
color 0A
echo.
echo ========================================
echo    MOVIE APP - EAS BUILD PROCESS
echo ========================================
echo.
echo You are logged in as: kumarsumit45
echo.
echo This script will help you build your APK file.
echo Please answer 'Y' (Yes) to all prompts.
echo.
echo ========================================
echo.
pause
echo.
echo Running: eas init
echo When asked "create a project", type: Y
echo.
call eas init
echo.
echo ========================================
echo.
echo Running: eas build
echo When asked "Generate keystore", type: Y
echo.
call eas build --platform android --profile production
echo.
echo ========================================
echo BUILD COMPLETE!
echo Check above for your APK download link
echo ========================================
echo.
pause
