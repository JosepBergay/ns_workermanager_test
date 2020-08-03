import { ad } from "@nativescript/core/utils/utils";
declare const androidx;
declare const com;

export const enqueueOnetime = () => {
    const req = new androidx.work.OneTimeWorkRequest.Builder(
        com.tns.workers.MyWorker.class
    ).build();
    const workManager = getWorkManager();
    // workManager.enqueue(req);
    workManager.enqueueUniqueWork(
        "my-unique-name",
        androidx.work.ExistingWorkPolicy.KEEP,
        req
    );
};

export const enqueuePeriodic = () => {
    const req = new androidx.work.PeriodicWorkRequest.Builder(
        com.tns.workers.MyWorker.class,
        15,
        java.util.concurrent.TimeUnit.MINUTES
    ).build();
    const workManager = getWorkManager();
    workManager.enqueueUniquePeriodicWork(
        "my-unique-periodic-name",
        androidx.work.ExistingPeriodicWorkPolicy.KEEP,
        req
    );
};

const getWorkManager = () => {
    const context = ad.getApplicationContext();
    const workManager = androidx.work.WorkManager.getInstance(context);
    return workManager;
};
