# Movie App - EAS Build Script (PowerShell)
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Movie App - EAS Build APK Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Set location to script directory
Set-Location -Path $PSScriptRoot

Write-Host "Step 1: Checking EAS CLI..." -ForegroundColor Yellow
eas --version
Write-Host ""

Write-Host "Step 2: Checking login status..." -ForegroundColor Yellow
$whoami = eas whoami 2>&1
Write-Host $whoami
Write-Host ""

Write-Host "Step 3: Initializing EAS project..." -ForegroundColor Yellow
Write-Host "When prompted, press 'Y' to create the project" -ForegroundColor Green
$process = Start-Process -FilePath "eas" -ArgumentList "init" -NoNewWindow -Wait -PassThru
Write-Host ""

if ($process.ExitCode -eq 0) {
    Write-Host "Step 4: Starting APK build..." -ForegroundColor Yellow
    Write-Host "This will build an APK file (not AAB)" -ForegroundColor Green
    Write-Host ""

    Start-Process -FilePath "eas" -ArgumentList "build", "--platform", "android", "--profile", "production" -NoNewWindow -Wait

    Write-Host ""
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host "Build process completed!" -ForegroundColor Green
    Write-Host "Check the output above for the download link" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Cyan
} else {
    Write-Host "EAS initialization failed. Please run 'eas init' manually." -ForegroundColor Red
}

Write-Host ""
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
