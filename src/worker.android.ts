declare const androidx;

@JavaProxy("com.tns.workers.MyWorker")
export class MyWorker extends androidx.work.Worker {
    constructor(context, params) {
        super(context, params);
        return global.__native(this);
    }

    public async doWork() {
        console.log("doing work...");
        let result;
        try {
            await new Promise((r, x) => setTimeout(r, 5_000));
            result = androidx.work.ListenableWorker.Result.success();
        } catch (error) {
            console.log("ERROR WORKERMANAGER", error);
            result = androidx.work.ListenableWorker.Result.failure();
        } finally {
        }
        return result;
    }

    public onStopped() {
        // Cleanup because you are being stopped.
        console.log("onStopped from MyWorker !!!");
    }
}
