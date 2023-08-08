$nodeModules = "node_modules"
$packageLockJson = "package-lock.json"
$pnpmLockYaml = "pnpm-lock.yaml"
$yarnLock = "yarn.lock"
$nextDebug = ".next"

If (Test-Path -Path $nodeModules) {
    Remove-Item -Path $nodeModules -Force -Recurse
}

If (Test-Path -Path $packageLockJson) {
    Remove-Item -Path $packageLockJson -Force -Recurse
}

If (Test-Path -Path $pnpmLockYaml) {
    Remove-Item -Path $pnpmLockYaml -Force -Recurse
}

If (Test-Path -Path $yarnLock) {
    Remove-Item -Path $yarnLock -Force -Recurse
}

If (Test-Path -Path $nextDebug) {
    Remove-Item -Path $nextDebug -Force -Recurse
}