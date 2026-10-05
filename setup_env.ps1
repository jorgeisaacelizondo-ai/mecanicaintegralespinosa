$userPath = [System.Environment]::GetEnvironmentVariable('Path', 'User')
if ($userPath -notlike '*C:\Program Files\nodejs*') {
    [System.Environment]::SetEnvironmentVariable('Path', $userPath + ';C:\Program Files\nodejs', 'User')
    Write-Host "Added C:\Program Files\nodejs to User PATH successfully."
} else {
    Write-Host "C:\Program Files\nodejs is already in User PATH."
}

