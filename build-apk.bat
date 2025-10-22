@echo off
echo ========================================
echo Movie App - EAS Build APK Script
echo ========================================
echo.

cd /d "%~dp0"

echo Step 1: Checking EAS CLI installation...
call eas --version
if %ERRORLEVEL% NEQ 0 (
    echo EAS CLI not found. Installing...
    call npm install -g eas-cli
)
echo.

echo Step 2: Checking login status...
call eas whoami
if %ERRORLEVEL% NEQ 0 (
    echo Please login to EAS...
    call eas login
)
echo.

echo Step 3: Initializing EAS project (if needed)...
call eas init
echo.

echo Step 4: Starting APK build...
echo This will build an APK file (not AAB) as configured in eas.json
echo.
call eas build --platform android --profile production
echo.

echo ========================================
echo Build process completed!
echo Check the link above to download your APK
echo ========================================
pause
