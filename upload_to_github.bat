@echo off
echo ==========================================
echo   UPLOADING TO GITHUB - AUTOMATED SCRIPT
echo ==========================================
echo.

:: 1. Initialize Git
echo [1/6] Initializing Git repository...
git init
if %errorlevel% neq 0 goto :error

:: 2. Configure User
echo [2/6] Configuring user settings...
git config user.name "Siva Reddy Durgempudi"
git config user.email "siva.durgempudi92@gmail.com"

:: 3. Add Files
echo [3/6] Adding files...
git add .

:: 4. Commit
echo [4/6] Committing changes...
git commit -m "Initial commit: Personal Profile Website"

:: 5. Add Remote
echo [5/6] Linking to GitHub...
:: Remove origin if it already exists to avoid errors on retry
git remote remove origin 2>nul
git remote add origin https://github.com/siva970568/personal-profile.git

:: 6. Push
echo [6/6] Pushing to GitHub...
echo.
echo -------------------------------------------------------
echo NOTE: A browser window or login prompt may appear.
echo Please sign in to authorize the upload.
echo -------------------------------------------------------
echo.
git branch -M main
git push -u origin main

if %errorlevel% neq 0 goto :error

echo.
echo ==========================================
echo      SUCCESS! UPLOAD COMPLETE 🚀
echo ==========================================
echo.
pause
exit /b 0

:error
echo.
echo ==========================================
echo      ERROR: SOMETHING WENT WRONG ❌
echo ==========================================
echo.
echo Please check the error message above.
echo Common issues:
echo  - Git is not installed (Download from git-scm.com)
echo  - Repository 'personal-profile' does not exist on GitHub
echo  - Internet connection issues
echo.
pause
exit /b 1
