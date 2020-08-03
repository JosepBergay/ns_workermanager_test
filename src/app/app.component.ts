import { Component, OnInit } from "@angular/core";
import { enqueueOnetime, enqueuePeriodic } from "../worker-helper";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
    ngOnInit() {
        console.log("Android VERSION.SDK", android.os.Build.VERSION.SDK);
        enqueuePeriodic();
        // enqueueOnetime();
    }
}
