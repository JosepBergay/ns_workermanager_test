# ns_workermanager_test

This repo is a sample project to illustrate a possible bug in NativeScript/android-runtime.

Error appears on Android api 23 but not on api 27 (haven't tested other api levels).

`Error: java.lang.NoClassDefFoundError: java.time.Duration`

Steps to reproduce:

```bash
tns run android
```
