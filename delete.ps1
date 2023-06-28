$nodeModules = "node_modules"
$packageLockJson = "package-lock.json"
$pnpmLockYaml = "pnpm-lock.yaml"
$yarnLock = "yarn.lock"
$nextDebug = ".next"

Remove-Item -Path $nodeModules -Force -Recurse
Remove-Item -Path $nextDebug -Force -Recurse
Remove-Item -Path $packageLockJson -Force
Remove-Item -Path $pnpmLockYaml -Force
Remove-Item -Path $yarnLock -Force